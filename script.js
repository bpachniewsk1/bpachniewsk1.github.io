(() => {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Theme toggle ---------- */
  try { const saved = localStorage.getItem("theme"); if (saved) root.dataset.theme = saved; } catch (_) {}
  $(".theme-toggle").addEventListener("click", () => {
    const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- Nav state ---------- */
  const nav = $(".nav");
  const links = $$(".nav nav a");
  const sections = links.map((a) => $(a.getAttribute("href")));
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 8);
    let cur = -1;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top < 140) cur = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === cur));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Project filters ---------- */
  const chips = $$(".chip");
  const projects = $$(".project");
  chips.forEach((chip) => chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.toggle("is-active", c === chip));
    const f = chip.dataset.filter;
    projects.forEach((p) => {
      const show = f === "all" || p.dataset.tags.split(" ").includes(f);
      p.classList.toggle("is-hidden", !show);
      if (show) p.classList.add("in");
    });
  }));

  /* ---------- Robot arm ---------- */
  (function robotArm() {
    const stage = $("#arm-stage");
    if (!stage) return;
    const svg = $("svg.arm-svg", stage);
    const NS = "http://www.w3.org/2000/svg";
    const el = (tag, attrs = {}, parent) => {
      const n = document.createElementNS(NS, tag);
      for (const k in attrs) n.setAttribute(k, attrs[k]);
      if (parent) parent.appendChild(n);
      return n;
    };

    const S = { x: 70, y: 314 };           // shoulder joint
    const L1 = 175, L2 = 165;              // link lengths
    const REACH = L1 + L2 - 2;
    const BELT_TOP = 190;
    const SLOTS = [200, 272, 344];
    const ITEM_H = 30;
    const TYPES = [
      { type: "plastic", name: "bottle", color: "var(--plastic)" },
      { type: "paper",   name: "paper",  color: "var(--paper)" },
      { type: "glass",   name: "jar",    color: "var(--glass)" },
    ];
    const BINS = { plastic: { x: 176 }, paper: { x: 268 }, glass: { x: 360 } };
    const BIN_TOP = 282, BIN_W = 72;

    const upper = $("#arm-upper"), fore = $("#arm-fore");
    const jS = $("#j-shoulder"), jE = $("#j-elbow");
    const gripper = $("#gripper"), fL = $("#finger-l"), fR = $("#finger-r");
    const itemsG = $("#items"), binsG = $("#bins"), handBox = $("#hand-box");
    const statusEl = $("#arm-status"), countEl = $("#sorted-count");
    const beltDash = $("#belt-dash");
    const visionBtn = $("#vision-toggle"), autoBtn = $("#auto-toggle");

    // Bins
    for (const [type, b] of Object.entries(BINS)) {
      const t = TYPES.find((t) => t.type === type);
      const g = el("g", {}, binsG);
      el("path", { d: `M${b.x - BIN_W / 2} ${BIN_TOP} L${b.x - BIN_W / 2 + 5} 340 H${b.x + BIN_W / 2 - 5} L${b.x + BIN_W / 2} ${BIN_TOP}`, class: "bin-body", stroke: t.color }, g);
      el("line", { x1: b.x - BIN_W / 2 - 3, y1: BIN_TOP, x2: b.x + BIN_W / 2 + 3, y2: BIN_TOP, class: "bin-rim", stroke: t.color }, g);
      b.count = 0;
      b.countEl = el("text", { x: b.x, y: 318, class: "bin-count", fill: t.color }, g);
      b.countEl.textContent = "0";
      b.labelEl = el("text", { x: b.x, y: 334, class: "bin-label" }, g);
      b.labelEl.textContent = I18N.t("bin." + type);
    }

    // Item shapes (drawn with bottom-centre at 0,0)
    function drawShape(g, t) {
      const s = el("g", { class: "shape" }, g);
      if (t.type === "plastic") {
        el("path", { d: "M-7 0h14v-17c0-3-3.5-4.5-3.5-7v-2h-7v2c0 2.5-3.5 4-3.5 7z", fill: t.color }, s);
        el("rect", { x: -4, y: -30, width: 8, height: 4, rx: 1, fill: "var(--ink)" }, s);
        el("rect", { x: -7, y: -14, width: 14, height: 6, fill: "rgba(255,255,255,.35)" }, s);
      } else if (t.type === "paper") {
        el("path", { d: "M-12 0l1.5-21 9-5 12 3 1.5 23z", fill: t.color }, s);
        el("path", { d: "M-9 -14l8 3 9-6M-2 -11l1 10", stroke: "rgba(255,255,255,.45)", "stroke-width": 1.4, fill: "none" }, s);
      } else {
        el("rect", { x: -10, y: -24, width: 20, height: 24, rx: 5, fill: t.color, opacity: .85 }, s);
        el("rect", { x: -9, y: -30, width: 18, height: 6, rx: 1.5, fill: "var(--ink)" }, s);
        el("path", { d: "M-5 -19v10", stroke: "rgba(255,255,255,.5)", "stroke-width": 2, "stroke-linecap": "round" }, s);
      }
    }

    let belt = [];         // items on the belt, index = slot
    let flying = [];       // items held or falling
    let uid = 0;

    function spawn() {
      if (belt.length >= SLOTS.length) return;
      const t = TYPES[Math.floor(Math.random() * TYPES.length)];
      const g = el("g", { class: "item", tabindex: 0, role: "button", "aria-label": `Sort the ${t.name}` }, itemsG);
      drawShape(g, t);
      const conf = (0.86 + Math.random() * 0.12).toFixed(2);
      const det = el("g", { class: "det" }, g);
      el("rect", { x: -16, y: -35, width: 32, height: 39, rx: 3 }, det);
      const label = `${t.name} ${conf}`;
      el("rect", { x: -16.7, y: -48, width: label.length * 5.9 + 8, height: 13, rx: 2, class: "lbl-bg" }, det);
      el("text", { x: -12.5, y: -38.5 }, det).textContent = label;
      const item = { id: uid++, ...t, g, det, x: 480, y: BELT_TOP, state: "belt" };
      const go = (e) => { e.preventDefault(); e.stopPropagation(); requestSort(item); };
      g.addEventListener("click", go);
      g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") go(e); });
      belt.push(item);
    }
    for (let i = 0; i < SLOTS.length; i++) spawn();
    belt.forEach((it, i) => (it.x = SLOTS[i]));

    // State
    let E = { x: 170, y: 110 };            // end effector (wrist)
    let grip = 15, gripT = 15;
    let task = null;
    let pointer = null, clickPt = null;
    let paused = false;
    let auto = false;
    let sorted = 0;
    let beltOffset = 0;

    // status remembers its key so it can re-render when the language changes
    let lastStatus = ["arm.tap", {}, false];
    const status = (key, vars = {}, warn = false) => {
      lastStatus = [key, vars, warn];
      statusEl.textContent = key === "raw" ? vars.text : I18N.t(key, vars);
      statusEl.classList.toggle("warn", warn);
    };
    document.addEventListener("langchange", () => {
      status(...lastStatus);
      for (const [type, b] of Object.entries(BINS)) b.labelEl.textContent = I18N.t("bin." + type);
    });
    status("arm.tap");

    function requestSort(item) {
      if (task || item.state !== "belt") return;
      clickPt = pointer ? { ...pointer } : null;
      const bin = BINS[item.type];
      const top = BELT_TOP - ITEM_H;
      task = {
        i: 0, t: 0,
        steps: [
          { to: () => ({ x: item.x, y: top - 50 }), start: () => { gripT = 15; status("arm.pick", { name: item.name }); } },
          { to: () => ({ x: item.x, y: top - 10 }) },
          { wait: 180, start: () => (gripT = 10.5) },
          { wait: 60, start: () => {
              item.state = "held";
              belt = belt.filter((b) => b !== item);
              flying.push(item);
              item.det.style.display = "none";
              setTimeout(spawn, 700);
            } },
          { to: () => ({ x: item.x, y: top - 45 }) },
          { to: () => ({ x: bin.x, y: 160 }), start: () => status("raw", { text: `${item.name} → ${I18N.t("bin." + item.type)}` }) },
          { to: () => ({ x: bin.x, y: 236 }) },
          { wait: 100, start: () => {
              gripT = 15; item.state = "fall"; item.vy = 0;
            } },
          { to: () => ({ x: bin.x - 30, y: 165 }) },
        ],
      };
    }

    function solveIK(px, py) {
      const dx = px - S.x, dy = py - S.y;
      const d = Math.max(40, Math.min(REACH, Math.hypot(dx, dy)));
      const a = Math.atan2(dy, dx);
      const off = Math.acos(Math.max(-1, Math.min(1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d))));
      const e1 = { x: S.x + L1 * Math.cos(a - off), y: S.y + L1 * Math.sin(a - off) };
      const e2 = { x: S.x + L1 * Math.cos(a + off), y: S.y + L1 * Math.sin(a + off) };
      return e1.y < e2.y ? e1 : e2; // elbow up
    }

    function clampReach(p) {
      const dx = p.x - S.x, dy = p.y - S.y, d = Math.hypot(dx, dy);
      let x = p.x, y = p.y;
      if (d > REACH) { x = S.x + (dx / d) * REACH; y = S.y + (dy / d) * REACH; }
      if (d < 60) { x = S.x + (dx / (d || 1)) * 60; y = S.y + (dy / (d || 1)) * 60; }
      return { x, y: Math.min(y, 300) };
    }

    function toSvg(e) {
      const pt = svg.createSVGPoint();
      pt.x = e.clientX; pt.y = e.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    }
    svg.addEventListener("pointermove", (e) => { const p = toSvg(e); pointer = { x: p.x, y: p.y }; });
    svg.addEventListener("pointerdown", (e) => { const p = toSvg(e); pointer = { x: p.x, y: p.y }; });
    svg.addEventListener("pointerleave", () => (pointer = null));
    svg.addEventListener("pointerup", (e) => { if (e.pointerType !== "mouse") pointer = null; });
    svg.addEventListener("pointercancel", () => (pointer = null));

    visionBtn.addEventListener("click", () => {
      const on = svg.classList.toggle("vision-off");
      visionBtn.classList.toggle("is-on", !on);
      visionBtn.setAttribute("aria-pressed", String(!on));
    });
    autoBtn.addEventListener("click", () => {
      auto = !auto;
      autoBtn.classList.toggle("is-on", auto);
      autoBtn.setAttribute("aria-pressed", String(auto));
      $("use", autoBtn).setAttribute("href", auto ? "#i-pause" : "#i-play");
      if (auto && !task && belt[0]) requestSort(belt[0]);
      if (!auto && !task) status("arm.tap");
    });

    let last = performance.now();
    let visible = true;
    function frame(now) {
      requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible) return; // stay cheap while scrolled away

      // Conveyor
      let beltMoving = false;
      belt.forEach((it, i) => {
        const tx = SLOTS[i];
        if (Math.abs(tx - it.x) > 0.5) beltMoving = true;
        it.x += (tx - it.x) * Math.min(1, dt * 3.2);
      });
      if (beltMoving) { beltOffset += dt * 60; beltDash.setAttribute("stroke-dashoffset", beltOffset); }

      // Hand-safety check: pointer near gripper while working (and moved away from where you clicked)
      const handNear = !!task && !!pointer && Math.hypot(pointer.x - E.x, pointer.y - (E.y + 12)) < 52 &&
        (!clickPt || Math.hypot(pointer.x - clickPt.x, pointer.y - clickPt.y) > 24);
      if (handNear !== paused) {
        paused = handNear;
        handBox.style.display = paused ? "" : "none";
        if (paused) status("arm.hand", {}, true);
        else if (task) status("arm.clear");
      }
      if (paused) handBox.setAttribute("transform", `translate(${pointer.x} ${pointer.y})`);

      // Motion
      if (task && !paused) {
        const st = task.steps[task.i];
        if (!st.started) { st.started = true; st.start && st.start(); task.t = 0; }
        let done = false;
        if (st.wait != null) {
          task.t += dt * 1000;
          done = task.t >= st.wait;
        } else {
          const tgt = clampReach(st.to());
          const dx = tgt.x - E.x, dy = tgt.y - E.y, d = Math.hypot(dx, dy);
          const step = 340 * dt * (0.35 + Math.min(1, d / 60) * 0.65);
          if (d <= step) { E = { x: tgt.x, y: tgt.y }; done = true; }
          else { E.x += (dx / d) * step; E.y += (dy / d) * step; }
        }
        if (done) {
          task.i++;
          if (task.i >= task.steps.length) {
            task = null;
            sorted++; countEl.textContent = sorted;
            if (auto) setTimeout(() => { if (auto && !task && belt[0]) requestSort(belt[0]); }, 500);
            else status("arm.tap");
          }
        }
      } else if (!task) {
        const tgt = pointer ? clampReach(pointer) : { x: 175 + Math.sin(now / 1300) * 18, y: 105 + Math.cos(now / 900) * 10 };
        E.x += (tgt.x - E.x) * Math.min(1, dt * 5);
        E.y += (tgt.y - E.y) * Math.min(1, dt * 5);
      }
      E = clampReach(E);

      // Held & falling items
      flying = flying.filter((it) => {
        if (it.state === "held") { it.x = E.x; it.y = E.y + 12 + ITEM_H; }
        else if (it.state === "fall") {
          it.vy += 1400 * dt; it.y += it.vy * dt;
          if (it.y > 336) {
            it.g.remove();
            const b = BINS[it.type];
            b.count++; b.countEl.textContent = b.count;
            b.countEl.classList.remove("bin-pop"); void b.countEl.getBBox(); b.countEl.classList.add("bin-pop");
            return false;
          }
        }
        return true;
      });
      [...belt, ...flying].forEach((it) => it.g.setAttribute("transform", `translate(${it.x.toFixed(1)} ${it.y.toFixed(1)})`));

      // Arm render
      grip += (gripT - grip) * Math.min(1, dt * 14);
      const elb = solveIK(E.x, E.y);
      upper.setAttribute("x1", S.x); upper.setAttribute("y1", S.y);
      upper.setAttribute("x2", elb.x); upper.setAttribute("y2", elb.y);
      fore.setAttribute("x1", elb.x); fore.setAttribute("y1", elb.y);
      fore.setAttribute("x2", E.x); fore.setAttribute("y2", E.y);
      jS.setAttribute("cx", S.x); jS.setAttribute("cy", S.y);
      jE.setAttribute("cx", elb.x); jE.setAttribute("cy", elb.y);
      gripper.setAttribute("transform", `translate(${E.x.toFixed(1)} ${E.y.toFixed(1)})`);
      fL.setAttribute("d", `M${-grip} 4 V20 L${-grip + 4} 26`);
      fR.setAttribute("d", `M${grip} 4 V20 L${grip - 4} 26`);
    }
    requestAnimationFrame(frame);

    // Only do the work while visible
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(stage);
  })();

  /* ---------- Colorization compare slider ---------- */
  (function compare() {
    const cmp = $("#cmp");
    if (!cmp) return;
    const scene = $(".cmp-scene", cmp);
    const gray = scene.cloneNode(true);
    gray.classList.add("gray");
    scene.after(gray);
    const input = $("input", cmp);
    const set = () => cmp.style.setProperty("--p", input.value + "%");
    input.addEventListener("input", set);
    set();
    // gentle hint animation the first time it scrolls into view
    new IntersectionObserver(([e], obs) => {
      if (!e.isIntersecting || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      obs.disconnect();
      let t = 0;
      const tick = () => {
        t += 1;
        input.value = 55 + Math.sin(t / 18) * 30 * Math.max(0, 1 - t / 110);
        set();
        if (t < 110) requestAnimationFrame(tick);
      };
      setTimeout(() => requestAnimationFrame(tick), 400);
    }, { threshold: 0.6 }).observe(cmp);
  })();

  /* ---------- Radar blips: tap to show on touch ---------- */
  $$(".blip").forEach((b) => b.addEventListener("click", () => {
    $$(".blip").forEach((o) => o !== b && o.classList.remove("show"));
    b.classList.toggle("show");
  }));

  /* ---------- Energy toy model ---------- */
  (function energy() {
    const sun = $("#sun");
    if (!sun) return;
    const l1 = $("#e-l1"), l2 = $("#e-l2"), text = $("#e-text"), pv = $("#e-pv .ico");
    const update = () => {
      const v = +sun.value;
      pv.style.opacity = 0.35 + (v / 100) * 0.65;
      l1.className = "e-link"; l2.className = "e-link";
      if (v >= 60) {
        l1.classList.add("on"); l2.classList.add("on");
        text.textContent = I18N.t("energy.surplus");
      } else if (v >= 30) {
        l1.classList.add("on");
        text.textContent = I18N.t("energy.balanced");
      } else {
        l2.classList.add("on", "rev");
        text.textContent = I18N.t("energy.deficit");
      }
    };
    sun.addEventListener("input", update);
    document.addEventListener("langchange", update);
    update();
  })();

  /* ---------- Hanzi Grid screenshots: tabs + lightbox ---------- */
  (function shots() {
    const card = $(".hanzi");
    if (!card) return;
    const tabs = $$(".shot-tabs .mini", card);
    const imgs = $$(".shot-frame img", card);
    let cur = 0, timer;
    const show = (i) => {
      cur = i;
      tabs.forEach((t, j) => { t.classList.toggle("is-on", j === i); t.setAttribute("aria-selected", String(j === i)); });
      imgs.forEach((im, j) => im.classList.toggle("is-on", j === i));
    };
    tabs.forEach((t, i) => t.addEventListener("click", () => { clearInterval(timer); show(i); }));
    // slowly cycle until the visitor picks a tab
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(() => show((cur + 1) % imgs.length), 4500);
    }

    const box = $("#lightbox");
    $(".shot-frame", card).addEventListener("click", () => {
      clearInterval(timer);
      $("img", box).src = imgs[cur].src;
      $("img", box).alt = imgs[cur].alt;
      box.showModal();
    });
    box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  })();

  /* ---------- Hackathon photo gallery ---------- */
  (function gallery() {
    const g = $("#gallery");
    if (!g) return;
    const mains = $$(".g-main img", g), thumbs = $$(".g-thumb", g), cap = $("#g-cap");
    let cur = 0;
    const show = (i) => {
      cur = i;
      mains.forEach((m, j) => m.classList.toggle("is-on", j === i));
      thumbs.forEach((t, j) => t.classList.toggle("is-on", j === i));
      cap.textContent = I18N.t("gallery")[i];
    };
    thumbs.forEach((t, i) => t.addEventListener("click", () => show(i)));
    document.addEventListener("langchange", () => show(cur));
    show(0);
    const box = $("#lightbox");
    $(".g-main", g).addEventListener("click", () => {
      $("img", box).src = mains[cur].src;
      $("img", box).alt = mains[cur].alt;
      box.showModal();
    });
  })();

  $("#year").textContent = new Date().getFullYear();
})();
