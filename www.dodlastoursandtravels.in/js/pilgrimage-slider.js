/**
 * Dodla Tours & Travels - Stacked Layered Boxes Itinerary Controller
 * Physical 3D Stacked Deck of Cards (Click to Reveal Sequential Layers)
 * Full Bilingual Support (English & Telugu)
 */
(function() {
  'use strict';

  function initDeck() {
    var stage = document.querySelector('.itinerary-slide-stage');
    if (!stage) return;

    var viewport = stage.querySelector('.itinerary-square-viewport');
    if (!viewport) return;

    var cards = viewport.querySelectorAll('.itinerary-slide-card');
    if (!cards || cards.length === 0) return;

    var totalDays = cards.length;
    var currentIndex = 0;
    var isAnimating = false;

    var prevBtn = document.getElementById('slidePrevBtn');
    var nextBtn = document.getElementById('slideNextBtn');
    var counterBadge = document.getElementById('slideCounterBadge');
    var navStatus = document.getElementById('slideNavStatus');
    var progressFill = document.getElementById('slideProgressFill');
    var trackerHint = stage.querySelector('.tracker-hint-text span');

    function isTelugu() {
      return document.documentElement.lang === 'te' || 
             (window.dodlaLang && window.dodlaLang.getCurrentLang && window.dodlaLang.getCurrentLang() === 'te');
    }

    /**
     * Apply stacked layered classes and transforms to all cards
     */
    function renderStack(direction) {
      var te = isTelugu();

      // Update tracker hint text above deck
      if (trackerHint) {
        trackerHint.textContent = te 
          ? 'తరువాతి పొర చూడటానికి కార్డుపై క్లిక్ చేయండి' 
          : 'Click card to reveal next layer';
      }

      for (var i = 0; i < totalDays; i++) {
        var card = cards[i];
        var diff = i - currentIndex;

        // Clean previous states
        card.classList.remove(
          'is-front', 'is-layer-1', 'is-layer-2', 'is-layer-3', 
          'is-layer-deep', 'is-discarded', 'anim-peel-off', 'anim-return-on'
        );

        if (diff < 0) {
          // Cards already viewed and peeled away
          card.classList.add('is-discarded');
        } else if (diff === 0) {
          // Top / Front Active Card
          card.classList.add('is-front');
          card.setAttribute('aria-hidden', 'false');
          card.setAttribute('tabindex', '0');

          // Add peel animation if coming from previous
          if (direction === 'prev') {
            card.classList.add('anim-return-on');
          }
        } else if (diff === 1) {
          // Layer 1: Directly behind the front card (tight 3px offset)
          card.classList.add('is-layer-1');
          card.setAttribute('aria-hidden', 'true');
          card.removeAttribute('tabindex');
        } else if (diff === 2) {
          // Layer 2: Sitting behind Layer 1 (tight 6px offset)
          card.classList.add('is-layer-2');
          card.setAttribute('aria-hidden', 'true');
          card.removeAttribute('tabindex');
        } else if (diff === 3) {
          // Layer 3: Sitting behind Layer 2 (tight 9px offset)
          card.classList.add('is-layer-3');
          card.setAttribute('aria-hidden', 'true');
          card.removeAttribute('tabindex');
        } else {
          // Deeper in the deck
          card.classList.add('is-layer-deep');
          card.setAttribute('aria-hidden', 'true');
          card.removeAttribute('tabindex');
        }

        // Update click prompts inside the card
        var clickHint = card.querySelector('.slide-click-hint-text');
        var promptText = card.querySelector('.slide-card-prompt');

        if (i < totalDays - 1) {
          var nextDayNum = i + 2;
          if (clickHint) {
            clickHint.textContent = te 
              ? ('తరువాతి రోజు ' + nextDayNum + ' కోసం క్లిక్ చేయండి →') 
              : ('Click card for Day ' + nextDayNum + ' →');
          }
          if (promptText) {
            promptText.textContent = te ? 'తరువాతి పొర →' : 'Next Layer →';
          }
        } else {
          // Final Day
          if (clickHint) {
            clickHint.textContent = te 
              ? 'మొదటి నుండి చూడండి ↺' 
              : 'Restart Deck from Day 1 ↺';
          }
          if (promptText) {
            promptText.textContent = te ? 'మొదటి నుండి ↺' : 'Restart ↺';
          }
        }

        // Translate card micro-tags (e.g. Sacred Day N, Satvik South Indian Dining)
        var tags = card.querySelectorAll('.slide-tag');
        tags.forEach(function(tagEl) {
          var tagText = tagEl.textContent.trim();
          if (te) {
            if (tagText.indexOf('Sacred Day') !== -1) {
              var dayMatch = tagText.match(/\d+/);
              tagEl.textContent = '✦ పవిత్ర దినం ' + (dayMatch ? dayMatch[0] : (i + 1));
            } else if (tagText.indexOf('Satvik South Indian Dining') !== -1) {
              tagEl.textContent = '✦ సాత్విక దక్షిణ భారతీయ భోజనం';
            }
          } else {
            if (tagText.indexOf('పవిత్ర దినం') !== -1) {
              var dayMatchEn = tagText.match(/\d+/);
              tagEl.textContent = '✦ Sacred Day ' + (dayMatchEn ? dayMatchEn[0] : (i + 1));
            } else if (tagText.indexOf('సాత్విక దక్షిణ భారతీయ భోజనం') !== -1) {
              tagEl.textContent = '✦ Satvik South Indian Dining';
            }
          }
        });
      }

      // Progress Tracker Bar
      var pct = Math.round(((currentIndex + 1) / totalDays) * 100);
      if (progressFill) {
        progressFill.style.width = pct + '%';
      }

      // Counter Badge
      var currentDayNum = currentIndex + 1;
      if (counterBadge) {
        if (te) {
          counterBadge.innerHTML = 'రోజు <span>' + currentDayNum + '</span> / ' + totalDays;
        } else {
          counterBadge.innerHTML = 'DAY <span>' + currentDayNum + '</span> OF ' + totalDays;
        }
      }

      // Layer Status Text
      if (navStatus) {
        var remainingLayers = totalDays - currentDayNum;
        if (te) {
          if (remainingLayers > 0) {
            navStatus.textContent = currentDayNum + 'వ రోజు / మొత్తం ' + totalDays + ' రోజులు (' + remainingLayers + ' పొరలు ఉన్నాయి)';
          } else {
            navStatus.textContent = currentDayNum + 'వ రోజు / మొత్తం ' + totalDays + ' రోజులు (చివరి రోజు)';
          }
        } else {
          if (remainingLayers > 0) {
            navStatus.textContent = 'Day ' + currentDayNum + ' of ' + totalDays + ' (' + remainingLayers + ' layers behind)';
          } else {
            navStatus.textContent = 'Day ' + currentDayNum + ' of ' + totalDays + ' (Final Day)';
          }
        }
      }

      // Buttons State
      if (prevBtn) {
        prevBtn.disabled = (currentIndex === 0);
        var prevSpan = prevBtn.querySelector('span');
        if (prevSpan) {
          prevSpan.textContent = te ? 'మునుపటి పొర' : 'Previous Layer';
        }
      }

      if (nextBtn) {
        var isLast = (currentIndex === totalDays - 1);
        var nextSpan = nextBtn.querySelector('span');
        if (isLast) {
          if (nextSpan) nextSpan.textContent = te ? 'మొదటి నుండి ↺' : 'Restart Deck ↺';
        } else {
          if (nextSpan) nextSpan.textContent = te ? 'తరువాతి పొర →' : 'Next Layer →';
        }
      }
    }

    /**
     * Advance to the next layer with physical peel animation
     */
    function next() {
      if (isAnimating) return;

      if (currentIndex < totalDays - 1) {
        isAnimating = true;
        var currentFront = cards[currentIndex];

        // Animate front card peeling off
        currentFront.classList.add('anim-peel-off');

        setTimeout(function() {
          currentIndex++;
          renderStack('next');
          isAnimating = false;
        }, 180);
      } else {
        // Reset stack to Day 1
        currentIndex = 0;
        renderStack('reset');
      }
    }

    /**
     * Return to the previous layer
     */
    function prev() {
      if (isAnimating) return;

      if (currentIndex > 0) {
        currentIndex--;
        renderStack('prev');
      }
    }

    function goTo(idx) {
      if (idx < 0) idx = 0;
      if (idx >= totalDays) idx = 0;
      currentIndex = idx;
      renderStack('goto');
    }

    // Attach card click on front card to reveal next layer
    viewport.addEventListener('click', function(e) {
      // Do not trigger if user clicked an inner link or button
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      next();
    });

    // Minimal navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        prev();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        next();
      });
    }

    // Keyboard support: ArrowRight / ArrowLeft / Space / Enter
    viewport.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        next();
      }
    });

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

    // Language change observer
    window.addEventListener('dodla_lang_change', function() {
      renderStack('lang');
    });

    // Initial render
    renderStack('init');

    // Expose global API
    window.pilgrimageDeck = {
      next: next,
      prev: prev,
      goTo: goTo,
      getCurrentIndex: function() { return currentIndex; },
      getTotalDays: function() { return totalDays; }
    };
    window.pilgrimageSlider = window.pilgrimageDeck; // backward compatibility
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDeck);
  } else {
    initDeck();
  }
})();
