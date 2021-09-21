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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
document.addEventListener('DOMContentLoaded', buildNavgation());


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavgation(){
    console.log("in buildNavgation function");
// select all sections to make nav items for each one of them
let sectionsList = document.querySelectorAll('section');
console.log(sectionsList);
// get the navbar list to populate with nav items
let navMenu = document.getElementById('navbar__list');
console.log(navMenu);
const navigationFragment = document.createDocumentFragment();
console.log(navigationFragment);
for (const section of sectionsList) {
    
    const navItem = document.createElement('li');
    const sectionLink = document.createElement('a');
    sectionLink.href = `#${section.id}`;
    let sectionNo = section.dataset.nav;
    sectionLink.innerText = `${sectionNo}`;
    console.log(sectionLink);
    navItem.appendChild(sectionLink);
    navigationFragment.appendChild(navItem);
    console.log(navigationFragment);
    //section.appendChild(navItem);
}

navMenu.appendChild(navigationFragment);
console.log(navMenu);
console.log("in the end of buildNavgation function");
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active