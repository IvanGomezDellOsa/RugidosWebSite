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

/* Servicios */
function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle("active");
}

document.querySelectorAll('.accordion_title').forEach((element) => {
    element.addEventListener('click', () => toggleAccordion(element));
});

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
