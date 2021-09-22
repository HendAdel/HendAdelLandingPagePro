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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const navMenu = document.getElementById('navbar__list');
document.addEventListener('DOMContentLoaded', buildNavgation());


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavgation(){
    

console.log(sectionsList);
// get the navbar list to populate with nav items
const navigationFragment = document.createDocumentFragment();
for (const section of sectionsList) {
    // create nave item and its link
    const navItem = document.createElement('li');
    const sectionLink = document.createElement('a');
    sectionLink.href = `#${section.id}`;
    let sectionNo = section.dataset.nav;
    sectionLink.innerText = `${sectionNo}`;
    // append the lik to its nav item
    navItem.appendChild(sectionLink);
    // add css classes to the nav item
    navItem.className = "btn";
    // append the nav item to the document fragment
    navigationFragment.appendChild(navItem);
    console.log(navigationFragment);
    //section.appendChild(navItem);
}

navMenu.appendChild(navigationFragment);
console.log(navMenu);
console.log("in the end of buildNavgation function");
}
// Add class 'active' to section when near top of viewport
const scrollListener = window.addEventListener('scroll', setActiveSection());
function setActiveSection(){
    console.log("in setActiveSection function");
    let targetNavItem;
    let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
			console.log(entry);
            // ToDO: remove active class from all sections , and navegation items
            for (const section of sectionsList) {
                section.style.display = 'none';
                section.classList.remove("activeSection");
            }
            entry.target.classList.add("activeSection");
			//entry.target.src = entry.target.dataset.src;
            // ToDO: Add Active class to the section in viewport, and its item nav
            for (const navItem of navMenu.children) {
                navItem.style.display = 'none';
                navItem.classList.remove("active");
                if(entry.target.dataset.nav === navItem.innerText){
                    targetNavItem = navItem;
                }
            }
            for (const section of sectionsList) {
                section.style.display = 'block';
            }
            
            for (const navItem of navMenu.children) {
                navItem.style.display = 'block';
            }
            targetNavItem.classList.add("active");
            setTimeout(function sayHi() {
                console.log('Howdy');
            }, 1000);
			observer.unobserve(entry.target);
		}
		});
	}, {rootMargin: "0px 0px -200px 0px"});
	sectionsList.forEach(section => { observer.observe(section) });
    
}
// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const navLinks = document.querySelectorAll('li');
for (const navLink of navLinks) {
    navLink.addEventListener('click', scrollToSection);
}

// Set sections as active