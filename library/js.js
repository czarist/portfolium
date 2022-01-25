window.addEventListener('load', function () {


    let cardSelect = document.getElementById('card-select');
    let languageContent = document.getElementById('language-content');
    let seta = document.getElementById('seta');

    cardSelect.addEventListener("click", function (e) {
        if (languageContent.classList.contains('d-none')) {
            languageContent.classList.remove('d-none')
            seta.classList.remove('bi-caret-down-fill')
            seta.classList.add('bi-caret-up-fill')
        } else {
            languageContent.classList.add('d-none')
            seta.classList.add('bi-caret-down-fill')
            seta.classList.remove('bi-caret-up-fill')
        }
    });

    var div = document.getElementById('log');
    var textos = [
        'Bem vindo ao meu site',
        'Welcome to my personal website',
        'Bienvenido a mi sitio',
        '私の個人的なウェブサイトへようこそ',
        '欢迎来到我的个人网站',
        '내 개인 웹사이트에 오신 것을 환영합니다',
        'Добро пожаловать на мой личный сайт',
        'Witam na mojej osobistej stronie internetowej'
    ];

    function escrever(str, done) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) {
                clearInterval(typer);
                return setTimeout(done, 200); // só para esperar um bocadinho
            }
            var next = char.pop();
            div.innerHTML += next;
        }, 100);
    }

    function limpar(done) {
        var char = div.innerHTML;
        var nr = char.length;
        var typer = setInterval(function () {
            if (nr-- == 0) {
                clearInterval(typer);
                return done();
            }
            div.innerHTML = char.slice(0, nr);
        }, 100);
    }

    function rodape(conteudos, el) {
        var atual = -1;

        function prox(cb) {
            if (atual < conteudos.length - 1) atual++;
            else atual = 0;
            var str = conteudos[atual];
            escrever(str, function () {
                limpar(prox);
            });
        }
        prox(prox);
    }
    rodape(textos);

    // fim texto

    particlesJS('my-particles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 },
                image: { src: 'img/github.svg', width: 100, height: 100 },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true,
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    });
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (
            window.pJSDom[0].pJS.particles &&
            window.pJSDom[0].pJS.particles.array
        ) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
});