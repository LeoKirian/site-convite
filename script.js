document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU RESPONSIVO MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer item (no mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });


    // 2. ANIMAÇÃO SUAVE DE APARECIMENTO (Scroll Fade-In)
    // Monitora as seções para disparar o efeito visual quando entram na visualização
    const animatedElements = document.querySelectorAll('.animate-fade');
    
    const appearanceOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Executa apenas uma vez
            }
        });
    }, appearanceOptions);

    animatedElements.forEach(element => {
        appearanceObserver.observe(element);
    });


    // 3. CAPTURA E ENVIO DO FORMULÁRIO RSVP
    const rsvpForm = document.getElementById('form-rsvp');
    const formFeedback = document.getElementById('form-feedback');

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita o recarregamento padrão da página

        // Captura os campos inseridos pelo usuário
        const nome = document.getElementById('nome').value;
        const status = document.getElementById('status').value;
        const mensagem = document.getElementById('mensagem').value;

        // Feedback visual imediato de processamento
        formFeedback.style.color = '#7A7A7A';
        formFeedback.innerText = 'Enviando sua resposta...';

        /* DICA PRO PARA PRODUÇÃO:
           Aqui você pode conectar uma API como o Formspree ou SheetDB usando 'fetch'.
           Por ora, simularemos uma requisição assíncrona bem-sucedida de forma estática.
        */
        setTimeout(() => {
            formFeedback.style.color = '#8C9A86'; // Cor de sucesso oliva
            
            if (status === 'sim') {
                formFeedback.innerText = `Obrigado, ${nome}! Presença confirmada com sucesso.`;
            } else {
                formFeedback.innerText = `Obrigado pelo aviso, ${nome}. Sentiremos sua falta!`;
            }

            // Limpa o formulário após o sucesso
            rsvpForm.reset();
        }, 1200);
    });
});