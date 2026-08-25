(function(){
  "use strict";

  var VEHICLE = "?vehicle_type=Truck&year=2018&make=Ford&model=F-150&trim=Lariat&drive=4WD&modification=Minor+Plastic+Trimming&rubbing=No+rubbing+or+scrubbing&suspension=Leveling+Kit";

  /* ============================================================
     SWAP DATA
     Wheel offsets and sizes are taken straight off the Custom
     Offsets package pages. Backspacing is derived with the
     standard formula: (marketed width + 1in) / 2 + offset in
     inches. Overall diameter is the tire's own spec, except the
     metric LT295/60R20, which computes to about 33.9in.
     ============================================================ */
  var SWAPS = {

    wheels: {
      badge: "Setup",
      scale: { min: 60, max: -60, showZero: true },   // flipped: tucked on the left, negative sticks out on the right
      items: [
        {
          name:"The Daily Driver",
          prod:"Fuel Rebel 6", size:"20x9",
          feature:["Tire","BFGoodrich All-Terrain T/A KO3"],
          blurb:"The narrowest wheel and the most sidewall of the three, which is why it rides the best. This is the package you pick if the truck still tows, hauls, or commutes.",
          chips:[["Backspacing","About 5in"],["Tire size","LT295/60R20"],["Diameter","About 34in"]],
          price:"$3,691.32",
          scaleValue:1, scaleLabel:"+1mm",
          meters:[["Stance",48],["Rub risk",26],["Daily comfort",92]],
          note:"The easiest of the three to bolt up, and why that matters when you only have one weekend.",
          cta:"Build the 20x9 package",
          link:"https://www.customwheeloffset.com/buy-wheel-offset2/D68020908950/BFG44461/fuel-rebel-6-20x9-1-bfgoodrich-all-terrain-t-a-ko3-lt295-60r20" + VEHICLE
        },
        {
          name:"The 35in Look",
          prod:"Factory Reproductions FR52", size:"22x9.5",
          feature:["Tire","Nitto Trail Grappler"],
          blurb:"The tallest tire on the most conservative wheel. At about 7in of backspacing the 35s fill the openings without hanging past the body. Looks built from fifty feet away, still parks in a normal garage.",
          chips:[["Backspacing","About 7in"],["Tire size","35x12.50R22LT"],["Diameter","35in"]],
          price:"$4,291.04",
          scaleValue:44, scaleLabel:"+44mm",
          meters:[["Stance",76],["Rub risk",58],["Daily comfort",74]],
          note:"What the 35s asked for during the swap and how long the set took.",
          cta:"Build the 22x9.5 package",
          link:"https://www.customwheeloffset.com/buy-wheel-offset2/52295443601/205610/factory-reproductions-fr52-22x95-44-nitto-trail-grappler-35x1250r22lt" + VEHICLE
        },
        {
          name:"Max Poke",
          prod:"ARKON OFF-ROAD Caesar", size:"22x12",
          feature:["Tire","Kelfire DMR R/T"],
          blurb:"Twelve inches wide with the wheel sitting out at the edge of the fender. It changes the silhouette of the truck and asks the most from your fenders and your alignment.",
          chips:[["Backspacing","About 4.5in"],["Tire size","33x12.50R22LT"],["Diameter","33in"]],
          price:"$3,476.16",
          scaleValue:-51, scaleLabel:"-51mm",
          meters:[["Stance",96],["Rub risk",88],["Daily comfort",54]],
          note:"The full lock check, what rubbed, and what came off to make it sit right.",
          cta:"Build the 22x12 package",
          link:"https://www.customwheeloffset.com/buy-wheel-offset2/K14922208945/1912002333/arkon-off-road-caesar-22x12-51-kelfire-dmr-rt-33x1250r22lt" + VEHICLE
        }
      ]
    },

    /* Three real Rough Country routes to the same 3in of front lift we ran. */
    susp: {
      badge: "Option",
      lift: { max: 6 },
      items: [
        {
          name:"Vertex 2.5 RR",
          prod:"Rough Country", size:"3in lift",
          feature:["Fits","Ford F-150 4WD, 2014 to 2026"],
          blurb:"Three real inches up front and real damping with no cutting, welding, or spring press, which is the only reason a suspension job belongs on a driveway weekend at all.",
          chips:[["Shock body","2.5in RR"],["Install","Bolt on"],["Cutting","None"]],
          price:"$1,299.95",
          liftValue:3, liftLabel:"3in",
          meters:[["Ride quality",84],["Install difficulty",62],["Driveway friendly",88]],
          note:"What the install actually took, the torque specs that mattered, and where a first timer will slow down.",
          cta:"Shop Rough Country suspension",
          link:"https://www.customwheeloffset.com/store/suspension/60675/rough-country-3-lift-kit-vertex-coilovers-vertex-shocks-14-20-ford-f-150-4wd"
        },
        {
          name:"N3 Lifted Struts",
          prod:"Rough Country", size:"3in lift",
          feature:["Fits","Ford F-150 4WD, 2014 to 2026"],
          blurb:"The same three inches we ran, for a fraction of the money. The coil ships preloaded, so no spring compressor.",
          chips:[["Shock body","1 3/8in bore"],["Install","Bolt on"],["Cutting","None"]],
          price:"$369.95",
          liftValue:3, liftLabel:"3in",
          meters:[["Ride quality",78],["Install difficulty",42],["Driveway friendly",94]],
          note:"Preloaded coil, so the spring compressor stays in the toolbox. Replaces strut spacers, it does not stack on top of them.",
          cta:"Shop the N3 lifted struts",
          link:"https://www.customwheeloffset.com/store/suspension/50200/rough-country-3-lift-kit-lifted-n3-struts-n3-shocks-14-20-ford-f-150-4wd"
        },
        {
          name:"M1 Loaded Struts",
          prod:"Rough Country", size:"3in lift",
          feature:["Fits","Ford F-150 4WD, 2014 to 2026"],
          blurb:"The best ride of the three. A 46mm monotube that firms up over a hit and stays soft the rest of the time.",
          chips:[["Shock body","46mm monotube"],["Install","Bolt on"],["Cutting","None"]],
          price:"$549.95",
          liftValue:3, liftLabel:"3in",
          meters:[["Ride quality",92],["Install difficulty",44],["Driveway friendly",90]],
          note:"Preset at 3in in the box. Check fitment first: no Raptor, Tremor, CCD, 3.0L diesel, or heavy duty payload package.",
          cta:"Shop the M1 loaded struts",
          link:"https://www.customwheeloffset.com/store/suspension/115118/rough-country-3-inch-lift-kit-m1-struts-14-20-ford-f-150-4wd"
        }
      ]
    }
  };

  function tkwrap(v){ return /^(TK|\$TK)/.test(String(v)) ? '<span class="tk">' + v + '</span>' : v; }

  function initSwap(root, cfg){
    var q = function(role){ return root.querySelector('[data-role="' + role + '"]'); };
    var tabs = [].slice.call(root.querySelectorAll('.pick'));
    var imgs = [].slice.call(root.querySelectorAll('.stage__vis img'));
    var panel = root.querySelector('.stage');
    var key = root.dataset.swap;
    var current = -1;
    var isLift = !!cfg.lift;

    if (!isLift) {
      var s = cfg.scale;
      if (s.showZero) q('zero').style.left = ((0 - s.min) / (s.max - s.min)) * 100 + '%';
      else q('zero').style.display = 'none';
    } else {
      // build the vertical scale labels and gridlines once
      var scaleEl = q('liftScale'), gridEl = q('liftGrid'), mx = cfg.lift.max;
      var sHtml = '', gHtml = '';
      for (var n = 0; n <= mx; n++) {
        var p = (n / mx) * 100;
        sHtml += '<span style="bottom:' + p + '%">' + n + 'in</span>';
        if (n > 0) gHtml += '<i style="bottom:' + p + '%"></i>';
      }
      scaleEl.innerHTML = sHtml;
      gridEl.innerHTML = gHtml;
    }

    function render(i, focus){
      if (i === current) return;
      current = i;
      var d = cfg.items[i];

      tabs.forEach(function(t, n){
        var on = n === i;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      if (focus) tabs[i].focus();
      imgs.forEach(function(im, n){ im.classList.toggle('on', n === i); });
      panel.setAttribute('aria-labelledby', key + '-tab-' + i);

      q('badge').textContent = cfg.badge + ' 0' + (i + 1) + ' of 03';
      q('eyebrow').textContent = cfg.badge + ' 0' + (i + 1);
      q('name').innerHTML = tkwrap(d.name);
      q('prod').innerHTML = tkwrap(d.prod) + ' <em>' + tkwrap(d.size) + '</em>';
      q('featureK').textContent = d.feature[0];
      q('featureV').innerHTML = tkwrap(d.feature[1]);
      q('blurb').textContent = d.blurb;
      q('note').textContent = d.note;
      q('cta').href = d.link;
      q('cta').textContent = d.cta;
      q('price').innerHTML = tkwrap(d.price);
      q('chips').innerHTML = d.chips.map(function(r){
        return '<div class="chip"><div class="chip__k">' + r[0] + '</div><div class="chip__v">' + tkwrap(r[1]) + '</div></div>';
      }).join('');

      if (isLift) {
        var pctv = (d.liftValue / cfg.lift.max) * 100;
        q('liftFill').style.height = pctv + '%';
        q('liftMark').style.bottom = pctv + '%';
        q('liftChip').style.bottom = pctv + '%';
        q('liftChip').textContent = d.liftLabel;
      } else {
        var sc = cfg.scale;
        q('scaleVal').innerHTML = tkwrap(d.scaleLabel);
        q('pin').style.left = 'calc(' + ((d.scaleValue - sc.min) / (sc.max - sc.min)) * 100 + '% - 2.5px)';
      }

      var box = q('meters');
      box.innerHTML = '';
      d.meters.forEach(function(m){
        var e = document.createElement('div');
        e.innerHTML = '<div class="meter__top"><span class="label">' + m[0] + '</span><span class="meter__v">' + (m[1] > 0 ? m[1] + '/100' : 'TK') + '</span></div><div class="meter__bar"><div class="meter__fill"></div></div>';
        box.appendChild(e);
        var fill = e.querySelector('.meter__fill');
        requestAnimationFrame(function(){ requestAnimationFrame(function(){ fill.style.width = m[1] + '%'; }); });
      });
    }

    tabs.forEach(function(t){ t.addEventListener('click', function(){ render(parseInt(t.dataset.i, 10), false); }); });
    root.querySelector('.picker').addEventListener('keydown', function(e){
      var i = current, n = tabs.length;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); render((i + 1) % n, true); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); render((i - 1 + n) % n, true); }
      else if (e.key === 'Home') { e.preventDefault(); render(0, true); }
      else if (e.key === 'End') { e.preventDefault(); render(n - 1, true); }
    });
    render(0, false);
    return { replay: function(){ var c = current; current = -1; render(c, false); } };
  }

  var instances = {};
  [].slice.call(document.querySelectorAll('[data-swap]')).forEach(function(root){
    instances[root.dataset.swap] = initSwap(root, SWAPS[root.dataset.swap]);
  });

  /* ============ MODE TOGGLE . wheels vs suspension ============ */
  var modes = [].slice.call(document.querySelectorAll('.mode'));
  function setMode(key, focus){
    modes.forEach(function(m){
      var on = m.dataset.mode === key;
      m.setAttribute('aria-selected', on ? 'true' : 'false');
      m.tabIndex = on ? 0 : -1;
      m.querySelector('.mode__go').textContent = on ? 'Viewing this' : 'Switch to this';
      var box = document.getElementById('box-' + m.dataset.mode);
      box.hidden = !on;
      if (on && instances[m.dataset.mode]) instances[m.dataset.mode].replay();
      if (on && focus) m.focus();
    });
  }
  modes.forEach(function(m){ m.addEventListener('click', function(){ setMode(m.dataset.mode, false); }); });
  document.querySelector('.modes').addEventListener('keydown', function(e){
    var i = modes.findIndex(function(m){ return m.getAttribute('aria-selected') === 'true'; });
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setMode(modes[(i + 1) % modes.length].dataset.mode, true); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); setMode(modes[(i - 1 + modes.length) % modes.length].dataset.mode, true); }
  });

  var el = function(id){ return document.getElementById(id); };

  /* ============ FINANCING MODAL ============ */
  var finModal = el('finModal'), finOpen = el('finOpen'), lastFocus = null;
  function openFin(){
    lastFocus = document.activeElement;
    finModal.classList.add('on');
    finModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var x = finModal.querySelector('.modal__x');
    if (x) x.focus();
  }
  function closeFin(){
    finModal.classList.remove('on');
    finModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  if (finOpen) finOpen.addEventListener('click', openFin);
  [].slice.call(finModal.querySelectorAll('[data-close]')).forEach(function(n){
    n.addEventListener('click', closeFin);
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && finModal.classList.contains('on')) closeFin();
  });

  /* ============ TOOL CHECKLIST ============ */
  var tis = [].slice.call(document.querySelectorAll('.ti'));
  function syncClip(){
    var n = tis.filter(function(t){ return t.getAttribute('aria-pressed') === 'true'; }).length;
    el('clipN').textContent = n;
    el('clipFill').style.width = (n / tis.length) * 100 + '%';
    el('clipDone').classList.toggle('on', n === tis.length);
  }
  tis.forEach(function(t){
    t.addEventListener('click', function(){
      t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      syncClip();
    });
  });
  el('clipReset').addEventListener('click', function(){
    tis.forEach(function(t){ t.setAttribute('aria-pressed', 'false'); });
    syncClip();
  });
  syncClip();

  /* ============ PARTS CATEGORY TABS ============ */
  var ptabs = [].slice.call(document.querySelectorAll('.ptab'));
  var pcards = [].slice.call(document.querySelectorAll('.pcard'));
  function matches(cat, c){
    var k = c.dataset.cat;
    if (cat === 'all') return k !== 'pkg';
    if (cat === 'wt') return k === 'pkg' || k === 'wheel' || k === 'tire';
    return k === cat;
  }

  function setCat(cat){
    pcards.forEach(function(c){
      var show = matches(cat, c);
      c.style.display = show ? '' : 'none';
      if (show) c.classList.add('in');
    });
  }

  ptabs.forEach(function(t){
    t.addEventListener('click', function(){
      ptabs.forEach(function(x){ x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
      setCat(t.dataset.cat);
    });
  });
  setCat('all');

  /* ============ FAQ ACCORDION ============ */
  var qbtns = [].slice.call(document.querySelectorAll('.q__btn'));
  qbtns.forEach(function(btn){
    var body = btn.nextElementSibling;
    btn.addEventListener('click', function(){
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      body.style.maxHeight = open ? '0px' : body.scrollHeight + 'px';
    });
  });
  window.addEventListener('resize', function(){
    qbtns.forEach(function(btn){
      if (btn.getAttribute('aria-expanded') === 'true') btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px';
    });
  });

  /* ============ NAV AND JUMP SCROLLSPY + PROGRESS ============ */
  var navLinks = [].slice.call(document.querySelectorAll('.nav__links a'));
  var jumpLinks = [].slice.call(document.querySelectorAll('.jump__in a'));
  var secs = navLinks.map(function(a){ return document.querySelector(a.getAttribute('href')); });
  var bar = el('progress');
  function onScroll(){
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    var mark = y + 140, best = -1;
    secs.forEach(function(sec, n){ if (sec && sec.offsetTop <= mark) best = n; });
    navLinks.forEach(function(a, n){ a.classList.toggle('on', n === best); });
    jumpLinks.forEach(function(a, n){ a.classList.toggle('on', n === best); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ============ REVEAL ============ */
  var rv = [].slice.call(document.querySelectorAll('.rv'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -70px 0px', threshold: 0.05 });
    rv.forEach(function(n){ io.observe(n); });
  } else {
    rv.forEach(function(n){ n.classList.add('in'); });
  }
})();
