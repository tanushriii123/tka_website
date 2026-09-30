/* ================= MOBILE MENU ================= */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================= COURSE FILTER ================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        courseCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ================= COURSE MODAL ================= */

const courseModal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");


function showCourse(courseName) {

    modalTitle.textContent = courseName;

    courseModal.classList.add("active");

}


function closeCourse() {

    courseModal.classList.remove("active");

}


/* Close modal when clicking outside */

courseModal.addEventListener("click", (event) => {

    if (event.target === courseModal) {

        closeCourse();

    }

});


/* ================= FAQ ================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== currentItem) {

                item.classList.remove("active");

            }

        });

        currentItem.classList.toggle("active");

    });

});


/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(
                    counter.getAttribute("data-target")
                );

                let current = 0;

                const increment = target / 80;

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target + "+";

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const course =
        document.getElementById("course").value;

    formMessage.textContent =
        `Thank you, ${name}! Your enquiry for ${course} has been received.`;

    contactForm.reset();

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".course-card, .why-card, .testimonial-card, .stat-box"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "0.6s ease";

    revealObserver.observe(element);

});