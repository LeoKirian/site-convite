document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU RESPONSIVO
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 2. ANIMAÇÃO DE APARECIMENTO (FADE-IN)
    const animatedElements = document.querySelectorAll('.animate-fade');
    const scrollContainer = document.querySelector('.scroll-container');
    
    const appearanceOptions = {
        root: scrollContainer, // Define que o scroll ocorre dentro deste container
        threshold: 0.3 // Dispara quando 30% do elemento estiver visível
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, appearanceOptions);

    animatedElements.forEach(element => {
        appearanceObserver.observe(element);
    });

    // 3. FORMULÁRIO RSVP
    const rsvpForm = document.getElementById('form-rsvp');
    const formFeedback = document.getElementById('form-feedback');

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const status = document.getElementById('status').value;

        formFeedback.style.color = '#7A7A7A';
        formFeedback.innerText = 'Processando...';

        setTimeout(() => {
            formFeedback.style.color = '#8C9A86'; 
            if (status === 'sim') {
                formFeedback.innerText = `Obrigado, ${nome}! Presença confirmada.`;
            } else {
                formFeedback.innerText = `Obrigado pelo aviso, ${nome}.`;
            }
            rsvpForm.reset();
        }, 1200);
    });
});