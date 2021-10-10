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

// Add event listener to build the navgation menu, after DOM loaded
document.addEventListener('DOMContentLoaded', buildNavgation());

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navgation menu
function buildNavgation(){

    // Make a document fragment to add the nav. menu to it.
const navigationFragment = document.createDocumentFragment();

// Populate the navbar list with nav items
for (const section of sectionsList) {

    // create nave item and its link
    const navItem = document.createElement('li');
    const sectionLink = document.createElement('a');
    sectionLink.href = `#${section.id}`;
    sectionLink.className = "menu__link";
    if(section.id === "section1"){
        sectionLink.classList.add('active');
    }
    let sectionNo = section.dataset.nav;
    sectionLink.innerText = `${sectionNo}`;

    // append the lik to its nav item
    navItem.appendChild(sectionLink);
    // add css classes to the nav item
    navItem.className = "menu__link";
    // append the nav item to the document fragment
    navigationFragment.appendChild(navItem);

    //TODO: Delete after finish testings
    console.log(navigationFragment);
    
}
// Add the document fragment to ul elment
navMenu.appendChild(navigationFragment);

//TODO: Delete after finish testings
console.log(navMenu);
console.log("in the end of buildNavgation function");
}

// init the observer
const options = {
	threshold: 0.50
}


// Add class 'active' to section when near top of viewport
const observer = new IntersectionObserver(setActiveSection, options);
// const scrollListener = window.addEventListener('scroll', setActiveSection());



sectionsList.forEach((section) => {
	observer.observe(section);
});

function setActiveSection(entries, observer){
    console.log("in setActiveSection function");
    let targetNavItem;
    // let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting && entry.intersectionRatio >= 0.50){
			console.log(entry);
            document.querySelector('.activeSection').classList.remove('activeSection');
            document.querySelector('.active').classList.remove('active');
			// get id of the intersecting section
			let id = entry.target.getAttribute('id');
            console.log(id);
			// find matching link & add appropriate class
			let newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
            let newSection = document.getElementById(id).classList.add('activeSection');
console.log(newLink);
            /*
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
            targetNavItem.classList.add("active");
            for (const section of sectionsList) {
                section.style.display = 'block';
            }
            
            for (const navItem of navMenu.children) {
                navItem.style.display = 'block';
            }*/
           
           /*  setTimeout(function sayHi() {
                console.log('Howdy');
            }, 1000); */
//			observer.unobserve(entry.target);
		}
		});
	// }, {rootMargin: "0px 0px -200px 0px"});
// });
	// sectionsList.forEach(section => { observer.observe(section) });
    
}
// Scroll to anchor ID using scrollTO event

const links = document.querySelectorAll('a');
const thirdField = links[2];
for (const navItem of navMenu.children) {
 // TODO: Check the project requerments and tiips to see if the listener on the a link or li element
    navItem.addEventListener('click', function scrollToSection(event) {
    console.log('a link clicked');
    event.preventDefault;
    navItem.scrollIntoView({behavior:"smooth", block: "center"});
});   
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active