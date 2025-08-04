"use strict";

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

/*NavBar scroll-effect*/

const observer_navbar = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const navlink = document.querySelector(
                    `.nav-link[href="#${id}"]`
                );
                if (navlink) {
                    navlink.classList.add("show");
                }
            } else {
                const id = entry.target.id;
                const navlink = document.querySelector(
                    `.nav-link[href="#${id}"]`
                );
                if (navlink) {
                    navlink.classList.remove("show");
                }
            }
        });
    },
    { threshold: 0.5 }
);

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
    observer_navbar.observe(section);
});

/* Slider_Extras */

const slides = document.querySelectorAll(".extras__container");
const slides_info = document.querySelectorAll(".extras__container__info");
const extras__buttons = document.getElementById("extras__buttons");
const pagination = document.getElementById("pagination");
const btn_left = document.getElementById("btn_left");
const btn_right = document.getElementById("btn_right");
const videosExtras = document.querySelectorAll(
    ".extras__container__video iframe"
);

var currentSlide = 0;

/* Se agregan los dots correspondientes a la cantidad de extras__container */
for (let index = 0; index < slides.length; index++) {
    const span = document.createElement("span");
    const i_tag = document.createElement("i");
    i_tag.className = "bx bx-circle";
    span.appendChild(i_tag);
    pagination.appendChild(span);
}

btn_right.addEventListener("click", function () {
    pauseCurrentVideo();
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove("active");
        const currentPaginationSlide =
            pagination.children[currentSlide].querySelector("i");
        currentPaginationSlide.classList.remove(
            "bx",
            "bx-circle",
            "bx-fade-up",
            "bx-flip-vertical"
        );
        currentPaginationSlide.classList.add("bx", "bx-circle");
        currentSlide++;
        slides[currentSlide].classList.add("active");
        slides_info[currentSlide].style.transform = "translateX(100vw)";
        requestAnimationFrame(() => {
            slides_info[currentSlide].style.transition = "1.5s ease";
            slides_info[currentSlide].style.transform = "translateX(0)";
        });
        pagination.children[currentSlide]
            .querySelector("i")
            .classList.add("bx", "bx-circle", "bx-fade-up", "bx-flip-vertical");
    }
});

btn_left.addEventListener("click", function () {
    pauseCurrentVideo();
    if (currentSlide > 0) {
        slides[currentSlide].classList.remove("active");
        const currentPaginationSlide =
            pagination.children[currentSlide].querySelector("i");
        currentPaginationSlide.classList.remove(
            "bx",
            "bx-circle",
            "bx-fade-up",
            "bx-flip-vertical"
        );
        currentPaginationSlide.classList.add("bx", "bx-circle");
        currentSlide--;
        slides[currentSlide].classList.add("active");
        slides_info[currentSlide].style.transform = "translateY(100vw)";
        requestAnimationFrame(() => {
            slides_info[currentSlide].style.transition = "1.5s ease";
            slides_info[currentSlide].style.transform = "translateY(0)";
        });
        pagination.children[currentSlide]
            .querySelector("i")
            .classList.add("bx", "bx-circle", "bx-fade-up", "bx-flip-vertical");
    }
});

/* Pausa video al cambiar de slide*/
function pauseCurrentVideo() {
    videosExtras.forEach(function (iframe) {
        iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
        );
    });
}

/* Servicios */
function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle("active");
}

/* NavBar Mobile */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);
