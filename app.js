/* Professor Stick Figure: site shell, router, quiz player, smart drill, progress. */
(function () {
  var app = document.getElementById('app');
  var QUIZZES = window.QUIZZES || [], COURSE = window.COURSE || { cl: [], ucc: [] };
  var READY = window.READY || [];
  var BANK = window.BANK || (window.DRILL || []).map(function (q, i) { q.id = 'b' + (i + 1); return q; });

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var store = {
    get: function (k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* Which lesson teaches each topic label used on questions. */
  var LESSON_FOR = { 'Which rulebook?': 'rulebook', 'The Bargain': 'bargain', 'The Offer': 'offer', 'Acceptance': 'acceptance',
    'Promissory Estoppel': 'estoppel', 'Boilerplate': 'boilerplate', 'Online Contracts': 'online', 'Battle of the Forms': 'ucc-forms',
    'Interpretation': 'interpretation', 'Parol Evidence Rule': 'parol', 'Statute of Frauds': 'frauds', 'Unconscionability': 'unconscionability',
    'Mistake': 'mistake', 'Warranties': 'ucc-warranty', 'Fraud and Misrepresentation': 'fraud', 'Impossibility and Frustration': 'impossibility',
    'Capacity': 'capacity', 'Duress': 'duress', 'Undue Influence': 'undue', 'Damages': 'damages', 'Limits on Damages': 'limits',
    'Specific Performance': 'specific', 'Substantial Performance': 'substantial', 'Perfect Tender': 'ucc-tender', 'UCC Remedies': 'ucc-buyer',
    'Third-Party Beneficiaries': 'beneficiaries', 'Assignment and Delegation': 'assignment', 'UCC Formation': 'ucc-formation', 'Firm Offers': 'ucc-firm-offer' };

  /* ---------- answer history (kept in this browser only) ---------- */
  var stats = {
    load: function () { var s = store.get('psf-stats', null) || {}; s.q = s.q || {}; s.t = s.t || {}; s.log = s.log || []; return s; },
    record: function (id, topic, ok) {
      var s = stats.load(), q = s.q[id] || { n: 0, c: 0 }, t = s.t[topic] || { n: 0, c: 0 };
      q.n++; t.n++; if (ok) { q.c++; t.c++; } q.ok = ok ? 1 : 0; q.at = Date.now();
      s.q[id] = q; s.t[topic] = t; store.set('psf-stats', s);
    },
    log: function (kind, score, total) {
      var s = stats.load(); s.log.unshift({ at: Date.now(), kind: kind, score: score, total: total });
      s.log = s.log.slice(0, 100); store.set('psf-stats', s);
    },
    /* estimated mastery of a topic, 0 to 1; an untouched topic counts as 0.5 */
    mastery: function (s, topic) { var t = s.t[topic]; return t ? (t.c + 1) / (t.n + 2) : 0.5; },
    weakest: function (s, howMany) {
      return Object.keys(s.t).filter(function (t) { return s.t[t].n >= 2; })
        .sort(function (a, b) { return stats.mastery(s, a) - stats.mastery(s, b); }).slice(0, howMany);
    }
  };

  /* The professor. Feet at y=112, head at y=0. */
  function prof(pose) {
    var arm = pose === 'wave' ? 'M0 30 L-20 50 M0 30 L24 4' : pose === 'stand' ? 'M0 30 L-18 54 M0 30 L18 54' : 'M0 30 L-22 46 M0 30 L18 52';
    var pointer = pose === 'point' || !pose ? '<path class="ink pointer" stroke-width="2.5" d="M-22 46 L-74 14"/>' : '';
    return '<svg class="wb" viewBox="-82 -30 124 150" aria-hidden="true">' + pointer +
      '<path class="ink" stroke-width="3" d="M0 16 V70 M0 70 L-14 112 M0 70 L14 112 ' + arm + '"/>' +
      '<circle class="ink" stroke-width="3" cx="0" cy="0" r="16" style="fill:#fff"/>' +
      '<path d="M-22 -13 L0 -22 L22 -13 L0 -4 Z" style="fill:#1d2b3a;stroke:#1d2b3a;stroke-width:2;stroke-linejoin:round"/>' +
      '<path class="ink c-red" stroke-width="2" d="M22 -13 V-2"/><circle cx="22" cy="0" r="2.2" style="fill:#d4322c"/>' +
      '<circle class="ink" stroke-width="2" cx="-6.5" cy="1" r="4.5"/><circle class="ink" stroke-width="2" cx="6.5" cy="1" r="4.5"/>' +
      '<path class="ink" stroke-width="2" d="M-2 1 h4"/><ellipse class="mouth" cx="0" cy="10" rx="4" ry="1" style="fill:#1d2b3a"/></svg>';
  }
  function says(text, pose) { return '<div class="explain" style="margin:0 0 14px">' + prof(pose || 'point') + '<div class="bubble">' + text + '</div></div>'; }

  /* ---------- quiz player (diagnostics, drill, mini sets) ----------
     cfg: title, kind (label for the history log), exit [href, text], done(score,total), and either
       questions: [...] with id(q, i)   or   count + pick(soFar) for a drill that chooses as it goes. */
  var currentAudio = null;
  function stopAudio() { if (currentAudio) { currentAudio.pause(); currentAudio = null; } }

  function runQuiz(el, cfg) {
    var qs = cfg.questions ? cfg.questions.slice() : [], total = cfg.questions ? qs.length : cfg.count, i = 0, picks = [];
    function soundOn() { return store.get('psf-sound', true); }
    function qid(q, n) { return q.id || (cfg.id ? cfg.id(q, n) : null); }

    function show() {
      stopAudio();
      if (!qs[i] && cfg.pick) { qs[i] = cfg.pick(qs); if (!qs[i]) { total = i; return results(); } }
      var q = qs[i], L = 'ABCD', dots = '';
      for (var n = 0; n < total; n++) dots += '<i class="' + (n < picks.length ? (picks[n] === qs[n].a ? 'r' : 'w') : (n === i ? 'cur' : '')) + '"></i>';
      var trackName = q.k === 'ucc' ? 'UCC' : q.k === 'both' ? 'Common law + UCC' : 'Common law';
      el.innerHTML =
        '<section class="board quiz"><div class="qhead"><span class="tag">' + esc(q.t) + '</span>' +
        '<span class="tag ' + esc(q.k) + '">' + trackName + '</span>' +
        '<span class="count">' + esc(cfg.title) + ' · ' + (i + 1) + ' of ' + total + '</span></div>' +
        '<div class="dots" aria-hidden="true">' + dots + '</div>' +
        '<p class="qtext">' + esc(q.q) + '</p><div class="opts">' +
        q.o.map(function (o, n) { return '<button class="opt" type="button" data-n="' + n + '"><b>' + L[n] + '</b><span>' + esc(o) + '</span></button>'; }).join('') +
        '</div><div class="explain" hidden></div><div class="qfoot">' +
        '<button class="btn small" type="button" data-sound>' + (soundOn() ? 'Voice: on' : 'Voice: off') + '</button>' +
        '<button class="btn go" type="button" data-next hidden>' + (i + 1 < total ? 'Next question' : 'See results') + '</button></div></section>';

      var box = el.querySelector('.explain');
      el.querySelectorAll('.opt').forEach(function (b) {
        b.addEventListener('click', function () {
          var n = +b.dataset.n; picks[i] = n;
          el.querySelectorAll('.opt').forEach(function (x) {
            x.disabled = true;
            if (+x.dataset.n === q.a) x.classList.add('right'); else if (x === b) x.classList.add('wrong');
          });
          var ok = n === q.a, id = qid(q, i);
          if (id) stats.record(id, q.t, ok);
          box.innerHTML = prof('point') + '<div class="bubble"><strong class="' + (ok ? 'ok' : 'no') + '">' +
            (ok ? 'Correct.' : 'Not quite. The answer is ' + L[q.a] + '.') + '</strong><p>' + esc(q.w) + '</p></div>';
          box.hidden = false;
          el.querySelector('[data-next]').hidden = false;
          if (soundOn() && id) speak('audio/quiz/' + id + '.m4a', box);
          el.querySelector('[data-next]').focus();
        });
      });
      el.querySelector('[data-sound]').addEventListener('click', function (e) {
        store.set('psf-sound', !soundOn());
        e.target.textContent = soundOn() ? 'Voice: on' : 'Voice: off';
        if (!soundOn()) { stopAudio(); box.classList.remove('talking'); }
      });
      el.querySelector('[data-next]').addEventListener('click', function () {
        i++; if (i < total) show(); else results();
        el.scrollIntoView({ block: 'start' });
      });
    }

    function speak(src, box) {
      stopAudio();
      var a = new Audio(src); currentAudio = a;
      a.onplaying = function () { box.classList.add('talking'); };
      a.onended = a.onerror = a.onpause = function () { box.classList.remove('talking'); };
      var p = a.play(); if (p && p.catch) p.catch(function () {});
    }

    function results() {
      stopAudio();
      var score = 0, by = {}, order = [], L = 'ABCD';
      qs = qs.slice(0, total);
      qs.forEach(function (q, n) {
        if (!by[q.t]) { by[q.t] = [0, 0]; order.push(q.t); }
        by[q.t][1]++; if (picks[n] === q.a) { by[q.t][0]++; score++; }
      });
      if (total) stats.log(cfg.kind || cfg.title, score, total);
      var pct = total ? score / total : 0;
      var verdict = pct === 1 ? 'A clean board. I have nothing to erase.' :
        pct >= .8 ? 'Strong work. A couple of smudges to wipe off.' :
        pct >= .6 ? 'Solid start. The topics below need another pass at the board.' :
        'That is what practice is for. Watch the lessons for the topics below, then let the smart drill aim at them.';
      var missed = qs.map(function (q, n) { return picks[n] === q.a ? '' :
        '<details class="missed"><summary>' + esc(q.t) + ': ' + esc(q.q.length > 90 ? q.q.slice(0, 88) + '…' : q.q) + '</summary>' +
        '<p><b>Answer: ' + L[q.a] + '.</b> ' + esc(q.o[q.a]) + '</p><p>' + esc(q.w) + '</p></details>'; }).join('');
      el.innerHTML = '<section class="board"><h2>' + esc(cfg.title) + ': results</h2>' +
        '<div class="score">' + score + ' / ' + total + '</div>' + says(verdict, 'wave') +
        '<h3>By topic</h3><table class="topics">' + order.map(function (t) {
          var b = by[t], les = LESSON_FOR[t] && READY.indexOf(LESSON_FOR[t]) >= 0 ? ' <a href="#/lesson/' + LESSON_FOR[t] + '">watch</a>' : '';
          return '<tr><td>' + esc(t) + (b[0] < b[1] ? les : '') + '</td><td class="' + (b[0] === b[1] ? 'green' : 'red') + '">' + b[0] + ' / ' + b[1] + '</td></tr>';
        }).join('') + '</table>' + (missed ? '<h3>What you missed</h3>' + missed : '') +
        '<div class="row" style="margin-top:16px"><button class="btn go" type="button" data-again>Try again</button>' +
        '<a class="btn" href="#/drill">Drill my weak spots</a><a class="btn" href="#/progress">My progress</a>' +
        (cfg.exit ? '<a class="btn" href="' + cfg.exit[0] + '">' + cfg.exit[1] + '</a>' : '') + '</div></section>';
      el.querySelector('[data-again]').addEventListener('click', function () {
        i = 0; picks = []; qs = cfg.questions ? cfg.questions.slice() : []; total = cfg.questions ? qs.length : cfg.count; show();
      });
      if (cfg.done) cfg.done(score, total);
    }
    show();
  }

  /* ---------- pages ---------- */
  function home() {
    app.innerHTML =
      '<section class="board"><div class="hero"><div><h1>Professor Stick Figure\'s<br><span class="red">Contracts Crash Course</span></h1>' +
      '<div class="bubble">Hello. I\'m Professor Stick Figure. I draw badly and explain clearly. Pick a marker and let\'s make contract law make sense.</div>' +
      '<div class="row"><a class="btn go" href="#/lessons">Watch the lessons</a><a class="btn" href="#/diagnostics">Take a diagnostic</a><a class="btn" href="#/drill">Smart drill</a></div></div>' +
      '<div class="profbig">' + prof('wave') + '</div></div></section>' +
      '<h2>How it works</h2><div class="cards" style="margin-bottom:26px">' +
      '<a class="card" href="#/lessons"><h3 class="blue">1. Watch</h3><p>Short whiteboard videos. Each opens with the Restatement or UCC sections and a memory hook, then acts out the cases.</p></a>' +
      '<a class="card" href="#/lessons"><h3 class="green">2. Mini set</h3><p>Five questions straight after every video, each explained by the professor.</p></a>' +
      '<a class="card" href="#/diagnostics"><h3 class="red">3. Diagnose</h3><p>Four 15-question diagnostics that show which topics need another pass.</p></a>' +
      '<a class="card" href="#/drill"><h3>4. Smart drill</h3><p>' + BANK.length + ' questions. It learns your weak spots and keeps aiming at them.</p></a></div>' +
      diagCards();
  }

  function diagCards() {
    var best = store.get('psf-best', {});
    return '<h2>Diagnostics</h2><div class="cards" style="margin-bottom:26px">' + QUIZZES.map(function (z) {
      var b = best['d' + z.id];
      return '<a class="card" href="#/diagnostic/' + z.id + '"><h3>' + z.id + '. ' + esc(z.title) + '</h3><p>' + esc(z.blurb) + '</p>' +
        '<p style="margin-top:6px">' + esc(z.covers) + '</p>' + (b != null ? '<span class="best">Best: ' + b + ' / ' + z.questions.length + '</span>' : '') + '</a>';
    }).join('') + '</div>';
  }

  function diagnostics() {
    app.innerHTML = '<section class="board">' + says('Fifteen questions each. I explain every answer, right or wrong. At the end you get a score by topic, and the smart drill uses it to aim at your weak spots.').replace('margin:0 0 14px', 'margin:0') + '</section>' + diagCards();
  }

  function diagnostic(id) {
    var z = QUIZZES.filter(function (x) { return x.id === +id; })[0];
    if (!z) return home();
    app.innerHTML = '<div id="quiz"></div>';
    runQuiz(document.getElementById('quiz'), {
      title: 'Diagnostic ' + z.id, kind: 'Diagnostic ' + z.id + ': ' + z.title, questions: z.questions,
      id: function (q, n) { return 'd' + z.id + '-' + (n + 1); },
      exit: ['#/diagnostics', 'All diagnostics'],
      done: function (s) { var b = store.get('psf-best', {}); if (b['d' + z.id] == null || s > b['d' + z.id]) { b['d' + z.id] = s; store.set('psf-best', b); } }
    });
  }

  /* Smart drill: every question gets a weight from how weak its topic is and how you did on it before.
     The next question is chosen after each answer, so the drill re-aims as you go. */
  function weightOf(q, s) {
    var m = stats.mastery(s, q.t), h = s.q[q.id], w = 0.1 + 6 * Math.pow(1 - m, 3);
    if (!h) w *= 1.5;                       /* never seen */
    else if (!h.ok) w *= 2.2;               /* missed last time */
    else w *= (Date.now() - h.at < 3 * 864e5) ? 0.15 : 0.5;  /* got it recently / a while ago */
    return w;
  }
  function makePicker(pool, smart, count) {
    var cap = Math.max(2, Math.ceil(count * 0.4));
    return function (soFar) {
      var used = {}, perTopic = {};
      soFar.forEach(function (q) { used[q.id] = 1; perTopic[q.t] = (perTopic[q.t] || 0) + 1; });
      var left = pool.filter(function (q) { return !used[q.id]; });
      var open = left.filter(function (q) { return (perTopic[q.t] || 0) < cap; });
      if (open.length) left = open;
      if (!left.length) return null;
      if (!smart) return left[Math.floor(Math.random() * left.length)];
      var s = stats.load(), ws = left.map(function (q) { return weightOf(q, s); });
      var r = Math.random() * ws.reduce(function (a, b) { return a + b; }, 0);
      for (var j = 0; j < left.length; j++) { r -= ws[j]; if (r <= 0) return left[j]; }
      return left[left.length - 1];
    };
  }

  function drill(topic) {
    var s = stats.load(), weak = stats.weakest(s, 3), answered = Object.keys(s.q).length;
    var intro = topic ? 'Ten questions on ' + esc(topic) + ', starting with the ones you have missed or not seen.' :
      answered < 10 ? 'I have ' + BANK.length + ' questions. I do not know your weak spots yet, so I will mix everything. Take a diagnostic and I will aim better.' :
      weak.length ? 'I have been watching. Your weakest topics right now: <span class="red">' + weak.map(esc).join(', ') + '</span>. The smart drill leans on those and on questions you missed.' :
      'The smart drill leans on your weaker topics and on questions you missed, and re-aims after every answer.';
    app.innerHTML = '<section class="board" id="setup"><h1>' + (topic ? 'Topic drill' : 'Smart drill') + '</h1>' + says(intro) +
      (topic ? '' : '<h3>How should I choose?</h3><div class="row" id="mode"><button class="btn small go" data-m="smart" type="button">Aim at my weak spots</button><button class="btn small" data-m="random" type="button">Random mix</button></div>' +
      '<h3 style="margin-top:16px">Which track?</h3><div class="row" id="trk"><button class="btn small go" data-k="all" type="button">Everything</button><button class="btn small" data-k="cl" type="button">Common law</button><button class="btn small" data-k="ucc" type="button">UCC</button></div>') +
      '<h3 style="margin-top:16px">How many?</h3><div class="row" id="len"><button class="btn" data-n="10" type="button">10</button><button class="btn" data-n="25" type="button">25</button><button class="btn" data-n="50" type="button">50</button></div></section><div id="quiz"></div>';
    var k = 'all', mode = 'smart';
    function group(sel, set) {
      app.querySelectorAll(sel + ' button').forEach(function (b) {
        b.addEventListener('click', function () { set(b); app.querySelectorAll(sel + ' button').forEach(function (x) { x.classList.toggle('go', x === b); }); });
      });
    }
    group('#trk', function (b) { k = b.dataset.k; });
    group('#mode', function (b) { mode = b.dataset.m; });
    app.querySelectorAll('#len button').forEach(function (b) {
      b.addEventListener('click', function () {
        var pool = BANK.filter(function (q) { return topic ? q.t === topic : (k === 'all' || q.k === k || q.k === 'both'); });
        var count = Math.min(+b.dataset.n, pool.length);
        app.querySelector('#setup').remove();
        runQuiz(document.getElementById('quiz'), {
          title: topic ? 'Topic drill' : (mode === 'smart' ? 'Smart drill' : 'Drill'),
          kind: topic ? 'Topic drill: ' + topic : (mode === 'smart' ? 'Smart drill' : 'Random drill'),
          count: count, pick: makePicker(pool, mode === 'smart', count), exit: ['#/drill', 'New drill']
        });
      });
    });
  }

  function progress() {
    var s = stats.load(), best = store.get('psf-best', {}), seen = store.get('psf-seen', {});
    var nq = 0, nc = 0; Object.keys(s.t).forEach(function (t) { nq += s.t[t].n; nc += s.t[t].c; });
    var topics = Object.keys(s.t).sort(function (a, b) { return stats.mastery(s, a) - stats.mastery(s, b); });
    var watched = READY.filter(function (id) { return seen[id]; }).length;
    var rows = topics.map(function (t) {
      var x = s.t[t], pct = Math.round(100 * x.c / x.n), les = LESSON_FOR[t];
      return '<tr><td>' + esc(t) + '<div class="meter"><i style="width:' + pct + '%" class="' + (pct >= 80 ? 'g' : pct >= 60 ? 'y' : 'r') + '"></i></div></td>' +
        '<td>' + x.c + ' / ' + x.n + '</td><td>' + (les && READY.indexOf(les) >= 0 ? '<a href="#/lesson/' + les + '">Watch</a> · ' : '') +
        '<a href="#/drill/' + encodeURIComponent(t) + '">Drill</a></td></tr>';
    }).join('');
    var log = s.log.slice(0, 12).map(function (e) {
      return '<tr><td>' + new Date(e.at).toLocaleDateString() + '</td><td>' + esc(e.kind) + '</td><td>' + e.score + ' / ' + e.total + '</td></tr>';
    }).join('');
    app.innerHTML = '<section class="board"><h1>My progress</h1>' +
      says(nq ? 'Weakest topics are at the top. Everything here is saved in this browser only. Download it if you want a backup or want to move it to another device.'
              : 'Nothing here yet. Take a diagnostic or finish a mini set and I will start keeping score. It is all saved in this browser only.') +
      '<div class="cards"><div class="card"><h3>' + nq + '</h3><p>questions answered</p></div>' +
      '<div class="card"><h3>' + (nq ? Math.round(100 * nc / nq) + '%' : '–') + '</h3><p>correct overall</p></div>' +
      '<div class="card"><h3>' + watched + ' / ' + READY.length + '</h3><p>lessons watched</p></div></div></section>' +
      '<section class="board"><h2>Diagnostics</h2><table class="topics">' + QUIZZES.map(function (z) {
        var b = best['d' + z.id];
        return '<tr><td><a href="#/diagnostic/' + z.id + '">' + z.id + '. ' + esc(z.title) + '</a></td><td>' + (b != null ? 'Best ' + b + ' / ' + z.questions.length : 'Not taken') + '</td></tr>';
      }).join('') + '</table></section>' +
      (rows ? '<section class="board"><h2>By topic, weakest first</h2><table class="topics three">' + rows + '</table>' +
        '<a class="btn go" href="#/drill">Drill my weak spots</a></section>' : '') +
      (log ? '<section class="board"><h2>Recent sessions</h2><table class="topics three">' + log + '</table></section>' : '') +
      '<section class="board"><h2>Back up or move your progress</h2><p class="muted">Your scores live in this browser. Clearing your browsing data erases them.</p>' +
      '<div class="row"><button class="btn" id="exp" type="button">Download my progress</button>' +
      '<label class="btn">Import a progress file<input type="file" id="imp" accept="application/json,.json" hidden></label>' +
      '<button class="btn" id="rst" type="button">Reset everything</button></div><p id="msg" class="muted" style="margin:10px 0 0" aria-live="polite"></p></section>';

    var msg = app.querySelector('#msg');
    app.querySelector('#exp').addEventListener('click', function () {
      var data = { app: 'professor-stick-figure', version: 1, saved: new Date().toISOString(),
        stats: stats.load(), best: store.get('psf-best', {}), seen: store.get('psf-seen', {}) };
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: 'application/json' }));
      a.download = 'crash-course-progress.json'; document.body.appendChild(a); a.click(); a.remove();
      msg.textContent = 'Saved crash-course-progress.json to your downloads.';
    });
    app.querySelector('#imp').addEventListener('change', function (e) {
      var f = e.target.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var d = JSON.parse(r.result);
          if (d.app !== 'professor-stick-figure' || !d.stats) throw new Error('wrong file');
          store.set('psf-stats', d.stats); store.set('psf-best', d.best || {}); store.set('psf-seen', d.seen || {});
          progress(); app.querySelector('#msg').textContent = 'Progress imported.';
        } catch (x) { msg.textContent = 'That file is not a crash-course progress file.'; }
      };
      r.readAsText(f);
    });
    app.querySelector('#rst').addEventListener('click', function (e) {
      if (e.target.dataset.sure) { store.set('psf-stats', {}); store.set('psf-best', {}); store.set('psf-seen', {}); progress(); }
      else { e.target.dataset.sure = 1; e.target.textContent = 'Click again to erase all progress'; }
    });
  }

  function lessons() {
    var seen = store.get('psf-seen', {});
    function chip(it) {
      var ok = READY.indexOf(it.id) >= 0;
      return ok ? '<a class="chip' + (seen[it.id] ? ' done' : '') + '" href="#/lesson/' + it.id + '">' + esc(it.title) + '</a>'
                : '<span class="chip" title="Coming soon">' + esc(it.title) + '</span>';
    }
    function track(key, name, sub) {
      return '<section class="board track ' + key + '"><h2>' + name + '</h2><p class="muted">' + sub + '</p>' +
        COURSE[key].map(function (s) { return '<div class="stage-q">' + esc(s.q) + '</div><div class="chips">' + s.items.map(chip).join('') + '</div>'; }).join('') + '</section>';
    }
    app.innerHTML = '<section class="board"><h1>Lessons</h1>' +
      says('First question, always: is this a sale of goods? Goods go to the UCC board. Everything else goes to the common law board.') +
      '<div class="chips">' + chip(COURSE.front) + '</div></section>' +
      '<div class="tracks">' + track('cl', 'Common Law and the Restatement', 'Services, land, employment and everything that is not goods.') +
      track('ucc', 'UCC Article 2', 'Sales of goods. Each board is paired with its common-law twin.') + '</div>';
  }

  function lesson(id) { if (window.PSF_PLAYER) window.PSF_PLAYER.mount(app, id); else lessons(); }

  function route() {
    stopAudio();
    if (window.PSF_PLAYER) window.PSF_PLAYER.stop();
    var h = location.hash.replace(/^#\/?/, '').split('/');
    if (h[0] === 'diagnostics') diagnostics();
    else if (h[0] === 'diagnostic') diagnostic(h[1]);
    else if (h[0] === 'drill') drill(h[1] ? decodeURIComponent(h[1]) : null);
    else if (h[0] === 'progress') progress();
    else if (h[0] === 'lessons') lessons();
    else if (h[0] === 'lesson') lesson(h[1]);
    else home();
    window.scrollTo(0, 0);
  }

  window.PSF = { esc: esc, store: store, prof: prof, runQuiz: runQuiz, course: COURSE, stats: stats };
  document.getElementById('brandFig').innerHTML = prof('stand');
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);
})();
