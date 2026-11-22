/* ==========================================================================
   Dodla's Tours & Travels - Universal Interactive Day-by-Day Itinerary Navigator
   Supports: Fixed Departure Detail pages, Holiday Tour Detail pages, and Pilgrimage pages
   Theme: Deep Forest Green (#061F16), Antique Gold (#D4AF37), Ivory/Cream (#FAF6F0)
   Features:
   - Exactly ONE day displayed at a time
   - Sequential Previous Day / Next Day navigation
   - Clickable Day stepper ribbon with smooth scrolling
   - Visual progress bar + "DAY X OF Y" / "రోజు X / Y" badge
   - Disabled Previous on Day 1
   - Completion state ("Journey Complete • Divine Blessings") on final day
   - Smooth slide-fade transitions
   - Bilingual (English & Telugu) aware
   - Zero-dependency Vanilla JavaScript
   ========================================================================== */

(function() {
  'use strict';

  // 1. Inject Bulletproof Navigator CSS into <head>
  function injectNavigatorStyles() {
    if (document.getElementById('dodla-itinerary-nav-styles')) return;
    var style = document.createElement('style');
    style.id = 'dodla-itinerary-nav-styles';
    style.textContent = [
      '.itinerary-navigator-section { margin-top: 24px; }',
      '.itinerary-progress-badge {',
      '  display: inline-flex; align-items: center; gap: 8px;',
      '  background: linear-gradient(135deg, #061F16 0%, #0A2E20 100%);',
      '  color: #D4AF37; border-radius: 50px; padding: 6px 18px;',
      '  font-size: 12px; font-weight: 700; letter-spacing: 0.1em;',
      '  border: 1.5px solid rgba(212, 175, 55, 0.55);',
      '  box-shadow: 0 4px 14px rgba(6, 31, 22, 0.25);',
      '}',
      '.itinerary-progress-track {',
      '  width: 100%; height: 6px; background: rgba(10, 46, 32, 0.12);',
      '  border-radius: 10px; margin: 14px 0 18px 0; overflow: hidden; position: relative;',
      '}',
      '.itinerary-progress-fill {',
      '  height: 100%; background: linear-gradient(90deg, #C5A059 0%, #D4AF37 100%);',
      '  border-radius: 10px; transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);',
      '}',
      '.itinerary-stepper-wrap {',
      '  overflow-x: auto; padding: 6px 2px 10px 2px; margin-bottom: 22px;',
      '  scrollbar-width: thin; scrollbar-color: rgba(212, 175, 55, 0.4) transparent;',
      '}',
      '.itinerary-stepper-wrap::-webkit-scrollbar { height: 5px; }',
      '.itinerary-stepper-wrap::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.4); border-radius: 4px; }',
      '.itinerary-stepper {',
      '  display: flex; gap: 8px; min-width: max-content; align-items: center;',
      '}',
      '.stepper-day-btn {',
      '  display: flex; flex-direction: column; align-items: center; justify-content: center;',
      '  gap: 2px; padding: 8px 14px; border-radius: 12px;',
      '  border: 1.5px solid rgba(197, 160, 89, 0.35); background: #FFFFFF;',
      '  cursor: pointer; transition: all 0.22s ease; min-width: 58px;',
      '}',
      '.stepper-day-btn:hover {',
      '  background: rgba(212, 175, 55, 0.08); border-color: rgba(212, 175, 55, 0.65);',
      '}',
      '.stepper-day-btn.active {',
      '  background: linear-gradient(135deg, #061F16 0%, #0A2E20 100%) !important;',
      '  border-color: #D4AF37 !important;',
      '  box-shadow: 0 4px 14px rgba(6, 31, 22, 0.35) !important;',
      '}',
      '.stepper-day-num {',
      '  font-size: 16px; font-weight: 800; color: #2A4A3B; line-height: 1;',
      '  font-family: "Cinzel", Georgia, serif;',
      '}',
      '.stepper-day-btn.active .stepper-day-num { color: #D4AF37 !important; }',
      '.stepper-day-lbl {',
      '  font-size: 10px; font-weight: 600; color: #6B8F7E; letter-spacing: 0.06em; text-transform: uppercase;',
      '}',
      '.stepper-day-btn.active .stepper-day-lbl { color: rgba(212, 175, 55, 0.85) !important; }',
      '.itinerary-card-display {',
      '  position: relative; min-height: 220px;',
      '}',
      '/* CRITICAL: ONLY ONE DAY SHOWN AT A TIME */',
      '.itinerary-day-slide {',
      '  display: none !important;',
      '  opacity: 0;',
      '  transform: translateY(10px);',
      '  transition: opacity 0.3s ease, transform 0.3s ease;',
      '}',
      '.itinerary-day-slide.active {',
      '  display: block !important;',
      '  opacity: 1;',
      '  transform: translateY(0);',
      '  animation: dodlaSlideFade 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;',
      '}',
      '@keyframes dodlaSlideFade {',
      '  from { opacity: 0; transform: translateY(12px); }',
      '  to   { opacity: 1; transform: translateY(0); }',
      '}',
      '.itinerary-nav-footer {',
      '  display: flex; align-items: center; gap: 14px; margin-top: 24px;',
      '  padding-top: 18px; border-top: 1px solid rgba(197, 160, 89, 0.2);',
      '  flex-wrap: wrap;',
      '}',
      '.btn-itinerary-nav {',
      '  display: inline-flex; align-items: center; gap: 8px;',
      '  padding: 10px 22px; border-radius: 50px;',
      '  border: 1.5px solid rgba(10, 46, 32, 0.25); background: #FFFFFF;',
      '  color: #0A2E20; font-size: 13.5px; font-weight: 600;',
      '  cursor: pointer; transition: all 0.22s ease;',
      '  box-shadow: 0 2px 8px rgba(0,0,0,0.05);',
      '}',
      '.btn-itinerary-nav:hover:not(:disabled) {',
      '  background: #0A2E20; color: #D4AF37; border-color: #0A2E20;',
      '  box-shadow: 0 4px 14px rgba(6, 31, 22, 0.25);',
      '}',
      '.btn-itinerary-nav:disabled {',
      '  opacity: 0.35; cursor: not-allowed; pointer-events: none;',
      '}',
      '.btn-itinerary-nav.next {',
      '  margin-left: auto;',
      '  background: linear-gradient(135deg, #0A2E20 0%, #061F16 100%);',
      '  color: #D4AF37; border-color: #D4AF37;',
      '}',
      '.btn-itinerary-nav.next:hover:not(:disabled) {',
      '  background: #D4AF37; color: #061F16; border-color: #D4AF37;',
      '}',
      '.itinerary-completion-box {',
      '  display: none; align-items: center; gap: 8px;',
      '  background: linear-gradient(135deg, #D4AF37 0%, #C5A059 100%);',
      '  color: #061F16; padding: 10px 22px; border-radius: 50px;',
      '  font-weight: 700; font-size: 13.5px; margin-left: auto;',
      '  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.4);',
      '}',
      '@media (max-width: 600px) {',
      '  .itinerary-nav-footer { flex-direction: column; align-items: stretch; gap: 10px; }',
      '  .btn-itinerary-nav.next { margin-left: 0; justify-content: center; }',
      '  .btn-itinerary-nav.prev { justify-content: center; }',
      '  .itinerary-completion-box { justify-content: center; margin-left: 0; }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // 2. Initialize navigator on a given container
  function setupNavigator(containerEl, slideElements, options) {
    if (!slideElements || slideElements.length === 0) return;
    var totalDays = slideElements.length;
    var currentDay = 0;

    // Add .itinerary-day-slide class to all slide elements
    slideElements.forEach(function(el, i) {
      el.classList.add('itinerary-day-slide');
      el.setAttribute('data-day-index', i);
      el.setAttribute('role', 'tabpanel');
      if (i === 0) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Check if progress badge exists; if not, create header chrome
    var progressBadge = containerEl.querySelector('#itineraryProgressBadge');
    var progressText = containerEl.querySelector('#itineraryProgressText');
    var progressFill = containerEl.querySelector('#itineraryProgressFill');
    var stepperWrap = containerEl.querySelector('#itineraryStepper');
    var prevBtn = containerEl.querySelector('#itinPrevBtn');
    var nextBtn = containerEl.querySelector('#itinNextBtn');
    var completionBox = containerEl.querySelector('#itinCompletionBox');

    // Create Stepper Buttons if not already in DOM
    if (!stepperWrap) {
      var headerWrap = document.createElement('div');
      headerWrap.className = 'section-header-wrap';
      headerWrap.innerHTML = [
        '<div>',
        '  <h2 class="section-title">Day-Wise Sacred Itinerary</h2>',
        '  <div class="section-subtext">Interactive step-by-step spiritual journey timeline</div>',
        '</div>',
        '<div class="itinerary-progress-badge" id="itineraryProgressBadge">',
        '  <span class="progress-step-text" id="itineraryProgressText">DAY 1 OF ' + totalDays + '</span>',
        '</div>'
      ].join('');

      var track = document.createElement('div');
      track.className = 'itinerary-progress-track';
      track.innerHTML = '<div class="itinerary-progress-fill" id="itineraryProgressFill" style="width: ' + ((1 / totalDays) * 100) + '%;"></div>';

      var ribbonWrap = document.createElement('div');
      ribbonWrap.className = 'itinerary-stepper-wrap';
      stepperWrap = document.createElement('div');
      stepperWrap.className = 'itinerary-stepper';
      stepperWrap.id = 'itineraryStepper';
      stepperWrap.setAttribute('role', 'tablist');

      for (var d = 0; d < totalDays; d++) {
        var numStr = (d + 1) < 10 ? '0' + (d + 1) : '' + (d + 1);
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'stepper-day-btn' + (d === 0 ? ' active' : '');
        btn.setAttribute('data-day-index', d);
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', d === 0 ? 'true' : 'false');
        btn.innerHTML = '<span class="stepper-day-num">' + numStr + '</span><span class="stepper-day-lbl">Day ' + (d + 1) + '</span>';
        stepperWrap.appendChild(btn);
      }
      ribbonWrap.appendChild(stepperWrap);

      // Insert before the slides container
      var firstSlide = slideElements[0];
      firstSlide.parentNode.insertBefore(headerWrap, firstSlide);
      firstSlide.parentNode.insertBefore(track, firstSlide);
      firstSlide.parentNode.insertBefore(ribbonWrap, firstSlide);

      progressBadge = headerWrap.querySelector('#itineraryProgressBadge');
      progressText = headerWrap.querySelector('#itineraryProgressText');
      progressFill = track.querySelector('#itineraryProgressFill');
    }

    // Create Footer Controls if not present
    if (!prevBtn || !nextBtn) {
      var footer = document.createElement('div');
      footer.className = 'itinerary-nav-footer';
      footer.innerHTML = [
        '<button type="button" class="btn-itinerary-nav prev" id="itinPrevBtn" disabled aria-label="Previous Day">',
        '  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>',
        '  <span>Previous Day</span>',
        '</button>',
        '<button type="button" class="btn-itinerary-nav next" id="itinNextBtn" aria-label="Next Day">',
        '  <span>Next Day</span>',
        '  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>',
        '</button>',
        '<div class="itinerary-completion-box" id="itinCompletionBox" style="display: none;">',
        '  <svg width="18" height="18" viewBox="0 0 24 24" fill="#061F16"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
        '  <span>Journey Complete &bull; Divine Blessings</span>',
        '</div>'
      ].join('');

      var lastSlide = slideElements[slideElements.length - 1];
      lastSlide.parentNode.insertBefore(footer, lastSlide.nextSibling);

      prevBtn = footer.querySelector('#itinPrevBtn');
      nextBtn = footer.querySelector('#itinNextBtn');
      completionBox = footer.querySelector('#itinCompletionBox');
    }

    // Stepper buttons list
    var stepperBtns = containerEl.querySelectorAll('#itineraryStepper .stepper-day-btn');

    function updateDay(index) {
      if (index < 0 || index >= totalDays) return;
      currentDay = index;

      // 1. Show only current day slide, hide all others
      slideElements.forEach(function(slide, i) {
        var isCurrent = (i === currentDay);
        slide.classList.toggle('active', isCurrent);
      });

      // 2. Update stepper buttons active state
      stepperBtns.forEach(function(btn, i) {
        var isCurrent = (i === currentDay);
        btn.classList.toggle('active', isCurrent);
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        if (isCurrent && typeof btn.scrollIntoView === 'function') {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });

      // 3. Update Progress Badge & Track
      var isTe = (document.documentElement.lang === 'te' || document.body.classList.contains('dodla-lang-te'));
      if (progressText) {
        progressText.textContent = isTe
          ? ('రోజు ' + (currentDay + 1) + ' / ' + totalDays)
          : ('DAY ' + (currentDay + 1) + ' OF ' + totalDays);
      }
      if (progressFill) {
        progressFill.style.width = (((currentDay + 1) / totalDays) * 100) + '%';
      }

      // 4. Update Previous / Next / Completion state
      if (prevBtn) {
        prevBtn.disabled = (currentDay === 0);
      }
      if (currentDay === totalDays - 1) {
        if (nextBtn) nextBtn.style.display = 'none';
        if (completionBox) completionBox.style.display = 'inline-flex';
      } else {
        if (nextBtn) nextBtn.style.display = 'inline-flex';
        if (completionBox) completionBox.style.display = 'none';
      }
    }

    // Attach click events to stepper buttons
    stepperBtns.forEach(function(btn, i) {
      btn.onclick = function(e) {
        e.preventDefault();
        updateDay(i);
      };
    });

    if (prevBtn) {
      prevBtn.onclick = function(e) {
        e.preventDefault();
        updateDay(currentDay - 1);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = function(e) {
        e.preventDefault();
        updateDay(currentDay + 1);
      };
    }

    // Keyboard support
    document.addEventListener('keydown', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') updateDay(currentDay + 1);
      if (e.key === 'ArrowLeft') updateDay(currentDay - 1);
    });

    // Initial activation of Day 1
    updateDay(0);
  }

  // 3. Auto-Discovery & Initialization
  function autoInitAllItineraries() {
    injectNavigatorStyles();

    // Pattern A: Fixed Departure pages (#itineraryCardDisplay)
    var display = document.getElementById('itineraryCardDisplay');
    if (display) {
      var slides = display.querySelectorAll('.itinerary-day-slide');
      if (slides.length > 0) {
        setupNavigator(display.closest('section') || document.body, Array.from(slides));
        return;
      }
    }

    // Pattern B: Chardham & Pilgrimage pages (cards with Day 1, Day 2 span badges)
    var daySpans = document.querySelectorAll('span');
    var detectedCards = [];
    daySpans.forEach(function(span) {
      var t = (span.textContent || '').trim();
      if (/^Day\s+\d+$/i.test(t)) {
        var card = span.closest('div[style*="border-radius"], div[class*="card"], .timeline-day-card');
        if (card && detectedCards.indexOf(card) === -1) {
          detectedCards.push(card);
        }
      }
    });
    if (detectedCards.length > 1) {
      var parent = detectedCards[0].parentNode;
      setupNavigator(parent.closest('section') || parent, detectedCards);
      return;
    }

    // Pattern C: Holiday Tour Details pages (.reservation-room_item)
    var roomItems = document.querySelectorAll('#itinerary .reservation-room_item, .reservation_content .reservation-room_item');
    if (roomItems.length > 1) {
      var itinPane = document.getElementById('itinerary') || roomItems[0].parentNode;
      setupNavigator(itinPane, Array.from(roomItems));
      return;
    }
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInitAllItineraries);
  } else {
    autoInitAllItineraries();
  }

  // Expose on window for manual invocation
  window.dodlaItineraryNav = {
    init: autoInitAllItineraries
  };
})();
