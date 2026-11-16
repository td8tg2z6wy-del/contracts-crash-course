/* Professor Stick Figure: site shell, router, quiz player. */
(function () {
  var app = document.getElementById('app');
  var QUIZZES = window.QUIZZES || [], DRILL = window.DRILL || [], COURSE = window.COURSE || { cl: [], ucc: [] };
  var READY = window.READY || [];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var store = {
    get: function (k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* The professor. Feet at y=112, head at y=0, drawn in a 150x170 box. */
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

  /* ---------- quiz player (diagnostics, drill, mini sets) ---------- */
  var currentAudio = null;
  function stopAudio() { if (currentAudio) { currentAudio.pause(); currentAudio = null; } }

  function runQuiz(el, cfg) {
    var qs = cfg.questions, i = 0, picks = [];
    function soundOn() { return store.get('psf-sound', true); }

    function show() {
      stopAudio();
      var q = qs[i], L = 'ABCD';
      var dots = qs.map(function (x, n) {
        var c = n < picks.length ? (picks[n] === x.a ? 'r' : 'w') : (n === i ? 'cur' : '');
        return '<i class="' + c + '"></i>';
      }).join('');
      var trackName = q.k === 'ucc' ? 'UCC' : q.k === 'both' ? 'Common law + UCC' : 'Common law';
      el.innerHTML =
        '<section class="board quiz"><div class="qhead"><span class="tag">' + esc(q.t) + '</span>' +
        '<span class="tag ' + esc(q.k) + '">' + trackName + '</span>' +
        '<span class="count">' + esc(cfg.title) + ' · ' + (i + 1) + ' of ' + qs.length + '</span></div>' +
        '<div class="dots" aria-hidden="true">' + dots + '</div>' +
        '<p class="qtext">' + esc(q.q) + '</p><div class="opts">' +
        q.o.map(function (o, n) { return '<button class="opt" type="button" data-n="' + n + '"><b>' + L[n] + '</b><span>' + esc(o) + '</span></button>'; }).join('') +
        '</div><div class="explain" hidden></div><div class="qfoot">' +
        '<button class="btn small" type="button" data-sound>' + (soundOn() ? 'Voice: on' : 'Voice: off') + '</button>' +
        '<button class="btn go" type="button" data-next hidden>' + (i + 1 < qs.length ? 'Next question' : 'See results') + '</button></div></section>';

      var box = el.querySelector('.explain');
      el.querySelectorAll('.opt').forEach(function (b) {
        b.addEventListener('click', function () {
          var n = +b.dataset.n; picks[i] = n;
          el.querySelectorAll('.opt').forEach(function (x) {
            x.disabled = true;
            if (+x.dataset.n === q.a) x.classList.add('right');
            else if (x === b) x.classList.add('wrong');
          });
          var ok = n === q.a;
          box.innerHTML = prof('point') + '<div class="bubble"><strong class="' + (ok ? 'ok' : 'no') + '">' +
            (ok ? 'Correct.' : 'Not quite. The answer is ' + L[q.a] + '.') + '</strong><p>' + esc(q.w) + '</p></div>';
          box.hidden = false;
          el.querySelector('[data-next]').hidden = false;
          if (soundOn()) speak(cfg.audio(q, i), box);
          el.querySelector('[data-next]').focus();
        });
      });
      el.querySelector('[data-sound]').addEventListener('click', function (e) {
        store.set('psf-sound', !soundOn());
        e.target.textContent = soundOn() ? 'Voice: on' : 'Voice: off';
        if (!soundOn()) { stopAudio(); box.classList.remove('talking'); }
      });
      el.querySelector('[data-next]').addEventListener('click', function () {
        i++; if (i < qs.length) show(); else results();
        el.scrollIntoView({ block: 'start' });
      });
    }

    function speak(src, box) {
      stopAudio();
      if (!src) return;
      var a = new Audio(src); currentAudio = a;
      a.onplaying = function () { box.classList.add('talking'); };
      a.onended = a.onerror = a.onpause = function () { box.classList.remove('talking'); };
      var p = a.play(); if (p && p.catch) p.catch(function () {});
    }

    function results() {
      stopAudio();
      var score = 0, by = {}, order = [], L = 'ABCD';
      qs.forEach(function (q, n) {
        if (!by[q.t]) { by[q.t] = [0, 0]; order.push(q.t); }
        by[q.t][1]++; if (picks[n] === q.a) { by[q.t][0]++; score++; }
      });
      var pct = score / qs.length;
      var verdict = pct === 1 ? 'A clean board. I have nothing to erase.' :
        pct >= .8 ? 'Strong work. A couple of smudges to wipe off.' :
        pct >= .6 ? 'Solid start. The topics below need another pass at the board.' :
        'That is what a diagnostic is for. Watch the lessons for the topics below, then try again.';
      var missed = qs.map(function (q, n) { return picks[n] === q.a ? '' :
        '<details class="missed"><summary>' + esc(q.t) + ': ' + esc(q.q.length > 90 ? q.q.slice(0, 88) + '…' : q.q) + '</summary>' +
        '<p><b>Answer: ' + L[q.a] + '.</b> ' + esc(q.o[q.a]) + '</p><p>' + esc(q.w) + '</p></details>'; }).join('');
      el.innerHTML = '<section class="board"><h2>' + esc(cfg.title) + ': results</h2>' +
        '<div class="score">' + score + ' / ' + qs.length + '</div>' +
        '<div class="explain" style="margin:0 0 14px">' + prof('wave') + '<div class="bubble">' + verdict + '</div></div>' +
        '<h3>By topic</h3><table class="topics">' + order.map(function (t) {
          var b = by[t]; return '<tr><td>' + esc(t) + '</td><td class="' + (b[0] === b[1] ? 'green' : 'red') + '">' + b[0] + ' / ' + b[1] + '</td></tr>';
        }).join('') + '</table>' + (missed ? '<h3>What you missed</h3>' + missed : '') +
        '<div class="row" style="margin-top:16px"><button class="btn go" type="button" data-again>Try again</button>' +
        (cfg.exit ? '<a class="btn" href="' + cfg.exit[0] + '">' + cfg.exit[1] + '</a>' : '') + '</div></section>';
      el.querySelector('[data-again]').addEventListener('click', function () { i = 0; picks = []; show(); });
      if (cfg.done) cfg.done(score, qs.length);
    }
    show();
  }

  /* ---------- pages ---------- */
  function home() {
    var best = store.get('psf-best', {});
    app.innerHTML =
      '<section class="board"><div class="hero"><div><h1>Professor Stick Figure\'s<br><span class="red">Contracts Crash Course</span></h1>' +
      '<div class="bubble">Hello. I\'m Professor Stick Figure. I draw badly and explain clearly. Pick a marker and let\'s make contract law make sense.</div>' +
      '<div class="row"><a class="btn go" href="#/lessons">Watch the lessons</a><a class="btn" href="#/diagnostics">Take a diagnostic</a><a class="btn" href="#/drill">Drill questions</a></div></div>' +
      '<div class="profbig">' + prof('wave') + '</div></div></section>' +
      '<h2>How it works</h2><div class="cards" style="margin-bottom:26px">' +
      '<a class="card" href="#/lessons"><h3 class="blue">1. Watch</h3><p>Short whiteboard videos. Each one opens with the Restatement or UCC sections and a memory hook, then acts out the cases.</p></a>' +
      '<a class="card" href="#/lessons"><h3 class="green">2. Mini set</h3><p>Five questions straight after every video, each explained by the professor.</p></a>' +
      '<a class="card" href="#/diagnostics"><h3 class="red">3. Diagnose</h3><p>Four 15-question diagnostics that show which topics need another pass.</p></a>' +
      '<a class="card" href="#/drill"><h3>4. Drill</h3><p>A shuffled bank of ' + DRILL.length + ' questions across the whole course.</p></a></div>' +
      diagCards(best);
  }

  function diagCards(best) {
    return '<h2>Diagnostics</h2><div class="cards" style="margin-bottom:26px">' + QUIZZES.map(function (z) {
      var b = best['d' + z.id];
      return '<a class="card" href="#/diagnostic/' + z.id + '"><h3>' + z.id + '. ' + esc(z.title) + '</h3><p>' + esc(z.blurb) + '</p>' +
        '<p style="margin-top:6px">' + esc(z.covers) + '</p>' + (b != null ? '<span class="best">Best: ' + b + ' / ' + z.questions.length + '</span>' : '') + '</a>';
    }).join('') + '</div>';
  }

  function diagnostics() {
    app.innerHTML = '<section class="board"><div class="explain" style="margin:0">' + prof('point') +
      '<div class="bubble">Fifteen questions each. I explain every answer, right or wrong. At the end you get a score by topic, so you know which boards to watch.</div></div></section>' +
      diagCards(store.get('psf-best', {}));
  }

  function diagnostic(id) {
    var z = QUIZZES.filter(function (x) { return x.id === +id; })[0];
    if (!z) return home();
    app.innerHTML = '<div id="quiz"></div>';
    runQuiz(document.getElementById('quiz'), {
      title: 'Diagnostic ' + z.id, questions: z.questions,
      audio: function (q, n) { return 'audio/quiz/d' + z.id + '-' + (n + 1) + '.m4a'; },
      exit: ['#/diagnostics', 'All diagnostics'],
      done: function (s) { var b = store.get('psf-best', {}); if (b['d' + z.id] == null || s > b['d' + z.id]) { b['d' + z.id] = s; store.set('psf-best', b); } }
    });
  }

  function drill() {
    var n = DRILL.length;
    app.innerHTML = '<section class="board"><h1>Drill</h1><div class="explain" style="margin:0 0 16px">' + prof('point') +
      '<div class="bubble">A bank of ' + n + ' questions across the whole course, shuffled every time. Choose how many and which track.</div></div>' +
      '<h3>Which questions?</h3><div class="row" id="trk">' +
      '<button class="btn small go" data-k="all" type="button">Everything</button><button class="btn small" data-k="cl" type="button">Common law</button><button class="btn small" data-k="ucc" type="button">UCC</button></div>' +
      '<h3 style="margin-top:16px">How many?</h3><div class="row" id="len">' +
      '<button class="btn" data-n="10" type="button">10</button><button class="btn" data-n="25" type="button">25</button><button class="btn" data-n="' + n + '" type="button">All</button></div></section><div id="quiz"></div>';
    var k = 'all';
    app.querySelectorAll('#trk button').forEach(function (b) {
      b.addEventListener('click', function () { k = b.dataset.k; app.querySelectorAll('#trk button').forEach(function (x) { x.classList.toggle('go', x === b); }); });
    });
    app.querySelectorAll('#len button').forEach(function (b) {
      b.addEventListener('click', function () {
        var pool = DRILL.map(function (q, idx) { return { q: q, idx: idx }; })
          .filter(function (x) { return k === 'all' || x.q.k === k || x.q.k === 'both'; });
        for (var j = pool.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = pool[j]; pool[j] = pool[r]; pool[r] = t; }
        pool = pool.slice(0, +b.dataset.n);
        var idxOf = pool.map(function (x) { return x.idx; });
        app.querySelector('section.board').remove();
        runQuiz(document.getElementById('quiz'), {
          title: 'Drill', questions: pool.map(function (x) { return x.q; }),
          audio: function (q, m) { return 'audio/quiz/b' + (idxOf[m] + 1) + '.m4a'; },
          exit: ['#/drill', 'New drill']
        });
      });
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
    app.innerHTML = '<section class="board"><h1>Lessons</h1><div class="explain" style="margin:0 0 14px">' + prof('point') +
      '<div class="bubble">First question, always: is this a sale of goods? Goods go to the UCC board. Everything else goes to the common law board.</div></div>' +
      '<div class="chips">' + chip(COURSE.front) + '</div><p class="muted" style="margin:10px 0 0">Dashed boards are still being drawn.</p></section>' +
      '<div class="tracks">' + track('cl', 'Common Law and the Restatement', 'Services, land, employment and everything that is not goods.') +
      track('ucc', 'UCC Article 2', 'Sales of goods. Each board is paired with its common-law twin.') + '</div>';
  }

  function lesson(id) {
    stopAudio();
    if (window.PSF_PLAYER) window.PSF_PLAYER.mount(app, id); else lessons();
  }

  function route() {
    stopAudio();
    if (window.PSF_PLAYER) window.PSF_PLAYER.stop();
    var h = location.hash.replace(/^#\/?/, '').split('/');
    if (h[0] === 'diagnostics') diagnostics();
    else if (h[0] === 'diagnostic') diagnostic(h[1]);
    else if (h[0] === 'drill') drill();
    else if (h[0] === 'lessons') lessons();
    else if (h[0] === 'lesson') lesson(h[1]);
    else home();
    window.scrollTo(0, 0);
  }

  window.PSF = { esc: esc, store: store, prof: prof, runQuiz: runQuiz, course: COURSE };
  document.getElementById('brandFig').innerHTML = prof('stand');
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);
})();
