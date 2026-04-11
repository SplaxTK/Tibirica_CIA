(function() {
        // Smooth scroll para todos os links internos
        document.querySelectorAll('.nav-links a, .whatsapp-btn').forEach(anchor => {
            if(anchor.getAttribute('href') && anchor.getAttribute('href').startsWith('#')) {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            }
        });
        // Apenas para fins visuais: ativar classe no menu quando rolar (opcional)
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        function updateActiveNav() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    current = section.getAttribute('id');
                }
            });
            navItems.forEach(item => {
                item.style.background = '';
                item.style.color = '#4a3a2a';
                if(item.getAttribute('href') === `#${current}`) {
                    item.style.background = '#fef0db';
                    item.style.color = '#c27e2e';
                }
            });
        }
        window.addEventListener('scroll', updateActiveNav, { passive: true });
        updateActiveNav();
    })();
