// Application data - English version
const appData = {
    "games": [
        {
            "id": "gta5",
            "title": "GTA V",
            "badge": "Hot Offer",
            "rating": "4.8",
            "size": "72GB",
            "category": "Action",
            "desc": "Explore Los Santos in this open-world action adventure. Complete missions, drive exotic cars, and experience an immersive story.",
            "platforms": ["win", "ps", "xbox"],
            "downloads": "2.5M+",
            "image_color": "#2e3b70"
        },
        {
            "id": "hitman3",
            "title": "Hitman: Blood Money",
            "badge": "Popular",
            "rating": "4.6",
            "size": "4.5GB",
            "category": "Action",
            "desc": "Stealth assassin missions with deep strategy. Plan your approach, eliminate targets, and escape unnoticed.",
            "platforms": ["win", "ps", "xbox"],
            "downloads": "1.8M+",
            "image_color": "#3b2e70"
        },
        {
            "id": "minecraft",
            "title": "Minecraft",
            "badge": "Family",
            "rating": "4.9",
            "size": "500MB",
            "category": "Building",
            "desc": "Build, explore, and survive in endless worlds. Create anything you can imagine in this sandbox adventure.",
            "platforms": ["win", "mac", "mobile"],
            "downloads": "5M+",
            "image_color": "#2e7050"
        },
        {
            "id": "cyberpunk",
            "title": "Cyberpunk 2077",
            "badge": "New",
            "rating": "4.7",
            "size": "70GB",
            "category": "RPG",
            "desc": "Explore the vast Night City in this open-world RPG. Make choices that shape the story and your character.",
            "platforms": ["win", "ps", "xbox"],
            "downloads": "3.2M+",
            "image_color": "#702e6d"
        },
        {
            "id": "fifa23",
            "title": "FIFA 23",
            "badge": "Popular",
            "rating": "4.5",
            "size": "50GB",
            "category": "Sports",
            "desc": "Experience the world's game with HyperMotion2 technology and both men's and women's World Cup tournaments.",
            "platforms": ["win", "ps", "xbox"],
            "downloads": "4.1M+",
            "image_color": "#705c2e"
        },
        {
            "id": "amongus",
            "title": "Among Us",
            "badge": "Multiplayer",
            "rating": "4.8",
            "size": "250MB",
            "category": "Social",
            "desc": "MOD: Unlocked Work together to complete tasks on a spaceship, but beware of the impostor who aims to kill everyone.",
            "platforms": ["win", "mobile", "switch"],
            "downloads": "1.8M+",
            "image": "https://ibb.co/fdy0rQ7D"
        }
    ],
    "testimonials": [
        {
            "name": "John D.",
            "game": "GTA V Player",
            "avatar": "JD",
            "text": "I couldn't believe I got GTA V for free just by completing a simple survey. This site is legit!"
        },
        {
            "name": "Sarah A.",
            "game": "Minecraft Player",
            "avatar": "SA",
            "text": "I've unlocked 3 games already. The process is quick and the rewards are instant. Highly recommended!"
        },
        {
            "name": "Mike J.",
            "game": "Hitman Player",
            "avatar": "MJ",
            "text": "I was skeptical at first, but it actually works. Got Hitman: Blood Money in less than 5 minutes."
        },
        {
            "name": "Emma K.",
            "game": "Student",
            "avatar": "EK",
            "text": "Quick process, instant rewards. Perfect for getting premium games when you're on a budget."
        },
        {
            "name": "David L.",
            "game": "Tech Enthusiast",
            "avatar": "DL",
            "text": "Got GTA V and Cyberpunk both free through simple offers. GetGames is a game changer!"
        },
        {
            "name": "Lisa P.",
            "game": "Casual Gamer",
            "avatar": "LP",
            "text": "My friends didn't believe it until I showed them my phone with all these premium games installed."
        },
        {
            "name": "Tom W.",
            "game": "Mobile User",
            "avatar": "TW",
            "text": "Simple offers, great games. Been recommending GetGames to everyone I know."
        },
        {
            "name": "Anna S.",
            "game": "Long-time User",
            "avatar": "AS",
            "text": "Been using GetGames for months, never disappointed. New games added regularly too!"
        }
    ],
    "stats": {
        "games_unlocked": "15847",
        "happy_users": "382456",
        "success_rate": "98.5"
    },
    "faq": [
        {
            "question": "How does this work?",
            "answer": "We partner with advertisers who are willing to reward users for completing offers. When you complete an offer, you get the game or reward."
        },
        {
            "question": "Is this really free?",
            "answer": "Yes! You don't need to pay anything. You just need to complete simple offers like surveys or trying out apps."
        },
        {
            "question": "How long does it take to get the game?",
            "answer": "Most users get their rewards instantly after completing the offer. In some cases, it may take up to 24 hours for verification."
        },
        {
            "question": "Are these games legal?",
            "answer": "Absolutely! All games are obtained legally through our partnerships with advertisers and game developers."
        }
    ]
};

// Utility functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        
        element.textContent = formatNumber(current);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = formatNumber(target);
        }
    }
    
    requestAnimationFrame(update);
}

function getPlatformIcon(platform) {
    const icons = {
        'win': '<i class="fab fa-windows"></i>',
        'mac': '<i class="fab fa-apple"></i>',
        'ps': '<i class="fab fa-playstation"></i>',
        'xbox': '<i class="fab fa-xbox"></i>',
        'mobile': '<i class="fas fa-mobile-alt"></i>',
        'switch': '<i class="fas fa-gamepad"></i>'
    };
    return icons[platform] || '<i class="fas fa-desktop"></i>';
}

function getBadgeColor(badge) {
    const colors = {
        'Hot Offer': '#e53e3e',
        'New': '#38a169',
        'Family': '#3182ce',
        'Popular': '#805ad5',
        'Multiplayer': '#d69e2e'
    };
    return colors[badge] || '#718096';
}

// Global variables for modal state
let currentStage = 'intro';
let isEmergencyExitArmed = false;
let emergencyExitTimer = null;

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Counter animation on scroll
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Render games with enhanced star rating visibility
function renderGames(gamesToRender = appData.games) {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
    gamesGrid.innerHTML = gamesToRender.map(game => `
        <div class="game-card" data-category="${game.category}" data-game-id="${game.id}">
            <div class="game-image" style="background: linear-gradient(135deg, ${game.image_color}, ${game.image_color}99);">
                <div class="game-badge" style="background: ${getBadgeColor(game.badge)};">
                    ${game.badge}
                </div>
            </div>
            <div class="game-info">
                <div class="game-header">
                    <h3 class="game-title">${game.title}</h3>
                    <div class="game-rating">
                        <i class="fas fa-star" style="color: #fbbf24; margin-right: 4px;"></i>
                        <span style="font-weight: 500;">${game.rating}</span>
                    </div>
                </div>
                <div class="game-meta">
                    <span><i class="fas fa-hdd"></i> ${game.size}</span>
                    <span><i class="fas fa-tag"></i> ${game.category}</span>
                </div>
                <p class="game-desc">${game.desc}</p>
                <div class="game-platforms">
                    ${game.platforms.map(platform => `
                        <div class="platform-icon">${getPlatformIcon(platform)}</div>
                    `).join('')}
                </div>
                <div class="game-footer">
                    <div class="download-count">
                        <i class="fas fa-download"></i>
                        ${game.downloads} downloads
                    </div>
                    <button class="unlock-btn">
                        <i class="fas fa-unlock"></i>
                        Unlock Game
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to game cards and unlock buttons
    attachGameCardListeners();
}

// Attach game card event listeners
function attachGameCardListeners() {
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking the unlock button specifically
            if (e.target.closest('.unlock-btn')) return;
            
            const gameId = card.dataset.gameId;
            if (gameId) {
                openContentLocker(gameId);
            }
        });
    });

    document.querySelectorAll('.unlock-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click
            const gameId = e.target.closest('.game-card').dataset.gameId;
            openContentLocker(gameId);
        });
    });
}

// Games filtering
function initGamesFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter games
            const category = btn.dataset.category;
            const filteredGames = category === 'all' 
                ? appData.games 
                : appData.games.filter(game => game.category === category);
            
            renderGames(filteredGames);
        });
    });
}

// Render testimonials
function renderTestimonials() {
    const testimonialsCarousel = document.getElementById('testimonialsCarousel');
    const carouselDots = document.getElementById('carouselDots');
    
    if (!testimonialsCarousel || !carouselDots) return;

    testimonialsCarousel.innerHTML = appData.testimonials.map((testimonial, index) => `
        <div class="testimonial-card ${index === 0 ? 'active' : ''}">
            <div class="testimonial-header">
                <div class="testimonial-avatar">${testimonial.avatar}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <span>${testimonial.game}</span>
                </div>
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
        </div>
    `).join('');

    carouselDots.innerHTML = appData.testimonials.map((_, index) => `
        <div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');

    // Add dot click handlers
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            showTestimonial(index);
        });
    });

    // Auto-scroll testimonials
    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % appData.testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

function showTestimonial(index) {
    const testimonialsCarousel = document.getElementById('testimonialsCarousel');
    
    document.querySelectorAll('.testimonial-card').forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    if (testimonialsCarousel) {
        testimonialsCarousel.scrollTo({
            left: index * 374, // card width + gap
            behavior: 'smooth'
        });
    }
}

// Render FAQ
function renderFAQ() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;

    faqList.innerHTML = appData.faq.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <div class="faq-question">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Content Locker Modal Functions
function openContentLocker(gameId) {
    const game = appData.games.find(g => g.id === gameId);
    const contentLocker = document.getElementById('contentLocker');
    
    if (!game || !contentLocker) return;

    // Reset to intro stage
    currentStage = 'intro';
    showStage('intro');
    updateProgress(30);

    // Update modal content
    const gameIcon = document.getElementById('lockerGameIcon');
    const gameTitle = document.getElementById('lockerGameTitle');
    const gameDesc = document.getElementById('lockerGameDesc');
    
    if (gameIcon) {
        gameIcon.style.background = `linear-gradient(135deg, ${game.image_color}, ${game.image_color}99)`;
        gameIcon.textContent = '🎮';
    }
    
    if (gameTitle) {
        gameTitle.textContent = game.title;
    }

    if (gameDesc) {
        gameDesc.textContent = `Complete a simple step to unlock ${game.title} for free`;
    }

    // Show modal
    contentLocker.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Re-attach button listeners for this modal instance
    attachModalButtonListeners();
}

function showStage(stage) {
    const introStage = document.getElementById('introStage');
    const offerStage = document.getElementById('offerStage');
    const finalStage = document.getElementById('finalStage');
    
    // Hide all stages
    if (introStage) introStage.classList.add('hidden');
    if (offerStage) offerStage.classList.add('hidden');
    if (finalStage) finalStage.classList.add('hidden');

    // Show current stage
    switch (stage) {
        case 'intro':
            if (introStage) introStage.classList.remove('hidden');
            break;
        case 'offer':
            if (offerStage) offerStage.classList.remove('hidden');
            break;
        case 'final':
            if (finalStage) finalStage.classList.remove('hidden');
            break;
    }
    
    currentStage = stage;
}

function updateProgress(percentage) {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    if (progressText) {
        progressText.textContent = `${percentage}% Complete`;
    }
}

// Attach modal button listeners - Updated to remove continue button functionality
function attachModalButtonListeners() {
    const unlockNowBtn = document.getElementById('unlockNowBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Remove existing listeners to prevent duplicates
    if (unlockNowBtn) {
        const newBtn = unlockNowBtn.cloneNode(true);
        unlockNowBtn.parentNode.replaceChild(newBtn, unlockNowBtn);
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Unlock Now clicked - progressing to offer stage');
            showStage('offer');
            updateProgress(100); // Set to 100% since offer wall is the final stage
        });
    }
    
    if (downloadBtn) {
        const newBtn = downloadBtn.cloneNode(true);
        downloadBtn.parentNode.replaceChild(newBtn, downloadBtn);
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Your download will begin shortly! Thank you for using GetGames.');
        });
    }
}

// Emergency exit functionality - Ctrl+Shift+X double press
function initEmergencyExit() {
    document.addEventListener('keydown', (e) => {
        // Check for Ctrl+Shift+X
        if (e.ctrlKey && e.shiftKey && e.key === 'X') {
            e.preventDefault();
            
            if (!isEmergencyExitArmed) {
                // First press - arm the emergency exit
                isEmergencyExitArmed = true;
                console.log('Emergency exit armed - press Ctrl+Shift+X again within 2 seconds to close modal');
                
                // Show temporary notification
                const contentLocker = document.getElementById('contentLocker');
                if (contentLocker && !contentLocker.classList.contains('hidden')) {
                    const notification = document.createElement('div');
                    notification.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: var(--color-warning);
                        color: white;
                        padding: 10px 15px;
                        border-radius: 5px;
                        z-index: 9999;
                        font-size: 12px;
                    `;
                    notification.textContent = 'Press Ctrl+Shift+X again to exit';
                    document.body.appendChild(notification);
                    
                    setTimeout(() => {
                        if (document.body.contains(notification)) {
                            document.body.removeChild(notification);
                        }
                    }, 2000);
                }
                
                // Disarm after 2 seconds
                emergencyExitTimer = setTimeout(() => {
                    isEmergencyExitArmed = false;
                }, 2000);
            } else {
                // Second press within 2 seconds - execute emergency exit
                clearTimeout(emergencyExitTimer);
                isEmergencyExitArmed = false;
                closeContentLocker();
                console.log('Emergency exit executed');
            }
        }
    });
}

function closeContentLocker() {
    const contentLocker = document.getElementById('contentLocker');
    if (contentLocker) {
        contentLocker.classList.add('hidden');
        document.body.style.overflow = '';
        // Reset stage
        currentStage = 'intro';
        showStage('intro');
        updateProgress(30);
    }
}

// Initialize hero showcase with unlock functionality
function initHeroShowcase() {
    const showcaseCards = document.querySelectorAll('.showcase-card');
    let currentCard = 0;

    // Add click handlers to hero showcase cards
    showcaseCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.dataset.game;
            if (gameId) {
                openContentLocker(gameId);
            }
        });
        
        // Add visual feedback
        card.style.cursor = 'pointer';
    });

    // Auto animation
    setInterval(() => {
        showcaseCards.forEach(card => card.classList.remove('active'));
        if (showcaseCards[currentCard]) {
            showcaseCards[currentCard].classList.add('active');
        }
        currentCard = (currentCard + 1) % showcaseCards.length;
    }, 3000);
}

// CTA buttons
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-main');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const gamesSection = document.getElementById('games');
            if (gamesSection) {
                gamesSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.feature-card, .game-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - initializing application');
    
    // Initialize components in order
    initMobileMenu();
    initCounters();
    renderGames();
    initGamesFilter();
    renderTestimonials();
    renderFAQ();
    initEmergencyExit(); // Initialize emergency exit functionality
    initHeroShowcase();
    initCTAButtons();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();

    // Add loading class removal after a short delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    console.log('Application initialized successfully');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
    } else {
        // Resume animations when page becomes visible
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    // Close mobile menu on resize to larger screens
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        menuToggle?.classList.remove('active');
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData && perfData.loadEventEnd - perfData.loadEventStart < 3000) {
                console.log('Page loaded successfully in under 3 seconds');
            }
        }, 0);
    });
}