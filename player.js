/* Professor Stick Figure: whiteboard lesson player.
   A lesson is data (see tools/LESSON_FORMAT.md). The player draws each beat on the
   board while the matching narration clip plays, then moves to the next beat. */
(function () {
  var P = window.PSF, esc = P.esc;
  var W = 0.47; // rough character width as a fraction of font size

  function C(cx, cy, r) { return 'M' + (cx - r) + ' ' + cy + ' a' + r + ' ' + r + ' 0 1 0 ' + (2 * r) + ' 0 a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0'; }
  var ICONS = {
    house: ['M-30 4 L0 -24 L30 4', 'M-22 -2 V26 H22 V-2', 'M-6 26 V10 H6 V26'],
    car: ['M-32 10 V0 L-22 -2 L-14 -16 H10 L20 -2 L32 2 V10 Z', C(-17, 12, 6), C(17, 12, 6)],
    doc: ['M-20 -28 H12 L20 -20 V28 H-20 Z', 'M-12 -12 H12 M-12 -2 H12 M-12 8 H12 M-12 18 H4'],
    money: ['M-30 -16 H30 V16 H-30 Z', C(0, 0, 9)],
    jet: ['M-36 6 L18 -6 L36 -12 L24 4 L-36 12 Z', 'M-4 0 L-18 -20 L-8 -20 L8 -4', 'M-30 6 L-36 -8 L-28 -8 L-22 4'],
    store: ['M-30 -8 V28 H30 V-8', 'M-34 -8 L-26 -26 H26 L34 -8 Z', 'M-8 28 V8 H8 V28'],
    letter: ['M-28 -18 H28 V18 H-28 Z', 'M-28 -18 L0 4 L28 -18'],
    clock: [C(0, 0, 26), 'M0 -16 V0 L12 8'],
    scale: ['M0 -28 V24 M-16 24 H16 M-28 -20 H28', 'M-28 -20 L-38 2 H-18 Z', 'M28 -20 L18 2 H38 Z'],
    cow: ['M-28 -10 H16 V12 H-28 Z', 'M16 -12 L32 -14 L34 0 L16 4', 'M-22 12 V28 M-10 12 V28 M4 12 V28 M12 12 V28', 'M-28 -6 Q-36 0 -32 10', 'M22 -14 L20 -22 M28 -14 L30 -22'],
    gavel: ['M-22 -18 L2 -28 L8 -12 L-16 -2 Z', 'M-4 -8 L26 22', 'M-30 28 H-2'],
    bulb: [C(0, -8, 13), 'M-6 6 H6 M-5 12 H5', 'M0 -30 V-36 M-22 -8 H-28 M22 -8 H28 M-16 -24 L-20 -28 M16 -24 L20 -28'],
    ship: ['M-32 8 H32 L22 24 H-22 Z', 'M0 8 V-28', 'M0 -28 L24 2 H0'],
    ring: [C(0, 8, 16), 'M-8 -10 L0 -22 L8 -10 L0 -4 Z'],
    gift: ['M-24 -6 H24 V26 H-24 Z', 'M-28 -16 H28 V-6 H-28 Z', 'M0 -16 V26', 'M0 -16 Q-16 -34 -18 -18 M0 -16 Q16 -34 18 -18'],
    tv: ['M-30 -18 H30 V20 H-30 Z', 'M-10 20 L-14 28 M10 20 L14 28', 'M-8 -18 L-16 -30 M8 -18 L16 -30'],
    phone: ['M-14 -28 H14 V28 H-14 Z', 'M-4 22 H4'],
    book: ['M0 -20 Q-16 -28 -30 -20 V22 Q-16 14 0 22 Q16 14 30 22 V-20 Q16 -28 0 -20 Z', 'M0 -20 V22'],
    bridge: ['M-36 10 H36', 'M-36 10 Q0 -34 36 10', 'M-18 10 V-8 M0 10 V-12 M18 10 V-8', 'M-36 10 V24 M36 10 V24'],
    tree: ['M0 28 V4', 'M0 4 Q-26 4 -22 -12 Q-24 -30 0 -30 Q24 -30 22 -12 Q26 4 0 4 Z'],
    factory: ['M-32 28 V-4 L-12 8 V-4 L8 8 V-24 H22 V28 Z', 'M-22 28 V16 H-12 V28'],
    truck: ['M-34 -14 H6 V14 H-34 Z', 'M6 -4 H24 L34 6 V14 H6', C(-20, 16, 6), C(20, 16, 6)],
    heart: ['M0 22 Q-34 -2 -18 -18 Q-6 -26 0 -10 Q6 -26 18 -18 Q34 -2 0 22 Z'],
    key: [C(-16, 0, 10), 'M-6 0 H30 M20 0 V10 M28 0 V8'],
    crate: ['M-24 -18 H24 V22 H-24 Z', 'M-24 -18 L24 22 M24 -18 L-24 22'],
    fire: ['M0 26 Q-24 16 -14 -6 Q-10 4 -4 2 Q-8 -16 4 -30 Q4 -12 16 -4 Q24 10 0 26 Z'],
    chicken: ['M-18 4 Q-22 -16 0 -14 Q20 -14 18 4 Q16 20 0 20 Q-16 20 -18 4 Z', C(16, -18, 8), 'M24 -18 L32 -15 L24 -13', 'M-6 20 V30 M6 20 V30'],
    carrot: ['M-26 20 L8 -14 L18 -4 Z', 'M12 -10 L20 -28 M14 -8 L30 -20 M16 -6 L32 -6'],
    billboard: ['M-30 -24 H30 V6 H-30 Z', 'M-18 6 V28 M18 6 V28'],
    pipe: ['M-32 -8 H10 V8 H-32 Z', 'M10 -13 H20 V13 H10 Z'],
    door: ['M-18 -30 H18 V30 H-18 Z', C(9, 2, 2.5)],
    fish: ['M-26 0 Q-6 -20 16 0 Q-6 20 -26 0 Z', 'M16 0 L30 -12 V12 Z', C(-14, -3, 1.5)],
    crown: ['M-24 14 L-28 -14 L-12 2 L0 -20 L12 2 L28 -14 L24 14 Z'],
    mailbox: ['M-20 -22 H10 Q22 -22 22 -8 V6 H-20 Z', 'M0 6 V30', 'M10 -22 V-34 H20']
  };

  function col(c) { return c && c !== 'ink' ? ' c-' + c : ''; }
  function sty(t, d) { return ' style="--t:' + t.toFixed(2) + 's' + (d ? ';--d:' + d.toFixed(2) + 's' : '') + '"'; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function wrap(text, width, size) {
    var max = Math.max(6, Math.floor(width / (size * W))), out = [], line = '';
    String(text).split(/\s+/).forEach(function (w) {
      if (line && (line + ' ' + w).length > max) { out.push(line); line = w; } else line = line ? line + ' ' + w : w;
    });
    if (line) out.push(line);
    return out;
  }
  function textLines(lines, x, y, size, c, t, anchor) {
    var s = '', lh = size * 1.22, t0 = t;
    lines.forEach(function (ln, i) {
      var d = clamp(ln.length * 0.03, .25, 1.2);
      s += '<text class="write' + col(c) + '" x="' + x + '" y="' + (y + i * lh) + '" font-size="' + size + '"' +
        (anchor ? ' text-anchor="' + anchor + '"' : '') + sty(t, d) + '>' + esc(ln) + '</text>';
      t += d;
    });
    return { svg: s, dur: t - t0, h: lines.length * lh };
  }
  function path(d, c, t, dur, sw) {
    return '<path class="ink draw' + col(c) + '" pathLength="1"' + (sw ? ' stroke-width="' + sw + '"' : '') + ' d="' + d + '"' + sty(t, dur) + '/>';
  }

  var POSE = {
    stand: 'M0 -70 L-16 -48 M0 -70 L16 -48', wave: 'M0 -70 L-16 -48 M0 -70 L22 -94', up: 'M0 -70 L-20 -96 M0 -70 L20 -96',
    point: 'M0 -70 L-16 -48 M0 -70 L30 -74', pointL: 'M0 -70 L-30 -74 M0 -70 L16 -48', sad: 'M0 -70 L-9 -44 M0 -70 L9 -44',
    shrug: 'M0 -70 L-16 -62 L-24 -78 M0 -70 L16 -62 L24 -78', hold: 'M0 -70 L-16 -48 M0 -70 L26 -64', hips: 'M0 -70 L-16 -58 L-4 -50 M0 -70 L16 -58 L4 -50'
  };
  var FACE = { smile: 'M-6 -91 Q0 -85 6 -91', sad: 'M-6 -87 Q0 -93 6 -87', flat: 'M-5 -90 H5', shock: C(0, -89, 3), smirk: 'M-5 -90 Q2 -86 7 -92' };
  var HAT = {
    crown: 'M-13 -111 L-14 -124 L-6 -116 L0 -126 L6 -116 L14 -124 L13 -111 Z', tophat: 'M-18 -110 H18 M-11 -110 V-130 H11 V-110',
    hair: 'M-15 -102 Q-23 -82 -18 -66 M15 -102 Q23 -82 18 -66 M-14 -105 Q0 -120 14 -105', hardhat: 'M-17 -107 Q0 -130 17 -107 Z M-21 -107 H21',
    cap: 'M-15 -105 Q0 -124 15 -105 M15 -105 H30', bun: C(0, -118, 6), wig: 'M-16 -100 Q-22 -118 -8 -114 Q0 -124 8 -114 Q22 -118 16 -100'
  };

  /* returns { svg, dur } for one board element starting at time t */
  function draw(e, t) {
    var c = e.c, s, d, r;
    switch (e.k) {
      case 'text': {
        var size = e.s || 28, lines = e.w ? wrap(e.t, e.w, size) : [e.t];
        r = textLines(lines, e.x, e.y, size, c, t, e.anchor); return { svg: r.svg, dur: r.dur };
      }
      case 'ul': return { svg: path('M' + e.x + ' ' + e.y + ' q' + (e.w / 2) + ' 8 ' + e.w + ' -1', c || 'red', t, .4), dur: .4 };
      case 'line': return { svg: path('M' + e.x1 + ' ' + e.y1 + ' L' + e.x2 + ' ' + e.y2, c, t, .4), dur: .4 };
      case 'arrow': {
        var a = Math.atan2(e.y2 - e.y1, e.x2 - e.x1), h = 15;
        d = 'M' + e.x1 + ' ' + e.y1 + ' L' + e.x2 + ' ' + e.y2 +
          ' M' + (e.x2 - h * Math.cos(a - .5)).toFixed(1) + ' ' + (e.y2 - h * Math.sin(a - .5)).toFixed(1) + ' L' + e.x2 + ' ' + e.y2 +
          ' L' + (e.x2 - h * Math.cos(a + .5)).toFixed(1) + ' ' + (e.y2 - h * Math.sin(a + .5)).toFixed(1);
        return { svg: path(d, c || 'blue', t, .5), dur: .5 };
      }
      case 'box': return { svg: '<rect class="ink draw' + col(c) + '" pathLength="1" x="' + e.x + '" y="' + e.y + '" width="' + e.w + '" height="' + e.h + '" rx="6"' + sty(t, .7) + '/>', dur: .7 };
      case 'circle': return { svg: path(C(e.x, e.y, e.r), c, t, .6), dur: .6 };
      case 'check': return { svg: path('M' + e.x + ' ' + e.y + ' l10 12 l20 -26', 'green', t, .3), dur: .3 };
      case 'cross': { var z = e.r || 24; return { svg: path('M' + e.x + ' ' + e.y + ' l' + z + ' ' + z + ' M' + (e.x + z) + ' ' + e.y + ' l-' + z + ' ' + z, 'red', t, .3, 5), dur: .3 }; }
      case 'stamp': {
        var sz = e.s || 30, w = e.t.length * sz * .52 + 28, cx = e.x + w / 2, cy = e.y - sz / 3, rot = ' transform="rotate(' + (e.rot == null ? -3 : e.rot) + ' ' + cx + ' ' + cy + ')"';
        return { svg: '<g class="pop"' + sty(t) + '><rect x="' + e.x + '" y="' + (e.y - sz - 4) + '" width="' + w + '" height="' + (sz + 16) + '" rx="6" class="ink' + col(c || 'red') + '"' + rot + '/>' +
          '<text class="' + col(c || 'red').trim() + '" x="' + (e.x + 14) + '" y="' + e.y + '" font-size="' + sz + '"' + rot + '>' + esc(e.t) + '</text></g>', dur: .45 };
      }
      case 'icon': {
        var ps = ICONS[e.name], sc = e.s || 1, inner = '';
        if (!ps) inner = '<rect class="ink draw" pathLength="1" x="-26" y="-20" width="52" height="40" stroke-dasharray="4 5"' + sty(t, .5) + '/>';
        else ps.forEach(function (p, i) { inner += path(p, c, t + i * .18, .5, 3.5); });
        s = '<g transform="translate(' + e.x + ' ' + e.y + ') scale(' + sc + ')">' + inner + '</g>';
        if (e.label) s += '<text class="write c-blue" x="' + e.x + '" y="' + (e.y + 34 * sc + 18) + '" font-size="18" text-anchor="middle"' + sty(t + .5, .3) + '>' + esc(e.label) + '</text>';
        return { svg: s, dur: .5 + (ps ? ps.length : 1) * .18 };
      }
      case 'fig': {
        var fs = e.s || 1, cls = 'ink' + col(c);
        s = '<g transform="translate(' + e.x + ' ' + e.y + ') scale(' + fs + ')"><g class="pop"' + sty(t) + '>' +
          '<path class="' + cls + '" stroke-width="3.5" d="M0 -82 V-40 M0 -40 L-13 0 M0 -40 L13 0 ' + (POSE[e.pose] || POSE.stand) + '"/>' +
          '<circle class="' + cls + '" stroke-width="3.5" cx="0" cy="-97" r="15" style="fill:#fff"/>' +
          '<path class="' + cls + '" stroke-width="3.2" d="M-5.5 -100 v.1 M5.5 -100 v.1"/>' +
          '<path class="' + cls + '" stroke-width="2.5" d="' + (FACE[e.face] || FACE.smile) + '"/>' +
          (HAT[e.hat] ? '<path class="' + cls + '" stroke-width="3" d="' + HAT[e.hat] + '"/>' : '') + '</g></g>';
        if (e.label) s += '<text class="write c-blue" x="' + e.x + '" y="' + (e.y + 22) + '" font-size="18" text-anchor="middle"' + sty(t + .2, .3) + '>' + esc(e.label) + '</text>';
        d = .45;
        if (e.say) {
          var bl = wrap(e.say, 190, 19), longest = bl.reduce(function (m, l) { return Math.max(m, l.length); }, 0);
          var bw = Math.max(70, longest * 19 * W + 28), bh = bl.length * 23 + 16;
          var top = e.y - (HAT[e.hat] ? 134 : 116) * fs - bh - 14;
          var bx = clamp(e.x - bw / 2 + (e.bx || 0), 28, 742 - bw), by = Math.max(26, top);
          var tx = clamp(e.x, bx + 14, bx + bw - 14);
          s += '<g class="pop"' + sty(t + .5) + '><path d="M' + (tx - 9) + ' ' + (by + bh - 1) + ' L' + e.x + ' ' + (by + bh + 13) + ' L' + (tx + 9) + ' ' + (by + bh - 1) + '" style="fill:#fff" class="ink" stroke-width="2.5"/>' +
            '<rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + bh + '" rx="12" style="fill:#fff" class="ink" stroke-width="2.5"/>' +
            '<path d="M' + (tx - 7) + ' ' + (by + bh) + ' H' + (tx + 7) + '" style="stroke:#fff;stroke-width:4"/>' +
            bl.map(function (l, i) { return '<text x="' + (bx + bw / 2) + '" y="' + (by + 25 + i * 23) + '" font-size="19" text-anchor="middle">' + esc(l) + '</text>'; }).join('') + '</g>';
          d += .5;
        }
        return { svg: s, dur: d };
      }
      case 'card': {
        /* rule card: section number in a red box, name, one-sentence rule, memory hook */
        var x = e.x, y = e.y, cw = e.w || 660, nb = e.num.length * 17 + 26, t1 = t;
        s = '<rect class="ink draw c-red" pathLength="1" x="' + x + '" y="' + y + '" width="' + nb + '" height="42" rx="6"' + sty(t1, .5) + '/>' +
          '<text class="write c-red" x="' + (x + 13) + '" y="' + (y + 31) + '" font-size="28"' + sty(t1 + .2, .4) + '>' + esc(e.num) + '</text>';
        t1 += .6;
        if (e.name) { s += '<text class="write" x="' + (x + nb + 14) + '" y="' + (y + 31) + '" font-size="27"' + sty(t1, .5) + '>' + esc(e.name) + '</text>'; t1 += .5; }
        var yy = y + 72;
        r = textLines(wrap(e.rule, cw, 22), x, yy, 22, null, t1); s += r.svg; t1 += r.dur; yy += r.h;
        if (e.hook) {
          s += '<g transform="translate(' + (x + 12) + ' ' + (yy + 2) + ') scale(.42)">' + ICONS.bulb.map(function (p) { return path(p, 'blue', t1, .3, 6); }).join('') + '</g>';
          r = textLines(wrap(e.hook, cw - 34, 21), x + 34, yy + 6, 21, 'blue', t1 + .2); s += r.svg; t1 += r.dur + .2;
        }
        return { svg: s, dur: t1 - t };
      }
    }
    return { svg: '', dur: 0 };
  }

  function beatSvg(beat) {
    var t = 0.2, s = '';
    (beat.add || []).forEach(function (e) {
      var at = e.at != null ? e.at : t, r = draw(e, at);
      s += r.svg; t = at + r.dur + .25;
    });
    return { svg: s, dur: t };
  }

  /* ---------- player ---------- */
  var token = 0, audio = null, timer = null;
  function stop() { token++; if (audio) { audio.pause(); audio = null; } clearTimeout(timer); }

  function mount(el, id) {
    stop();
    var L = (window.LESSONS || {})[id];
    if (L) return start(el, id, L);
    el.innerHTML = '<section class="board"><p>Wheeling in the whiteboard…</p></section>';
    var sc = document.createElement('script');
    sc.src = 'lessons/' + encodeURIComponent(id) + '.js';
    sc.onload = function () { var X = (window.LESSONS || {})[id]; if (X) start(el, id, X); else sc.onerror(); };
    sc.onerror = function () { el.innerHTML = '<section class="board"><h2>This board is still being drawn.</h2><p><a class="btn" href="#/lessons">Back to lessons</a></p></section>'; };
    document.head.appendChild(sc);
  }

  function start(el, id, L) {
    var beats = [], firstOf = [];
    L.scenes.forEach(function (sc, si) { firstOf[si] = beats.length; sc.beats.forEach(function (b, bi) { beats.push({ si: si, bi: bi, b: b }); }); });
    var DUR = (window.DUR || {})[id] || [];
    var n = 0, playing = false, speed = 1, ended = false, my = ++token;
    var trackName = L.track === 'ucc' ? 'UCC Article 2' : 'Common law and the Restatement';

    el.innerHTML = '<section class="lesson"><h1>' + esc(L.title) + '</h1><p class="muted">' + trackName +
      (L.sections && L.sections.length ? ' · ' + esc(L.sections.join(', ')) : '') + ' · ' + beats.length + ' steps</p>' +
      '<div class="stagewrap"><svg class="wb" id="wb" viewBox="0 0 960 540" role="img" aria-label="Professor Stick Figure teaching ' + esc(L.title) + ' at a whiteboard">' +
      '<rect x="20" y="20" width="920" height="445" rx="10" style="fill:#fff;stroke:#a4abb3;stroke-width:7"/>' +
      '<rect x="70" y="465" width="820" height="12" rx="4" style="fill:#a4abb3"/>' +
      '<rect x="120" y="457" width="46" height="9" rx="3" style="fill:#d4322c"/><rect x="176" y="457" width="46" height="9" rx="3" style="fill:#2459c4"/><rect x="232" y="457" width="46" height="9" rx="3" style="fill:#1d2b3a"/>' +
      '<g id="inkg"></g>' + P.prof('point').replace('<svg class="wb" ', '<svg x="749" y="277" width="186" height="225" ') + '</svg>' +
      '<button class="overlay" id="ov" type="button"><span>▶ Play lesson</span></button></div>' +
      '<div class="controls"><button class="btn small" id="prev" type="button">◀ Back</button><button class="btn small go" id="pp" type="button">Play</button>' +
      '<button class="btn small" id="next" type="button">Next ▶</button><label class="muted">Speed <select id="spd"><option>0.75</option><option selected>1</option><option>1.25</option><option>1.5</option></select></label>' +
      '<a class="btn small" href="#/lessons">All lessons</a><button class="btn small" id="skip" type="button">Skip to mini set</button></div>' +
      '<div class="chapters" id="ch">' + L.scenes.map(function (s, i) { return '<button type="button" data-s="' + i + '">' + esc(s.title) + '</button>'; }).join('') + '</div>' +
      '<div class="bar"><i id="prog"></i></div><div class="cap" id="cap" aria-live="polite"><b>Professor Stick Figure:</b> Press play when you are ready.</div>' +
      '<div id="mini"></div></section>';

    var wb = el.querySelector('#wb'), ink = el.querySelector('#inkg'), ov = el.querySelector('#ov'), pp = el.querySelector('#pp');
    var cap = el.querySelector('#cap'), prog = el.querySelector('#prog'), mini = el.querySelector('#mini');

    function render(k, animate) {
      var cur = beats[k], sc = L.scenes[cur.si], from = firstOf[cur.si], s = '', i;
      for (i = k; i > from; i--) if (beats[i].b.clear) { from = i; break; }
      var freshTitle = animate && k === firstOf[cur.si];
      s += '<g class="' + (freshTitle ? 'on' : 'now') + '"><text class="write" x="58" y="82" font-size="40" style="--d:.6s">' + esc(sc.title) + '</text>' +
        path('M56 96 q' + Math.min(330, sc.title.length * 10) + ' 9 ' + Math.min(660, sc.title.length * 20) + ' -2', 'red', .5, .4) + '</g>';
      for (i = from; i < k; i++) s += '<g class="now">' + beatSvg(beats[i].b).svg + '</g>';
      var r = beatSvg(cur.b);
      s += '<g class="' + (animate ? 'on' : 'now') + '">' + r.svg + '</g>';
      ink.innerHTML = s;
      cap.innerHTML = '<b>Professor Stick Figure:</b> ' + esc(cur.b.say);
      prog.style.width = ((k + (animate ? 0 : 1)) / beats.length * 100) + '%';
      el.querySelectorAll('#ch button').forEach(function (b) { b.classList.toggle('cur', +b.dataset.s === cur.si); });
      return r.dur;
    }
    function setPlaying(v) { playing = v; pp.textContent = v ? 'Pause' : 'Play'; wb.classList.toggle('talking', v); }

    function play(k) {
      if (my !== token) return;
      clearTimeout(timer); if (audio) { audio.pause(); audio = null; }
      if (k >= beats.length) return finish();
      n = Math.max(0, k); ended = false; ov.hidden = true;
      var animDur = render(n, true), began = Date.now(), fired = false;
      setPlaying(true);
      var est = (DUR[n] || beats[n].b.say.split(/\s+/).length * .42 + .8);
      function done() {
        if (fired || my !== token) return; fired = true; wb.classList.remove('talking');
        var left = animDur * 1000 - (Date.now() - began);
        timer = setTimeout(function () { if (playing) play(n + 1); }, Math.max(450, left) / speed);
      }
      var a = new Audio('audio/' + id + '/' + (n + 1) + '.m4a'); audio = a; a.playbackRate = speed;
      a.onended = done;
      a.onerror = function () { timer = setTimeout(done, est * 1000 / speed); };
      var p = a.play(); if (p && p.catch) p.catch(function () { timer = setTimeout(done, est * 1000 / speed); });
    }
    function finish() {
      setPlaying(false); ended = true; prog.style.width = '100%';
      ov.querySelector('span').textContent = '↻ Watch again'; ov.hidden = false;
      var seen = P.store.get('psf-seen', {}); seen[id] = 1; P.store.set('psf-seen', seen);
      showMini(true);
    }
    function showMini(scroll) {
      if (!L.mini || !L.mini.length) return;
      if (!mini.firstChild) {
        mini.innerHTML = '<h2>Mini set: ' + L.mini.length + ' questions on this board</h2><div id="miniq"></div>';
        P.runQuiz(mini.querySelector('#miniq'), {
          title: 'Mini set', kind: 'Mini set: ' + L.title, questions: L.mini,
          id: function (q, m) { return id + '-m' + (m + 1); },
          exit: ['#/lessons', 'Back to lessons']
        });
      }
      if (scroll) mini.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    ov.addEventListener('click', function () { play(0); });
    pp.addEventListener('click', function () {
      if (playing) { setPlaying(false); clearTimeout(timer); if (audio) audio.pause(); }
      else if (ended) play(0);
      else if (audio && !audio.ended && audio.currentTime > 0) { setPlaying(true); ov.hidden = true; audio.play(); }
      else play(n);
    });
    el.querySelector('#prev').addEventListener('click', function () { play(n - 1); });
    el.querySelector('#next').addEventListener('click', function () { play(n + 1); });
    el.querySelector('#spd').addEventListener('change', function (e) { speed = +e.target.value; if (audio) audio.playbackRate = speed; });
    el.querySelector('#skip').addEventListener('click', function () { setPlaying(false); clearTimeout(timer); if (audio) audio.pause(); showMini(true); });
    el.querySelectorAll('#ch button').forEach(function (b) { b.addEventListener('click', function () { play(firstOf[+b.dataset.s]); }); });
    render(0, false); prog.style.width = '0';
    cap.innerHTML = '<b>Professor Stick Figure:</b> Press play when you are ready.';
  }

  window.PSF_PLAYER = { mount: mount, stop: stop, draw: draw, icons: Object.keys(ICONS) };
})();
