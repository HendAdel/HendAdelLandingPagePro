/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// select all sections to make nav items for each one of them
const sectionsList = document.querySelectorAll('section');

// Save the ul elment to variable to add navgation items to it
const navMenu = document.getElementById('navbar__list');
// Make a document fragment to add the nav. menu to it.
const navigationFragment = document.createDocumentFragment();
const links = document.querySelectorAll('a');

// init the observer
const options = {
    threshold: 0.50
}


// Add class 'active' to section when near top of viewport
const observer = new IntersectionObserver(setActiveSection, options);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Add event listener to build the navgation menu, after DOM loaded
document.addEventListener('DOMContentLoaded', buildNavgation());


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

sectionsList.forEach((section) => {
    observer.observe(section);
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// build the navgation menu
function buildNavgation() {
    // Populate the navbar list with nav items
    for (const section of sectionsList) {
        // create nave item and its link
        const navItem = document.createElement('li');
        const sectionLink = document.createElement('a');
        sectionLink.href = `#${section.id}`;
        sectionLink.className = "menu__link";
        if (section.id === "section1") {
            sectionLink.classList.add('active');
        }
        let sectionNo = section.dataset.nav;
        sectionLink.innerText = `${sectionNo}`;

        // append the lik to its nav item
        navItem.appendChild(sectionLink);
        // add css classes to the nav item
        navItem.className = "menu__link";

        // Scroll to section using scrollIntoView
        sectionLink.addEventListener('click', function (event) {
            event.preventDefault;
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        });


        // append the nav item to the document fragment
        navigationFragment.appendChild(navItem);
    }
    // Add the document fragment to ul elment
    navMenu.appendChild(navigationFragment);

}



// Set sections as active
function setActiveSection(entries, observer) {

    let targetNavItem;    
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.50) {

            document.querySelector('.activeSection').classList.remove('activeSection');
            document.querySelector('.active').classList.remove('active');
            // get id of the intersecting section
            let id = entry.target.getAttribute('id');

            // find matching link & add appropriate class
            let newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
            let newSection = document.getElementById(id).classList.add('activeSection');
        }
    });

}

// add responsive when the screen goes small
const navigationBar = document.getElementById("nav");

function myFunction() {
	navigationBar.classList.toggle('responsive');
}

window.addEventListener('resize', () => {
	if (window.innerWidth >= 600 && navigationBar.classList.contains('responsive')) {
		navigationBar.classList.remove('responsive');
	}
    else{
        navigationBar.classList.add('responsive');
    }
});