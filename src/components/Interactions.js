"use client";

import { useEffect, useRef } from "react";

/* All the hands-on bits: theme toggle, draggable flow diagram, confetti,
   card tilt, counters, the terminal and the copy-email button. */
export default function Interactions() {
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* theme toggle */
    const root = document.documentElement;
    try { const t = localStorage.getItem('rm-theme'); if (t) root.dataset.theme = t; } catch (e) {}
    document.getElementById('theme').addEventListener('click', () => {
      const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      root.dataset.theme = cur === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('rm-theme', root.dataset.theme); } catch (e) {}
    });

    /* flow canvas */
    const flow = document.getElementById('flow');
    const svg = document.getElementById('edges');
    const nodes = {};
    flow.querySelectorAll('.node').forEach(n => nodes[n.dataset.id] = n);
    const edges = [['me','idea'],['idea','design'],['idea','ai'],['design','build'],['ai','build'],['build','ship']];
    const layouts = {
      wide:   { me:[.13,.52], idea:[.34,.3], design:[.53,.22], ai:[.53,.72], build:[.72,.48], ship:[.89,.72] },
      narrow: { me:[.45,.2], idea:[.3,.36], design:[.25,.52], ai:[.74,.52], build:[.5,.69], ship:[.62,.86] }
    };
    const pos = {};
    let layoutKey = null;
    function applyLayout(force) {
      const key = flow.clientWidth < 640 ? 'narrow' : 'wide';
      if (key === layoutKey && !force) return;
      layoutKey = key;
      for (const id in layouts[key]) pos[id] = [...layouts[key][id]];
    }
    const paths = edges.map(() => { const p = document.createElementNS('http://www.w3.org/2000/svg','path'); svg.appendChild(p); return p; });
    const dots = edges.map((_, k) => { const c = document.createElementNS('http://www.w3.org/2000/svg','circle'); c.setAttribute('r', 4); svg.appendChild(c); return { c, t: (k * .23) % 1 }; });
    function draw() {
      const W = flow.clientWidth, H = flow.clientHeight;
      for (const id in pos) { const n = nodes[id]; n.style.left = (pos[id][0] * W) + 'px'; n.style.top = (pos[id][1] * H) + 'px'; }
      edges.forEach(([a, b], k) => {
        const ax = pos[a][0] * W, ay = pos[a][1] * H, bx = pos[b][0] * W, by = pos[b][1] * H;
        const dx = Math.max(40, Math.abs(bx - ax) * .5), vert = layoutKey === 'narrow';
        const d = vert
          ? `M${ax},${ay} C${ax},${(ay+by)/2} ${bx},${(ay+by)/2} ${bx},${by}`
          : `M${ax},${ay} C${ax+dx},${ay} ${bx-dx},${by} ${bx},${by}`;
        paths[k].setAttribute('d', d);
      });
    }
    applyLayout(true); draw();
    addEventListener('resize', () => { applyLayout(); draw(); });

    let last = performance.now();
    function tick(now) {
      const dt = Math.min(50, now - last) / 1000; last = now;
      dots.forEach((d, k) => {
        d.t = (d.t + dt * .35) % 1;
        const p = paths[k], L = p.getTotalLength();
        if (L) { const pt = p.getPointAtLength(d.t * L); d.c.setAttribute('cx', pt.x); d.c.setAttribute('cy', pt.y); }
      });
      requestAnimationFrame(tick);
    }
    if (!reduce) requestAnimationFrame(tick); else dots.forEach(d => d.c.remove());

    let drag = null, moved = false;
    flow.querySelectorAll('.node').forEach(n => {
      n.addEventListener('pointerdown', e => {
        drag = { id: n.dataset.id, el: n, sx: e.clientX, sy: e.clientY, ox: pos[n.dataset.id][0], oy: pos[n.dataset.id][1] };
        moved = false; n.setPointerCapture(e.pointerId); n.classList.add('dragging');
      });
      n.addEventListener('pointermove', e => {
        if (!drag || drag.el !== n) return;
        const W = flow.clientWidth, H = flow.clientHeight;
        const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
        if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
        pos[drag.id][0] = Math.min(.95, Math.max(.05, drag.ox + dx / W));
        pos[drag.id][1] = Math.min(.92, Math.max(.08, drag.oy + dy / H));
        draw();
      });
      const end = () => { if (drag && drag.el === n) { n.classList.remove('dragging'); drag = null; } };
      n.addEventListener('pointerup', end); n.addEventListener('pointercancel', end);
    });

    /* confetti on ship */
    const cv = document.getElementById('confetti'), cx = cv.getContext('2d');
    let parts = [], running = false;
    function burst() {
      const r = nodes.ship.getBoundingClientRect(), f = flow.getBoundingClientRect();
      cv.width = f.width * devicePixelRatio; cv.height = f.height * devicePixelRatio;
      cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const ox = r.left - f.left + r.width / 2, oy = r.top - f.top + r.height / 2;
      const cs = getComputedStyle(root);
      const cols = [cs.getPropertyValue('--accent'), cs.getPropertyValue('--mark'), cs.getPropertyValue('--ink'), '#22c55e'];
      for (let k = 0; k < 90; k++) {
        const a = Math.random() * Math.PI * 2, s = 3 + Math.random() * 7;
        parts.push({ x: ox, y: oy, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 4, r: Math.random() * 6, c: cols[k % 4], w: 4 + Math.random() * 6, life: 1 });
      }
      if (!running) { running = true; requestAnimationFrame(step); }
      nodes.ship.querySelector('small').textContent = ['shipped!', 'again?', 'deployed ✓', 'one more?'][Math.floor(Math.random() * 4)];
    }
    function step() {
      cx.clearRect(0, 0, cv.width, cv.height);
      parts.forEach(p => { p.vy += .25; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += .15; p.life -= .012;
        cx.save(); cx.globalAlpha = Math.max(0, p.life); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.w/2, -2, p.w, 4); cx.restore(); });
      parts = parts.filter(p => p.life > 0);
      if (parts.length) requestAnimationFrame(step); else { running = false; cx.clearRect(0, 0, cv.width, cv.height); }
    }
    nodes.ship.addEventListener('click', () => { if (!moved) burst(); });
    nodes.ship.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); burst(); } });

    /* card tilt */
    if (!reduce && matchMedia('(hover: hover)').matches) {
      document.querySelectorAll('.tilt').forEach(c => {
        c.addEventListener('pointermove', e => {
          const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
          c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
        });
        c.addEventListener('pointerleave', () => c.style.transform = '');
      });
    }

    /* stat counters, starting from the final value already shown */
    if (!reduce && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(en => {
        if (!en.isIntersecting) return; io.unobserve(en.target);
        const el = en.target, end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '';
        const t0 = performance.now();
        (function f(t) { const k = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - k, 3);
          el.textContent = (end * e).toFixed(dec) + suf; if (k < 1) requestAnimationFrame(f); })(t0);
      }), { threshold: .6 });
      document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
    }

    /* terminal */
    const out = document.getElementById('out'), tin = document.getElementById('tin');
    const C = {
      help: () => `available commands:\n  <span class="y">whoami</span>    who's behind this page\n  <span class="y">skills</span>    the toolbox\n  <span class="y">projects</span>  things I've built\n  <span class="y">contact</span>   how to reach me\n  <span class="y">clear</span>     wipe the screen`,
      whoami: () => `<span class="g">riddhesh mali</span>\nfull stack developer @ accenture\nB.E. computer engineering, sinhgad college of engineering, pune\nCGPA 9.26 · loves react, node and well-behaved AI`,
      skills: () => `<span class="p">languages</span>   javascript · java · c++ · sql · html5 · css3\n<span class="p">frameworks</span>  react · react native · next.js · redux · zustand\n            node.js · express · spring boot · vite.js\n            tailwind · mui · postgresql · mysql\n<span class="p">testing</span>     jest · vitest\n<span class="p">tools</span>       github · jira · jenkins · postman · aws\n            claude code · openai`,
      projects: () => `01 <span class="y">relay</span>          crash-proof AI workflow engine\n02 <span class="y">jaahir suchna</span>  LLM OCR for property notices\n03 <span class="y">list my drug</span>   B2B pharma marketplace\n04 <span class="y">ksolare</span>        solar brand site\n<span class="m">tip: scroll up to #work to open them</span>`,
      contact: () => `email     <a href="mailto:riddheshmali109@gmail.com">riddheshmali109@gmail.com</a>\ngithub    <a href="https://github.com/Riddhesh1009" target="_blank" rel="noopener">github.com/Riddhesh1009</a>\nlinkedin  <a href="https://www.linkedin.com/in/riddheshmali109/" target="_blank" rel="noopener">in/riddheshmali109</a>`,
      hire: () => `<span class="g">excellent choice.</span> running hire.sh…\n[████████████████] 100%\nnext step: email riddheshmali109@gmail.com`,
      sudo: () => `<span class="y">nice try.</span> you're not in the sudoers file. this incident will be reported (to my inbox).`,
      coffee: () => `   ( (\n    ) )\n  ........\n  |      |]\n  \\      /\n   \`----'   <span class="m">brewing… my fuel for late-night deploys</span>`,
      ls: () => `about.md  projects/  path.log  contact.txt  <span class="m">secret.txt?</span>`,
      'cat secret.txt': () => `psst: try <span class="y">hire</span>, <span class="y">coffee</span> or <span class="y">sudo</span>.`,
    };
    function print(html, cls) { const d = document.createElement('div'); if (cls) d.className = cls; d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; }
    function run(raw) {
      const cmd = raw.trim().toLowerCase();
      print(`<span class="p">➜ ~</span> ${cmd.replace(/[<>&]/g, '')}`);
      if (!cmd) return;
      if (cmd === 'clear') { out.innerHTML = ''; return; }
      const f = C[cmd] || (cmd.startsWith('sudo') ? C.sudo : null);
      print(f ? f() : `command not found: ${cmd.replace(/[<>&]/g, '')}. try <span class="y">help</span>`);
      print('&nbsp;');
    }
    print(`<span class="g">welcome!</span> this is a tiny shell about me.\ntype <span class="y">help</span> to see what it can do.\n&nbsp;`);
    document.getElementById('tform').addEventListener('submit', e => { e.preventDefault(); run(tin.value); tin.value = ''; });
    document.getElementById('cmds').addEventListener('click', e => { if (e.target.tagName === 'BUTTON') run(e.target.textContent); });

    /* copy email */
    const copy = document.getElementById('copy');
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText('riddheshmali109@gmail.com'); copy.textContent = 'copied ✓'; }
      catch (e) { copy.textContent = 'select the email to copy'; }
      setTimeout(() => copy.textContent = 'copy email', 1800);
    });
  }, []);
  return null;
}
