/* ------------ Show Nav Bar ------------ */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    toggle.addEventListener("click", () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon');
    })
}

showMenu('nav-toggle', 'nav-menu')


/* ------------ Scroll Animation: Appear ---------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

/* ------------ Scroll Animation: Slide in ---------- */
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show-slide-in');
        }else{
            entry.target.classList.remove('show-slide-in');
        }
    });
});

const hiddenSlideInElement = document.querySelectorAll('.slide-in');
hiddenSlideInElement.forEach((element) => slideObserver.observe(element));

/* ------------ Scroll Animation: Slide Down ---------- */
const slideUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show-slide-up');
        }else{
            entry.target.classList.remove('show-slide-up');
        }
    });
});

const hiddenSlideUpElement = document.querySelectorAll('.slide-up');
hiddenSlideUpElement.forEach((element) => slideUpObserver.observe(element));


/* ------------ Light/Dark Theme Toggle ---------- */
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

})
