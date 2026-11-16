/**
 * Dodla's Tours & Travels — Luxury Editorial Experience Controller
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. STICKY HEADER
  const header = document.querySelector('.luxury-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }
  });

  // 2. MOBILE NAVIGATION
  const mobileToggle = document.querySelector('.luxury-mobile-toggle');
  const navMenu = document.querySelector('.luxury-nav-menu');
  const dropdownToggles = document.querySelectorAll('.luxury-nav-item.has-dropdown > .luxury-nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('open') ? 'fa fa-times' : 'fa fa-bars';
      }
    });

    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa fa-bars';
      }
    });
  }

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const parent = this.closest('.luxury-nav-item');
        if (parent) parent.classList.toggle('dropdown-open');
      }
    });
  });

  // 3. CINEMATIC HERO SLIDER
  const heroBg = document.querySelector('.luxury-hero-bg');
  const heroCounter = document.querySelector('.hero-slide-counter');
  const heroHeading = document.querySelector('.luxury-hero-heading');
  const heroLead = document.querySelector('.luxury-hero-lead');

  const heroSlides = [
    {
      img: 'images/Home-4/temple.jpg',
      overline: 'EST. 1962 &bull; SACRED HIMALAYAN EXPEDITIONS',
      heading: 'The Sacred Path, <em>Elevated to Grace.</em>',
      lead: 'Six decades of devotional mastery across India’s most venerated shrines. Impeccable logistics, pure satvik culinary traditions, and heartfelt elder care.'
    },
    {
      img: 'images/Home-4/slide1.jpg',
      overline: 'EST. 1962 &bull; THE DIVINE ABODE',
      heading: 'Kailash Manasarovar, <em>A Soulful Pilgrimage.</em>',
      lead: 'Traverse the mystic roof of the world with seasoned yatra masters. Every darshan orchestrated with unhurried reverence and medical security.'
    },
    {
      img: 'images/Home-4/dambulla-temple.jpg',
      overline: 'EST. 1962 &bull; HISTORIC RAMAYANA TRAILS',
      heading: 'Echoes of the Ramayana <em>Across Sacred Lands.</em>',
      lead: 'From Trincomalee Shankari Devi Shaktipeetham to the pristine heights of Nuwara Eliya. Discover authentic legends with family warmth.'
    }
  ];

  let currentHeroIdx = 0;
  function updateHeroSlide(idx) {
    if (!heroBg) return;
    currentHeroIdx = (idx + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[currentHeroIdx];
    heroBg.style.opacity = '0.3';
    setTimeout(function () {
      heroBg.style.backgroundImage = `url('${slide.img}')`;
      heroBg.style.opacity = '1';
      if (heroCounter) heroCounter.textContent = `0${currentHeroIdx + 1} / 0${heroSlides.length}`;
      const overline = document.querySelector('.hero-overline');
      if (overline) overline.innerHTML = slide.overline;
      if (heroHeading) heroHeading.innerHTML = slide.heading;
      if (heroLead) heroLead.innerHTML = slide.lead;
    }, 400);
  }

  if (heroBg) {
    heroBg.style.transition = 'opacity 0.6s ease';
    setInterval(function () {
      updateHeroSlide(currentHeroIdx + 1);
    }, 7000);
  }

  // 4. DISCOVERY SEARCH & FILTER
  const discoveryForm = document.getElementById('luxuryDiscoveryForm');
  const journeyCards = document.querySelectorAll('.luxury-journey-card');

  if (discoveryForm) {
    discoveryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = (document.getElementById('discoveryQuery')?.value || '').toLowerCase().trim();
      const type = document.getElementById('discoveryType')?.value || 'all';

      journeyCards.forEach(function (card) {
        const title = (card.querySelector('.journey-title')?.textContent || '').toLowerCase();
        const text = (card.querySelector('.journey-itinerary-preview')?.textContent || '').toLowerCase();
        const cardType = card.getAttribute('data-type') || '';

        const matchesQuery = !query || title.includes(query) || text.includes(query);
        const matchesType = type === 'all' || cardType.includes(type);

        card.style.display = (matchesQuery && matchesType) ? 'flex' : 'none';
      });

      const section = document.getElementById('journeysSection');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 5. BESPOKE ENQUIRY MODAL & WHATSAPP
  const modal = document.getElementById('luxuryEnquiryModal');
  const modalTourInput = document.getElementById('modalTourField');
  const enquireTriggers = document.querySelectorAll('.open-luxury-enquiry');

  enquireTriggers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const tourName = this.getAttribute('data-tour') || 'Custom Pilgrimage Consultation';
      if (modalTourInput) modalTourInput.value = tourName;
      if (window.bootstrap && bootstrap.Modal) {
        const bsModal = bootstrap.Modal.getOrCreateInstance(modal);
        bsModal.show();
      }
    });
  });

  const modalForm = document.getElementById('luxuryModalForm');
  if (modalForm) {
    modalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('mName')?.value || '';
      const phone = document.getElementById('mPhone')?.value || '';
      const tour = document.getElementById('modalTourField')?.value || '';
      const date = document.getElementById('mDate')?.value || '';
      const msg = document.getElementById('mMsg')?.value || '';

      const text = `*Dodla's Tours & Travels — Luxury Pilgrimage Inquiry*%0A` +
        `*Devotee Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Journey:* ${encodeURIComponent(tour)}%0A` +
        `*Preferred Period:* ${encodeURIComponent(date)}%0A` +
        `*Notes:* ${encodeURIComponent(msg)}`;

      window.open(`https://wa.me/919848124759?text=${text}`, '_blank');
      if (window.bootstrap && bootstrap.Modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) bsModal.hide();
      }
    });
  }

  // Concierge Form
  const conciergeForm = document.getElementById('conciergeConsultForm');
  if (conciergeForm) {
    conciergeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('cName')?.value || '';
      const phone = document.getElementById('cPhone')?.value || '';
      const tour = document.getElementById('cTour')?.value || '';
      const notes = document.getElementById('cNotes')?.value || '';

      const text = `*Dodla's Bespoke Consultation Request*%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Mobile:* ${encodeURIComponent(phone)}%0A` +
        `*Circuit:* ${encodeURIComponent(tour)}%0A` +
        `*Requirements:* ${encodeURIComponent(notes)}`;

      window.open(`https://wa.me/919848124759?text=${text}`, '_blank');
      conciergeForm.reset();
    });
  }

  // 6. GALLERY LIGHTBOX
  const lightbox = document.getElementById('luxuryLightbox');
  const lightboxImg = document.getElementById('luxuryLightboxImg');
  const lightboxClose = document.getElementById('luxuryLightboxClose');
  const galleryCells = document.querySelectorAll('.gallery-cell');

  galleryCells.forEach(function (cell) {
    cell.addEventListener('click', function () {
      const img = this.querySelector('img');
      if (img && lightboxImg && lightbox) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', function () {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 7. UNIVERSAL TOUR DETAIL TAB SWITCHER
  document.addEventListener('click', function (e) {
    const tabLink = e.target.closest('.nav-tabs a, [data-toggle="tab"]');
    if (!tabLink) return;

    e.preventDefault();
    const href = tabLink.getAttribute('href') || tabLink.getAttribute('data-target') || '';
    if (!href.startsWith('#')) return;

    const targetId = href.substring(1);

    // 1. Update tab navigation active state
    const navTabs = tabLink.closest('.nav-tabs');
    if (navTabs) {
      navTabs.querySelectorAll('li').forEach(function (li) {
        li.classList.remove('active');
      });
      const parentLi = tabLink.closest('li');
      if (parentLi) parentLi.classList.add('active');
    }

    // 2. Locate or synthesize target tab pane
    let targetPane = document.getElementById(targetId);
    let tabContent = document.querySelector('.tab-content');

    if (!targetPane && tabContent) {
      // Create fallback pane dynamically so empty tabs NEVER stay blank!
      targetPane = document.createElement('div');
      targetPane.id = targetId;
      targetPane.className = 'tab-pane fade';

      let fallbackHTML = '';
      if (targetId === 'price') {
        fallbackHTML = `
          <div style="background:#FFFFFF;border:1px solid #EAE5DE;border-radius:12px;padding:36px;margin-top:20px;box-shadow:0 6px 24px rgba(0,0,0,0.04);">
            <h3 style="font-family:'Cormorant Garamond',serif;color:#0B241C;font-size:2rem;margin-bottom:12px;">Yatra Fare &amp; Departure Schedule</h3>
            <p style="color:#666;line-height:1.7;margin-bottom:24px;">Tour tariffs vary based on season, flight availability, and room sharing preferences. All devotional journeys include verified accommodation and South Indian satvik meals.</p>
            <div style="background:#FAF8F5;border-left:4px solid #C5A059;padding:18px 24px;border-radius:6px;margin-bottom:24px;">
              <strong style="color:#0B241C;font-size:1.1rem;display:block;margin-bottom:6px;">Custom Quotation &amp; Seat Reservations</strong>
              <span style="color:#555;">Please consult our Vijayawada pilgrim coordinators directly for verified departure dates and token booking.</span>
            </div>
            <div style="display:flex;gap:14px;flex-wrap:wrap;">
              <a href="https://wa.me/919848124759?text=Namaste%20Dodla's%20Tours,%20please%20share%20fare%20and%20departure%20dates" target="_blank" style="background:#0B241C;color:#FFFFFF;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:8px;">
                <i class="fa fa-whatsapp" style="color:#25D366;font-size:1.2rem;"></i> WhatsApp Fare Inquiry
              </a>
              <a href="tel:+919848124759" style="border:1px solid #0B241C;color:#0B241C;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:8px;">
                <i class="fa fa-phone"></i> Call +91 98481 24759
              </a>
            </div>
          </div>
        `;
      } else if (targetId === 'ieclusions') {
        fallbackHTML = `
          <div style="background:#FFFFFF;border:1px solid #EAE5DE;border-radius:12px;padding:36px;margin-top:20px;box-shadow:0 6px 24px rgba(0,0,0,0.04);">
            <div class="row g-4">
              <div class="col-md-6">
                <h4 style="font-family:'Cormorant Garamond',serif;color:#0B241C;font-size:1.6rem;margin-bottom:16px;border-bottom:2px solid #C5A059;padding-bottom:8px;">
                  <i class="fa fa-check-circle" style="color:#2E7D32;"></i> Inclusions
                </h4>
                <ul style="line-height:2;color:#555;padding-left:20px;">
                  <li>Comfortable deluxe hotel / ashram accommodation</li>
                  <li>Hygienic South Indian pure vegetarian meals</li>
                  <li>Dedicated A/C coach transport for all temple visits</li>
                  <li>Experienced Telugu &amp; English speaking tour escort</li>
                  <li>Toll fees, parking, driver allowances &amp; road taxes</li>
                  <li>Special darshan coordination where applicable</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h4 style="font-family:'Cormorant Garamond',serif;color:#0B241C;font-size:1.6rem;margin-bottom:16px;border-bottom:2px solid #C5A059;padding-bottom:8px;">
                  <i class="fa fa-times-circle" style="color:#C62828;"></i> Exclusions
                </h4>
                <ul style="line-height:2;color:#555;padding-left:20px;">
                  <li>Personal laundry, room telephone calls &amp; portage</li>
                  <li>Special individual pooja / abhishekam charges</li>
                  <li>Any extra expenses due to unexpected weather delays</li>
                  <li>Optional pony, palki, or ropeway charges</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (targetId === 'facility') {
        fallbackHTML = `
          <div style="background:#FFFFFF;border:1px solid #EAE5DE;border-radius:12px;padding:36px;margin-top:20px;box-shadow:0 6px 24px rgba(0,0,0,0.04);">
            <h4 style="font-family:'Cormorant Garamond',serif;color:#0B241C;font-size:1.8rem;margin-bottom:18px;">Facilities &amp; Devotee Notice</h4>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px;margin-bottom:28px;">
              <div style="background:#FAF8F5;padding:20px;border-radius:8px;">
                <strong style="color:#0B241C;display:block;margin-bottom:6px;"><i class="fa fa-utensils" style="color:#C5A059;"></i> Satvik Dining</strong>
                <p style="color:#666;font-size:0.92rem;margin:0;">Prepared by traditional South Indian cooks accompanying the yatra group.</p>
              </div>
              <div style="background:#FAF8F5;padding:20px;border-radius:8px;">
                <strong style="color:#0B241C;display:block;margin-bottom:6px;"><i class="fa fa-user-shield" style="color:#C5A059;"></i> Senior Citizen Assistance</strong>
                <p style="color:#666;font-size:0.92rem;margin:0;">Careful boarding, slow-paced temple darshans, and ground support at every step.</p>
              </div>
              <div style="background:#FAF8F5;padding:20px;border-radius:8px;">
                <strong style="color:#0B241C;display:block;margin-bottom:6px;"><i class="fa fa-id-card" style="color:#C5A059;"></i> ID Mandatory</strong>
                <p style="color:#666;font-size:0.92rem;margin:0;">Devotees must carry original Aadhaar / Passport and 2 passport size photographs.</p>
              </div>
            </div>
          </div>
        `;
      } else if (targetId === 'gallery') {
        fallbackHTML = `
          <div style="background:#FFFFFF;border:1px solid #EAE5DE;border-radius:12px;padding:36px;margin-top:20px;box-shadow:0 6px 24px rgba(0,0,0,0.04);">
            <h4 style="font-family:'Cormorant Garamond',serif;color:#0B241C;font-size:1.8rem;margin-bottom:20px;">Pilgrimage Photo Gallery</h4>
            <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:16px;">
              <img src="images/Home-4/gallery-1.jpg" style="width:100%;height:180px;object-fit:cover;border-radius:8px;" alt="Sacred Darshan">
              <img src="images/Home-4/gallery-2.jpg" style="width:100%;height:180px;object-fit:cover;border-radius:8px;" alt="Sacred Darshan">
              <img src="images/Home-4/gallery-3.jpg" style="width:100%;height:180px;object-fit:cover;border-radius:8px;" alt="Sacred Darshan">
              <img src="images/Home-4/gallery-4.jpg" style="width:100%;height:180px;object-fit:cover;border-radius:8px;" alt="Sacred Darshan">
            </div>
          </div>
        `;
      } else {
        fallbackHTML = `
          <div style="background:#FFFFFF;border:1px solid #EAE5DE;border-radius:12px;padding:36px;margin-top:20px;">
            <p style="color:#666;">Please contact our pilgrim concierge for detailed information regarding this section.</p>
          </div>
        `;
      }

      targetPane.innerHTML = fallbackHTML;
      tabContent.appendChild(targetPane);
    }

    // 3. Switch visible pane with smooth animation
    if (tabContent) {
      tabContent.querySelectorAll('.tab-pane').forEach(function (pane) {
        pane.classList.remove('active', 'in');
        pane.style.display = 'none';
      });
    }

    if (targetPane) {
      targetPane.classList.add('active', 'in');
      targetPane.style.display = 'block';
      targetPane.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});


