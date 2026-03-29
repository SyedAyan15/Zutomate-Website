
    (function () {
      const track = document.getElementById('ttrack');
      const dotsEl = document.getElementById('tdots');
      const origCards = Array.from(track.querySelectorAll('.tcard'));
      const total = origCards.length;
      const perView = 2;
      const steps = total;
      let cur = 0;
      let isTransitioning = false;

      // Clone first 2 and last 2 cards for seamless loop
      const clonesBefore = origCards.slice(-perView).map(c => { const cl = c.cloneNode(true); track.insertBefore(cl, track.firstChild); return cl; });
      const clonesAfter = origCards.slice(0, perView).map(c => { const cl = c.cloneNode(true); track.appendChild(cl); return cl; });

      const allCards = Array.from(track.querySelectorAll('.tcard'));

      function getCardW() {
        return allCards[0].getBoundingClientRect().width + 20;
      }

      // Start at first real card (index = perView because of clones before)
      let pos = perView;

      function setPos(p, animate) {
        track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' : 'none';
        track.style.transform = 'translateX(' + (-(p * getCardW())) + 'px)';
      }

      setPos(pos, false);

      // Build dots
      for (let i = 0; i < total; i++) {
        const d = document.createElement('div');
        d.className = 'tslider-dot' + (i === 0 ? ' active' : '');
        d.onclick = () => goTo(i);
        dotsEl.appendChild(d);
      }

      function updateDots() {
        dotsEl.querySelectorAll('.tslider-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
      }

      function goTo(idx) {
        cur = ((idx % total) + total) % total;
        pos = cur + perView;
        setPos(pos, true);
        updateDots();
      }

      // After transition ends, silently jump if on a clone
      track.addEventListener('transitionend', () => {
        if (pos >= total + perView) {
          pos = perView;
          setPos(pos, false);
        } else if (pos < perView) {
          pos = total + perView - 1;
          setPos(pos, false);
        }
        isTransitioning = false;
      });

      function next() {
        if (isTransitioning) return;
        isTransitioning = true;
        cur = (cur + 1) % total;
        pos++;
        setPos(pos, true);
        updateDots();
      }

      function prev() {
        if (isTransitioning) return;
        isTransitioning = true;
        cur = (cur - 1 + total) % total;
        pos--;
        setPos(pos, true);
        updateDots();
      }

      document.getElementById('tprev').onclick = prev;
      document.getElementById('tnext').onclick = next;

      allCards.forEach((card) => {
        card.style.cursor = 'pointer';
        card.onclick = () => next();
      });

      window.addEventListener('resize', () => setPos(pos, false));
    })();
  

(function() {
  var rows = document.querySelectorAll('[data-plan-row]');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var idx = Array.from(rows).indexOf(entry.target);
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, idx * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  rows.forEach(function(r) { obs.observe(r); });
})();


    const c = document.getElementById('dot-canvas');
    const x = c.getContext('2d');
    const GAP = 48;
    let W, H, ox = 0, oy = 0;

    function resize() {
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function frame() {
      x.clearRect(0, 0, W, H);
      ox = (ox + 0.10) % GAP;
      oy = (oy + 0.10) % GAP;

      /* horizontal lines */
      for (let row = -GAP; row < H + GAP; row += GAP) {
        const py = row + oy;
        const dy = (py - H / 2) / (H / 2);
        const alpha = Math.max(0, Math.min(0.10, (Math.abs(dy) - 0.15) * 0.18));
        x.beginPath();
        x.moveTo(0, py);
        x.lineTo(W, py);
        x.strokeStyle = `rgba(255,255,255,${alpha})`;
        x.lineWidth = 0.6;
        x.stroke();
      }

      /* vertical lines */
      for (let col = -GAP; col < W + GAP; col += GAP) {
        const px = col + ox;
        const dx = (px - W / 2) / (W / 2);
        const alpha = Math.max(0, Math.min(0.10, (Math.abs(dx) - 0.15) * 0.18));
        x.beginPath();
        x.moveTo(px, 0);
        x.lineTo(px, H);
        x.strokeStyle = `rgba(255,255,255,${alpha})`;
        x.lineWidth = 0.6;
        x.stroke();
      }

      requestAnimationFrame(frame);
    }
    frame();
  

    // ── HOVER ORANGE HIGHLIGHT ──
    (function () {
      const cards = document.querySelectorAll('.why-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          cards.forEach(c => c.classList.remove('why-active'));
          card.classList.add('why-active');
        });
        card.addEventListener('mouseleave', () => {
          card.classList.remove('why-active');
        });
      });
    })();
  

    const nav = document.querySelector('nav');
    nav.classList.add('nav-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.remove('nav-top');
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
        nav.classList.add('nav-top');
      }
    });
  

    (function () {

      // ── WORD-BY-WORD REVEAL (left to right, one word at a time) ──
      function splitIntoWordSpans(el) {
        // Recursively walk the element, wrapping text node words in spans
        Array.from(el.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            const parts = node.textContent.split(/(\s+)/);
            const frag = document.createDocumentFragment();
            parts.forEach(part => {
              if (/^\s+$/.test(part)) {
                frag.appendChild(document.createTextNode(part));
              } else {
                const span = document.createElement('span');
                span.className = 'word-hidden';
                span.textContent = part;
                frag.appendChild(span);
              }
            });
            node.parentNode.replaceChild(frag, node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            splitIntoWordSpans(node);
          }
        });
      }

      // Apply to all h2s and the why-heading
      document.querySelectorAll('h2, .services-cta h2').forEach(el => {
        splitIntoWordSpans(el);
      });

      // Observe each heading — when it enters viewport, fire words one by one
      const headingObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const words = entry.target.querySelectorAll('.word-hidden');
          if (entry.isIntersecting) {
            words.forEach((word, i) => {
              setTimeout(() => {
                word.classList.add('word-show');
              }, i * 60);
            });
            headingObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      document.querySelectorAll('h2, .services-cta h2').forEach(el => {
        headingObserver.observe(el);
      });

      // ── FADE-UP for other elements ──
      const fadeSelectors = [
        '.badge', '.hero-sub', '.hero-actions',
        '.services-cta p', '.services-cta a',
        '.why-badge', '.why-sub', '.why-card',
      ];

      fadeSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach((el, i) => {
          el.classList.add('reveal');
          if (sel === '.why-card') el.style.transitionDelay = (i * 0.08) + 's';
        });
      });

      const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach(el => fadeObserver.observe(el));

    })();
  

    /* ── PER-ROW FLOW ANIMATIONS (top → bottom, replay on scroll) ── */
    (function () {

      // Tolerance in px — elements within this vertical band = same "level"
      var BAND = 38;
      // Delay between each level revealing (ms)
      var LEVEL_DELAY = 180;
      // Duration of each level fade-in (ms)
      var LEVEL_DUR = 400;

      function getEffectiveY(el) {
        // Get the minimum y of any rect/line/text/image/circle/path in element
        var tag = el.tagName.toLowerCase();
        var y = parseFloat(el.getAttribute('y') || el.getAttribute('y1') || '0');
        // For <path> fall back to bounding box
        if (isNaN(y) || y === 0) {
          try { y = el.getBBox().y; } catch (e) { y = 0; }
        }
        return y;
      }

      function setupCol(col) {
        var svg = col.querySelector('svg');
        if (!svg || col.dataset.flowReady) return;
        col.dataset.flowReady = '1';

        // Collect all direct SVG children
        var children = Array.from(svg.childNodes).filter(function (n) {
          return n.nodeType === 1; // element nodes only
        });

        if (!children.length) return;

        // Sort by effective Y
        children.sort(function (a, b) {
          return getEffectiveY(a) - getEffectiveY(b);
        });

        // Group into levels by Y-band
        var levels = [];
        children.forEach(function (el) {
          var y = getEffectiveY(el);
          var placed = false;
          for (var i = 0; i < levels.length; i++) {
            if (Math.abs(y - levels[i].baseY) <= BAND) {
              levels[i].els.push(el);
              placed = true;
              break;
            }
          }
          if (!placed) {
            levels.push({ baseY: y, els: [el] });
          }
        });

        // Wrap each level in a <g> and set initial opacity
        levels.forEach(function (lvl, i) {
          var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          g.style.opacity = '0';
          g.style.transform = 'translateY(-20px)';
          g.style.transition = 'opacity ' + LEVEL_DUR + 'ms ease, transform ' + LEVEL_DUR + 'ms ease';
          g.dataset.levelIdx = i;
          // Move all elements of this level into the group
          lvl.els.forEach(function (el) {
            svg.removeChild(el);
            g.appendChild(el);
          });
          svg.appendChild(g);
        });

        col._flowLevels = levels.length;
      }

      function revealCol(col) {
        var svg = col.querySelector('svg');
        if (!svg) return;
        var groups = svg.querySelectorAll('g[data-level-idx]');
        groups.forEach(function (g, i) {
          setTimeout(function () {
            g.style.opacity = '1';
            g.style.transform = 'translateY(0)';
          }, i * LEVEL_DELAY);
        });
      }

      function hideCol(col) {
        var svg = col.querySelector('svg');
        if (!svg) return;
        var groups = svg.querySelectorAll('g[data-level-idx]');
        groups.forEach(function (g) {
          g.style.transition = 'none';
          g.style.opacity = '0';
          g.style.transform = 'translateY(-20px)';
          // Re-enable transition after reset
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              g.style.transition = 'opacity ' + LEVEL_DUR + 'ms ease, transform ' + LEVEL_DUR + 'ms ease';
            });
          });
        });
      }

      // Setup all cols
      var cols = document.querySelectorAll('.gtm-col');
      cols.forEach(setupCol);

      // Observe each column — trigger only once when it enters view
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealCol(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      cols.forEach(function (col) {
        observer.observe(col);
      });

    })();
  

    (function () {
      var items = document.querySelectorAll('.faq-item');
      items.forEach(function (item) {
        var btn = item.querySelector('.faq-q');
        btn.addEventListener('click', function () {
          var isOpen = item.classList.contains('open');
          // Close all
          items.forEach(function (i) {
            i.classList.remove('open');
            i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          });
          // Toggle clicked
          if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      });
    })();

    // Footer Form Submission -> Save Data & Instantly Redirect to Calendly
    // Footer Form Submission -> Save Data & Instantly Redirect to Calendly
    var ctaForm = document.getElementById('footer-cta-form');
    if (ctaForm) {
      ctaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var email = document.getElementById('cta-email').value;
        var name = document.getElementById('cta-name').value;
        
        // 1. Send data to your backend Webhook silently in background using GET
        var WEBHOOK_URL = 'https://n8n.srv1426253.hstgr.cloud/webhook/c51d9bb0-50d4-4fe9-996b-c6f4f6ecdaa9'; 
        if (WEBHOOK_URL) {
          var queryParams = "?email=" + encodeURIComponent(email) + "&full_name=" + encodeURIComponent(name) + "&source=Footer+CTA";
          
          // Send a GET request because your n8n node is configured as a GET Webhook
          fetch(WEBHOOK_URL + queryParams, {
            method: 'GET',
            keepalive: true
          }).catch(function(err) { console.error("Webhook failed:", err); });
        }

        // 2. Instantly redirect the user to Calendly
        var calendlyUrl = "https://calendly.com/zutomate/30min?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
        window.location.href = calendlyUrl;
      });
    }
    
    // Hero Form Submission -> Save Data & Instantly Redirect to Calendly
    var heroForm = document.getElementById('hero-cta-form');
    if (heroForm) {
      heroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var email = document.getElementById('hero-email').value;
        var company = document.getElementById('hero-company').value;
        
        // 1. Send data to your backend Webhook silently in background using GET
        var WEBHOOK_URL = 'https://n8n.srv1426253.hstgr.cloud/webhook/c51d9bb0-50d4-4fe9-996b-c6f4f6ecdaa9'; 
        if (WEBHOOK_URL) {
          var queryParams = "?email=" + encodeURIComponent(email) + "&company_name=" + encodeURIComponent(company) + "&source=Hero+CTA";
          
          // Send a GET request because your n8n node is configured as a GET Webhook
          fetch(WEBHOOK_URL + queryParams, {
            method: 'GET',
            keepalive: true
          }).catch(function(err) { console.error("Webhook failed:", err); });
        }

        // 2. Instantly redirect the user to Calendly
        var calendlyUrl = "https://calendly.com/zutomate/30min?email=" + encodeURIComponent(email) + "&a1=" + encodeURIComponent(company);
        window.location.href = calendlyUrl;
      });
    }
  
    // ── MOBILE MENU TOGGLE ──
    (function () {
      const menuBtn = document.querySelector('.mobile-menu-btn');
      const navLinks = document.querySelector('.nav-links');
      const links = document.querySelectorAll('.nav-links a');

      if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
          menuBtn.classList.toggle('active');
          navLinks.classList.toggle('active');
          document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        links.forEach(link => {
          link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
          });
        });
      }
    })();

    // ── NAVIGATION ACTIVE STATE ON SCROLL ──
    (function () {
      const sections = [
        { id: 'home', linkText: 'Home' },
        { id: 'services', linkText: 'Services' },
        { id: 'how-we-work', linkText: 'Process' }
      ];

      const navLinks = document.querySelectorAll('.nav-links a');

      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Adjust as needed to capture the active section centrally
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const targetSection = sections.find(s => s.id === id);

            if (targetSection) {
              navLinks.forEach(link => {
                if (link.textContent.trim() === targetSection.linkText) {
                  link.classList.add('active');
                } else {
                  link.classList.remove('active');
                }
              });
            }
          }
        });
      }, observerOptions);

      sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });
    })();

  