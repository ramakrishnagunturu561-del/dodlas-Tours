/**
 * Dodla Tours & Travels - Shared Pilgrimage Itinerary Square Slider
 * Presentation-style 1:1 Square Card Slider (One Day at a Time)
 */
(function() {
  'use strict';

  function initSlider() {
    var stage = document.querySelector('.itinerary-slide-stage');
    if (!stage) return;

    var cards = stage.querySelectorAll('.itinerary-slide-card');
    if (!cards || cards.length === 0) return;

    var totalDays = cards.length;
    var currentIndex = 0;

    var prevBtn = document.getElementById('slidePrevBtn');
    var nextBtn = document.getElementById('slideNextBtn');
    var counterBadge = document.getElementById('slideCounterBadge');
    var navStatus = document.getElementById('slideNavStatus');
    var progressFill = document.getElementById('slideProgressFill');
    var viewport = document.getElementById('itinerarySlideViewport');

    // Find initially active card if any
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains('active')) {
        currentIndex = i;
        break;
      }
    }

    function isTelugu() {
      return document.documentElement.lang === 'te' || 
             (window.dodlaLang && window.dodlaLang.getCurrentLang && window.dodlaLang.getCurrentLang() === 'te');
    }

    function updateUI(direction) {
      var te = isTelugu();

      // Show only active card
      for (var j = 0; j < cards.length; j++) {
        cards[j].classList.remove('active', 'anim-slide-next', 'anim-slide-prev');
        if (j === currentIndex) {
          cards[j].classList.add('active');
          if (direction === 'next') {
            cards[j].classList.add('anim-slide-next');
          } else if (direction === 'prev') {
            cards[j].classList.add('anim-slide-prev');
          }
        }
      }

      // Progress bar fill
      var pct = Math.round(((currentIndex + 1) / totalDays) * 100);
      if (progressFill) {
        progressFill.style.width = pct + '%';
      }

      // Counter badges
      var currentDayNum = currentIndex + 1;
      if (counterBadge) {
        if (te) {
          counterBadge.innerHTML = 'రోజు <span>' + currentDayNum + '</span> / ' + totalDays;
        } else {
          counterBadge.innerHTML = 'DAY <span>' + currentDayNum + '</span> OF ' + totalDays;
        }
      }

      if (navStatus) {
        if (te) {
          navStatus.textContent = currentDayNum + 'వ రోజు (మొత్తం ' + totalDays + ' రోజులు)';
        } else {
          navStatus.textContent = 'Day ' + currentDayNum + ' of ' + totalDays;
        }
      }

      // Buttons state
      if (prevBtn) {
        prevBtn.disabled = (currentIndex === 0);
        var prevSpan = prevBtn.querySelector('span');
        if (prevSpan) {
          prevSpan.textContent = te ? 'మునుపటి రోజు' : 'Previous Day';
        }
      }

      if (nextBtn) {
        var isLast = (currentIndex === totalDays - 1);
        var nextSpan = nextBtn.querySelector('span');
        if (isLast) {
          if (nextSpan) nextSpan.textContent = te ? 'మొదటి నుండి ↺' : 'Restart ↺';
        } else {
          if (nextSpan) nextSpan.textContent = te ? 'తర్వాతి రోజు' : 'Next Day';
        }
      }

      // Update click hint text inside the active card
      var activeCard = cards[currentIndex];
      if (activeCard) {
        var hint = activeCard.querySelector('.slide-click-hint-text');
        if (hint) {
          if (currentIndex < totalDays - 1) {
            hint.textContent = te ? ('తర్వాతి రోజు ' + (currentIndex + 2) + ' కోసం క్లిక్ చేయండి →') : ('Click card for Day ' + (currentIndex + 2) + ' →');
          } else {
            hint.textContent = te ? 'మొదటి రోజుకి వెళ్లండి ↺' : 'View from Day 1 ↺';
          }
        }
      }
    }

    function goTo(idx, dir) {
      if (idx < 0) idx = 0;
      if (idx >= totalDays) idx = 0; // restart
      currentIndex = idx;
      updateUI(dir || 'next');
    }

    function next() {
      if (currentIndex < totalDays - 1) {
        goTo(currentIndex + 1, 'next');
      } else {
        goTo(0, 'next');
      }
    }

    function prev() {
      if (currentIndex > 0) {
        goTo(currentIndex - 1, 'prev');
      }
    }

    // Attach button events
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        prev();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        next();
      });
    }

    // Attach card click to advance (avoid accidental clicks on buttons/links)
    if (viewport) {
      viewport.addEventListener('click', function(e) {
        if (e.target.closest('a') || e.target.closest('button')) {
          return;
        }
        next();
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      var activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }
      if (e.key === 'ArrowRight') {
        next();
      } else if (e.key === 'ArrowLeft') {
        prev();
      }
    });

    // Language change listener
    window.addEventListener('dodla_lang_change', function() {
      updateUI('init');
    });

    // Initial render
    updateUI('init');

    // Expose global controller
    window.pilgrimageSlider = {
      next: next,
      prev: prev,
      goTo: goTo,
      getCurrentIndex: function() { return currentIndex; }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
  } else {
    initSlider();
  }
})();
