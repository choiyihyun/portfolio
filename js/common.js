$(function () {
    const menuBtn = document.querySelector('.menu-button');
    const sideMenu = document.querySelector('.side-menu');

    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    const cursor = document.querySelector('.custom-cursor');

    window.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });


    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".falling-img", {
        y: 2900,
        scrollTrigger: {
            trigger: ".falling-img",
            start: "top top",
            end: "bottom+=3400 top",
            scrub: true,
        },
    });


});