// ====================================
// PORTFOLIO WEBSITE - INTERACTIVE FEATURES
// ====================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initModals();
    initCarousel();
});

// ====================================
// NAVIGATION
// ====================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                const hamburger = document.getElementById('hamburger');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                }

                // Smooth scroll to section
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ====================================
// MOBILE MENU
// ====================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ====================================
// SCROLL ANIMATIONS
// ====================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .timeline-card, .section-title, .section-subtitle');
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ====================================
// MODALS (for Education and Certificates)
// ====================================
function initModals() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    // Education cards - open image modal
    const educationCards = document.querySelectorAll('.education-card[data-modal-image]');
    educationCards.forEach(card => {
        card.addEventListener('click', () => {
            const imageSrc = card.getAttribute('data-modal-image');
            openImageModal(imageSrc);
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        modalBody.innerHTML = '';
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Function to open image modal
    window.openImageModal = (imageSrc) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'View';
        modalBody.appendChild(img);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Function to open PDF modal
    window.openPDFModal = (pdfSrc) => {
        const iframe = document.createElement('iframe');
        iframe.src = pdfSrc;
        iframe.title = 'PDF Viewer';
        modalBody.appendChild(iframe);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
}

// ====================================
// CAROUSEL (for Achievements)
// ====================================
function initCarousel() {
    const carouselContainer = document.getElementById('carouselContainer');
    const carouselContent = document.getElementById('carouselContent');
    const carouselClose = document.getElementById('carouselClose');
    const carouselOverlay = document.getElementById('carouselOverlay');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselIndicators = document.getElementById('carouselIndicators');

    let currentImages = [];
    let currentIndex = 0;

    // Achievement cards - open carousel
    const achievementCards = document.querySelectorAll('.achievement-card[data-carousel]');
    achievementCards.forEach(card => {
        card.addEventListener('click', () => {
            const imagesData = card.getAttribute('data-carousel');
            try {
                currentImages = JSON.parse(imagesData);
                openCarousel();
            } catch (error) {
                console.error('Invalid carousel data:', error);
            }
        });
    });

    // Open carousel
    function openCarousel() {
        if (currentImages.length === 0) return;

        currentIndex = 0;
        showCarouselImage();
        createIndicators();
        carouselContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close carousel
    function closeCarousel() {
        carouselContainer.classList.remove('active');
        carouselContent.innerHTML = '';
        carouselIndicators.innerHTML = '';
        currentImages = [];
        currentIndex = 0;
        document.body.style.overflow = '';
    }

    // Show current image
    function showCarouselImage() {
        const img = document.createElement('img');
        img.src = currentImages[currentIndex];
        img.alt = `Image ${currentIndex + 1}`;
        carouselContent.innerHTML = '';
        carouselContent.appendChild(img);
        updateIndicators();
    }

    // Create indicator dots
    function createIndicators() {
        carouselIndicators.innerHTML = '';
        currentImages.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = index;
                showCarouselImage();
            });
            carouselIndicators.appendChild(dot);
        });
    }

    // Update indicator dots
    function updateIndicators() {
        const dots = carouselIndicators.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Previous image
    carouselPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showCarouselImage();
    });

    // Next image
    carouselNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showCarouselImage();
    });

    // Close carousel
    carouselClose.addEventListener('click', closeCarousel);
    carouselOverlay.addEventListener('click', closeCarousel);

    // Arrow key navigation
    document.addEventListener('keydown', (e) => {
        if (carouselContainer.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
                showCarouselImage();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % currentImages.length;
                showCarouselImage();
            } else if (e.key === 'Escape') {
                closeCarousel();
            }
        }
    });
}

// ====================================
// HEADER SCROLL EFFECT (Optional Enhancement)
// ====================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});
