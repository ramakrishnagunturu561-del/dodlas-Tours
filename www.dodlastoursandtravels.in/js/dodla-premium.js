/**
 * Dodla's Tours & Travels — Premium Interaction Controller
 * Pure Vanilla JavaScript (No jQuery or bloated frameworks required)
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. STICKY HEADER & SCROLL-TO-TOP
  const header = document.querySelector('.dodla-header');
  const scrollTopBtn = document.querySelector('.floating-scroll-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      if (header) header.classList.add('scrolled');
      if (scrollTopBtn) scrollTopBtn.classList.add('visible');
    } else {
      if (header) header.classList.remove('scrolled');
      if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. MOBILE NAVIGATION DRAWER
  const mobileToggle = document.querySelector('.dodla-mobile-toggle');
  const navMenu = document.querySelector('.dodla-nav-menu');
  const dropdownToggles = document.querySelectorAll('.dodla-nav-item.has-dropdown > .dodla-nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.className = 'fa fa-times';
        } else {
          icon.className = 'fa fa-bars';
        }
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa fa-bars';
      }
    });
  }

  // Mobile dropdown toggle
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const parent = this.closest('.dodla-nav-item');
        if (parent) {
          parent.classList.toggle('dropdown-open');
        }
      }
    });
  });

  // 3. HERO SLIDER LOGIC
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator-dot');
  const prevBtn = document.querySelector('.hero-prev-btn');
  const nextBtn = document.querySelector('.hero-next-btn');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (!slides.length) return;
    slides.forEach(function (slide, i) {
      slide.classList.remove('active');
      if (indicators[i]) indicators[i].classList.remove('active');
    });

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, 6000);
  }

  function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (slides.length > 0) {
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        startAutoPlay();
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        startAutoPlay();
      });
    }

    indicators.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        showSlide(i);
        startAutoPlay();
      });
    });

    const heroSection = document.querySelector('.dodla-hero-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopAutoPlay);
      heroSection.addEventListener('mouseleave', startAutoPlay);
    }

    startAutoPlay();
  }

  // 4. TOUR CATEGORY FILTER TABS
  const categoryTabs = document.querySelectorAll('.category-tab-btn');
  const tourCards = document.querySelectorAll('.premium-tour-card');

  categoryTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      categoryTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const selectedCategory = this.getAttribute('data-category');

      tourCards.forEach(function (card) {
        const cardCategory = card.getAttribute('data-category') || '';
        if (selectedCategory === 'all' || cardCategory.includes(selectedCategory)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. LIVE SEARCH & FILTER PANEL
  const searchForm = document.getElementById('tourSearchForm');
  const searchInput = document.getElementById('searchQuery');
  const categorySelect = document.getElementById('searchCategory');

  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const cat = (categorySelect ? categorySelect.value : 'all');

      let matchCount = 0;
      tourCards.forEach(function (card) {
        const title = (card.querySelector('.tour-card-title')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('.tour-card-itinerary-preview')?.textContent || '').toLowerCase();
        const cardCat = card.getAttribute('data-category') || '';

        const matchesQuery = !query || title.includes(query) || desc.includes(query);
        const matchesCategory = cat === 'all' || cardCat.includes(cat);

        if (matchesQuery && matchesCategory) {
          card.style.display = 'flex';
          matchCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Smooth scroll to tours section
      const toursSection = document.getElementById('toursSection');
      if (toursSection) {
        toursSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // 6. ENQUIRY MODAL & AUTO-PREFILL
  const enquiryModal = document.getElementById('enquiryModal');
  const modalTourInput = document.getElementById('modalTourName');
  const enquireBtns = document.querySelectorAll('.open-enquiry-modal');

  enquireBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const tourName = this.getAttribute('data-tour-name') || 'Dodla Premium Tour';
      if (modalTourInput) {
        modalTourInput.value = tourName;
      }
      if (window.bootstrap && bootstrap.Modal) {
        const bsModal = bootstrap.Modal.getOrCreateInstance(enquiryModal);
        bsModal.show();
      } else {
        // Fallback display
        if (enquiryModal) enquiryModal.style.display = 'block';
      }
    });
  });

  // Modal enquiry form submission to WhatsApp
  const modalForm = document.getElementById('modalEnquiryForm');
  if (modalForm) {
    modalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('modalUserName')?.value || '';
      const phone = document.getElementById('modalUserPhone')?.value || '';
      const tour = document.getElementById('modalTourName')?.value || '';
      const date = document.getElementById('modalTravelDate')?.value || '';
      const message = document.getElementById('modalUserMsg')?.value || '';

      const text = `*New Tour Enquiry - Dodla's Tours & Travels*%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Tour:* ${encodeURIComponent(tour)}%0A` +
        `*Preferred Month/Date:* ${encodeURIComponent(date)}%0A` +
        `*Notes:* ${encodeURIComponent(message)}`;

      window.open(`https://wa.me/919848124759?text=${text}`, '_blank');

      if (window.bootstrap && bootstrap.Modal) {
        const bsModal = bootstrap.Modal.getInstance(enquiryModal);
        if (bsModal) bsModal.hide();
      }
    });
  }

  // Homepage contact form to WhatsApp
  const homeContactForm = document.getElementById('homeContactForm');
  if (homeContactForm) {
    homeContactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('homeName')?.value || '';
      const phone = document.getElementById('homePhone')?.value || '';
      const tour = document.getElementById('homeTour')?.value || '';
      const msg = document.getElementById('homeMsg')?.value || '';

      const text = `*Quick Enquiry - Dodla's Website*%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Tour:* ${encodeURIComponent(tour)}%0A` +
        `*Message:* ${encodeURIComponent(msg)}`;

      window.open(`https://wa.me/919848124759?text=${text}`, '_blank');
      homeContactForm.reset();
      alert('Thank you! Redirecting you to WhatsApp to connect with Dodla\'s Tour Coordinator.');
    });
  }

  // 7. PHOTO GALLERY LIGHTBOX MODAL
  const lightboxModal = document.getElementById('dodlaLightboxModal');
  const lightboxImg = document.getElementById('lightboxActiveImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxCloseBtn');
  const galleryItems = document.querySelectorAll('.gallery-thumb-item');

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const img = this.querySelector('img');
      const caption = this.getAttribute('data-caption') || img?.alt || 'Dodla Tours Pilgrimage Photo';
      if (img && lightboxImg && lightboxModal) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', function () {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
