"use strict";

// Access To Nav Links And Burger Bar
const burgerBar = document.getElementById("burger-bar");
const navLinks = document.querySelector(".nav-links");

burgerBar.addEventListener("click", activeItems);

// Create Active items Function
function activeItems() {
    // Check For burgerBar
    if (!this.classList.contains("toggle")) {
        // Add Toggle Class To burgerBar
        this.classList.add("toggle");

    } else {
        // Remove Toggle Class From burgerBar
        this.classList.remove("toggle");
    };

    // Check For navLinks
    if (!navLinks.classList.contains("active")) {
        // Add Active Class To Nav Links
        navLinks.classList.add("active");

    } else {
        // Remove Active Class From Nav Links
        navLinks.classList.remove("active");
    };
};
//=========================================================================
/*
[Login && Regeister Form]
- Access To User Btn (icon)
- Acess To app-form Parent
- Access To Close Form Btn
- Acess To Form
- Access To From Btns > Login && Regeister
*/

const userBtn = document.getElementById("user");
const appForm = document.getElementById("app-form");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const form = document.getElementById("form");
const formBtns = Array.from(form.firstElementChild.children);
const loginBtn = form.firstElementChild.children[0];
const regeisterBtn = form.firstElementChild.children[1];

// Step [1] Active && Hide App Form
userBtn.addEventListener("click", activeAppForm);
closeBtn.addEventListener("click", hideAppForm);

// Create activeAppForm Function
function activeAppForm() {
    // Add Active Calss To app-form Parent
    appForm.classList.add("active");


    // Remove Toggle Class From burgerBar
    burgerBar.classList.remove("toggle");

    // Remove Active Class From Nav Links
    navLinks.classList.remove("active");
};

// Create hideAppForm Function
function hideAppForm() {
    // Remove Active Calss From app-form Parent
    appForm.classList.remove("active");
};

// Step [2] Add Active Class To Current Btn
formBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        formBtns.forEach(btn => {
            // Remove Active Class From All Btn
            btn.classList.remove("active");
        });

        // Add Active Class To All Btn
        e.currentTarget.classList.add("active");
    });
});

// Step [3] Switch Between Login && Regeister Form
regeisterBtn.onclick = _ => {
    // Calling activeRegeisterForm
    activeRegeisterForm(form);
};

loginBtn.onclick = _ => {
    // Calling activeLoginBtnForm
    activeLoginBtnForm(form);
};

// Active Regeister Form Function
function activeRegeisterForm(form) {
    // Check Form contains Switch Class?
    if (!form.classList.contains("switch")) {
        // Add Switch Calss To Form
        form.classList.add("switch");
    };
};

// Active Login Form
function activeLoginBtnForm(form) {
    // Check Form contains Switch Class?
    if (form.classList.contains("switch")) {
        // Remove Switch Calss From Form
        form.classList.remove("switch");
    };
};
//=========================================================================
/*
[Home Page Slides]
- Access To All Slides
*/

const slides = document.querySelectorAll("#home .slide");


let counter = 0;

// Step[1] Looping On Slides
slides.forEach((slide, i) => {
    slide.style.left = `${i * 100}%`;
});


// Create Next Slider Function
let nextSlider = _ => {
    // increase Counter by One
    counter++;
    // Run carousel Function
    carousel();
};

// Create Previous Slider Function
let prevSlider = _ => {
    // increase Counter by One
    counter--;
    // Run carousel Function
    carousel();
};


// Step[3] Create Carousel Function
function carousel() {

    if (counter > slides.length - 1) {
        counter = 0;
    };

    if (counter < 0) {
        counter = slides.length - 1;
    };

    // Looping On Slides
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Step[4] Auto Slide
function autoSlide() {
    // Calling carousel function
    counter++;
    carousel();
};

setInterval(autoSlide, 5000);
//========================================================================
/*
[When Window Scrolling]
- Sticky Header
*/

// Access To Header
const header = document.getElementById("header");

// addEventListener(Scroll) To Window Object
window.addEventListener("scroll", windowScroll);


// Create Window Scroll Function
function windowScroll() {
    // if Window ScrollY >= 50
    if (window.scrollY >= 50) {
        // Add sticky-header Class To Header
        header.classList.add("sticky-header");

    } else {
        // Remove sticky-header Class From Header
        header.classList.remove("sticky-header");
    };


    // Remove toggle Class From burgerBar
    burgerBar.classList.remove("toggle");

    // Remove Active Class From Nav Links
    navLinks.classList.remove("active");
};
//========================================================================

/*
[Courses Page]
- Laoding Courses Cards
*/
const courses = [
    {imgSrc: "img/course-2-7.jpg", gategory: "teaching"},
    {imgSrc: "img/course-2-8.jpg", gategory: "dessign"},
    {imgSrc: "img/course-2-9.jpg", gategory: "dancing"},
];

// Convert Courses Array To JSON
let jsonCourses = JSON.stringify(courses);

// Set JSON Courses To localStorage
localStorage.setItem("courses", jsonCourses);


// Create Famous Courses Function
let famousCourses = _ => {
    // Run loadCoursesCards When Click To Load Btn
    loadCoursesCards(document.querySelector("#famous-courses .categories"));
};


// Create Load Courses Cards Function
function loadCoursesCards(cardsContainer) {

    if (localStorage.length > 0) {
        // Get JSON Courses From localStorage
        const coursesArray = JSON.parse(localStorage.getItem("courses"));

        // Looping On Courses Array
        coursesArray.forEach(course => {
            // Freeze The Object
            Object.freeze(course);

            // Get Card Img From Course Obj
            let cardImg = course.imgSrc;
            // Get Card Gategory From Course Obj
            let cardCategory = course.gategory;

            // Create Card Div
            let div = document.createElement("div");
            div.className = "card";

            // Set Course Data To Card
            div.innerHTML = `
            <img src="${cardImg}" class="img-fluid">
            <div class="card-body">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h3 class="heading">learn what's best for you!</h3>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum quod ducimus iusto ullam tenetur veniam!
                </p>
                <a href="#" class="special-link">read more</a>
                <div class="info">
                    <div class="modules-count box">
                        <i class="fas fa-book"></i>
                        <span>12 modules</span>
                    </div>
                    <div class="course-duration box">
                        <i class="fas fa-clock"></i>
                        <span>6 hour</span>
                    </div>
                </div>
            </div>
            <span class="category">${cardCategory}</span>`;

            // Append Card Div To Cards Container
            cardsContainer.appendChild(div);
        });
    };
};
//========================================================================
/*
[Frequently Asked Question]
- Courses Page
- Show && Hied Answer
*/

// Access To All Toggle Btn
const togglesBtns = document.querySelectorAll("#questions .toggle");

// Access To All Accordion
const accordions = document.querySelectorAll("#questions .accordion");

// Looping On All Toggle Btn
togglesBtns.forEach(btn => {
    // addEventListener To Toggle Btn && Run accordionSwitch Fun
    btn.addEventListener("click", accordionSwitch);
});


// Create Accordion Switch Function
function accordionSwitch() {
    "use strict";

    // Get Data Toggle Attr
    const dataToggle = this.getAttribute("data-toggle");

    // Looping On All Accordion
    accordions.forEach(accordion => {

        // Get Data Ques Att
        const dataQues = accordion.getAttribute("data-ques");

        // if Data Toggle Attr === Data Ques Att
        if (dataToggle === dataQues) {
            // Toggle Show Class To Accordion
            accordion.classList.toggle("show");

        } else {
             // Remove Show Class From All Accordion
            accordion.classList.remove("show");
        };
    });
};
//===============================================