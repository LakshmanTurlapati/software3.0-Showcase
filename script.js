// Software 3.0 Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
            navToggle.classList.toggle('nav-toggle-active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinksElements = document.querySelectorAll('.nav-link');
    navLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navLinks.classList.remove('nav-active');
                navToggle.classList.remove('nav-toggle-active');
            }
        });
    });

    // Terminal typing effect
    function typeText(element, text, speed = 50) {
        return new Promise((resolve) => {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    resolve();
                }
            }, speed);
        });
    }

    // Animated terminal output (runs when hero section comes into view)
    const heroTerminal = document.querySelector('.hero .terminal-body');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateHeroTerminal();
                heroObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (heroTerminal) {
        heroObserver.observe(heroTerminal);
    }

    function animateHeroTerminal() {
        const outputLines = document.querySelectorAll('.hero .output-line');
        let delay = 500;

        outputLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '0';
                line.style.transform = 'translateX(-20px)';
                line.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateX(0)';
                }, 100);
            }, delay + (index * 300));
        });
    }

    // Scroll-triggered animations for feature cards
    const animatedElements = document.querySelectorAll('.feature-card, .feature-item, .paradigm-column');
    
    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        scrollObserver.observe(element);
    });

    // Add fade-in class styling
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Active navigation link highlighting
    const sections = document.querySelectorAll('.section, .hero');
    const navItems = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href') === `#${currentId}`) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: '-100px 0px -80%',
        threshold: 0
    });

    sections.forEach(section => {
        if (section.id) {
            navObserver.observe(section);
        }
    });

    // Terminal demo animation
    const demoTerminal = document.querySelector('.terminal-demo .terminal-body');
    if (demoTerminal) {
        const demoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('demo-animated')) {
                    entry.target.classList.add('demo-animated');
                    animateDemoTerminal();
                    demoObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        demoObserver.observe(demoTerminal);
    }

    function animateDemoTerminal() {
        const demoOutputLines = document.querySelectorAll('.terminal-demo .output-line');
        let delay = 0;

        demoOutputLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '0';
                line.style.transform = 'translateX(-10px)';
                line.style.transition = 'all 0.4s ease';
                
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateX(0)';
                }, 50);
            }, delay + (index * 200));
        });
    }

    // Add custom cursor blinking for terminals
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 1000);
    });

    // Performance optimization: Lazy load terminal animations
    let animationsLoaded = false;
    
    window.addEventListener('scroll', function() {
        if (!animationsLoaded && window.scrollY > 100) {
            animationsLoaded = true;
            // Preload any heavy animations here if needed
        }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && e.shiftKey) {
            // Enhanced focus management if needed
        }
    });

    // Theme detection (for future theme switching capability)
    function detectTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            // Light mode preference detected
            document.body.classList.add('light-theme-preferred');
        }
    }

    detectTheme();

    // Listen for theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', detectTheme);
    }

    // Console Easter egg
    console.log(`
    ╔════════════════════════════════════════════════════════════════════╗
    ║                          Software 3.0                             ║
    ║                   AI-Driven Development Platform                   ║
    ║                                                                    ║
    ║  Built with AI collaboration • TT Autonomous Font                  ║
    ║  Styled after opencode.ai • Modern dark theme                     ║
    ║                                                                    ║
    ║  GitHub: https://github.com/LakshmanTurlapati/Software-3.0         ║
    ╚════════════════════════════════════════════════════════════════════╝
    
    Welcome to the future of software development! 🚀
    `);

    // Error handling for missing elements
    const criticalElements = ['.hero', '.nav', '.footer'];
    criticalElements.forEach(selector => {
        if (!document.querySelector(selector)) {
            console.warn(`Critical element missing: ${selector}`);
        }
    });
});

// Additional mobile navigation styles (injected via JavaScript for better control)
document.addEventListener('DOMContentLoaded', function() {
    const mobileStyles = `
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 80px;
                left: 0;
                right: 0;
                background: rgba(10, 10, 10, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 2rem;
                transform: translateX(-100%);
                transition: transform 0.3s ease;
                border-bottom: 1px solid var(--border-color);
            }
            
            .nav-links.nav-active {
                transform: translateX(0);
            }
            
            .nav-toggle.nav-toggle-active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.nav-toggle-active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.nav-toggle-active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
            
            .nav-link.active {
                color: var(--accent-color);
                font-weight: 600;
            }
        }
    `;

    const mobileStyleSheet = document.createElement('style');
    mobileStyleSheet.textContent = mobileStyles;
    document.head.appendChild(mobileStyleSheet);
});

// Utility functions
const utils = {
    // Debounce function for scroll events
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Animate counter (useful for stats if added later)
    animateCounter: function(element, start, end, duration) {
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
};

    // VS Code Demo Interactive Functionality
    const viewToggles = document.querySelectorAll('.view-toggle');
    const editorText = document.querySelector('.editor-text');
    
    // Define the content for different views
    const demoContent = {
        instructions: `
            <div class="code-line"><span class="comment"># Software 3.0 Hello World Demo</span></div>
            <div class="code-line"></div>
            <div class="code-line">Create a simple greeting function that demonstrates</div>
            <div class="code-line">the <span class="keyword">Software 3.0</span> paradigm.</div>
            <div class="code-line"></div>
            <div class="code-line">**Requirements:** Accept name, return welcome message</div>
        `,
        code: `
            <div class="code-line"><span class="comment"># Generated Python Code</span></div>
            <div class="code-line"></div>
            <div class="code-line"><span class="keyword">def</span> <span class="function">greet_user</span>(name: <span class="type">str</span>) -> <span class="type">str</span>:</div>
            <div class="code-line">    <span class="string">"""</span></div>
            <div class="code-line">    <span class="string">    Software 3.0 greeting function</span></div>
            <div class="code-line">    <span class="string">    """</span></div>
            <div class="code-line">    <span class="keyword">return</span> <span class="string">f"Welcome to Software 3.0, {name}!"</span></div>
            <div class="code-line"></div>
            <div class="code-line"><span class="comment"># Usage example</span></div>
            <div class="code-line">message = <span class="function">greet_user</span>(<span class="string">"Developer"</span>)</div>
            <div class="code-line"><span class="function">print</span>(message)</div>
        `,
        dual: `
            <div class="dual-view-container">
                <div class="dual-pane">
                    <div class="pane-header">Instructions</div>
                    <div class="code-line">Create a greeting function</div>
                    <div class="code-line">Accept name parameter</div>
                    <div class="code-line">Return welcome message</div>
                </div>
                <div class="dual-pane">
                    <div class="pane-header">Generated Code</div>
                    <div class="code-line"><span class="keyword">def</span> <span class="function">greet_user</span>(name):</div>
                    <div class="code-line">    <span class="keyword">return</span> <span class="string">f"Welcome, {name}!"</span></div>
                </div>
            </div>
        `
    };

    // Add click handlers to view toggle buttons
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Remove active class from all toggles
            viewToggles.forEach(t => t.classList.remove('active'));
            // Add active class to clicked toggle
            this.classList.add('active');
            
            // Get the view type from the button
            const viewType = this.textContent.toLowerCase().includes('instructions') ? 'instructions' :
                            this.textContent.toLowerCase().includes('code') ? 'code' : 'dual';
            
            // Update the editor content
            if (editorText && demoContent[viewType]) {
                editorText.innerHTML = demoContent[viewType];
            }
        });
    });

    // Export utils for potential future use
window.SoftwareThree = {
    utils: utils
};
