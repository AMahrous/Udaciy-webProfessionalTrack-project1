/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section near top of viewport upon scrolling.
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
var hide;

const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('.landing__container');


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

// build the nav
for (var num = 1;num <= sections.length; num++)
{
    const createdItem = document.createElement('li');
    const createdItemContent = `<a href="#section${num}" id="section${num}Button">Section ${num}</a>`; 
    createdItem.insertAdjacentHTML("afterbegin",createdItemContent);
    createdItem.querySelector('a').classList.add('menu__link');
    navBarList.appendChild(createdItem)
}



// Scroll event
document.addEventListener('scroll', function (event) {

    // Show the nav_bar while scrolling and hide otherwise.
    document.querySelector('.page__header').style.top ='0px';
    clearTimeout(hide);
    hide = setTimeout(function (){
        document.querySelector('.page__header').style.top ='-100px';
    },1500);

    // Views the floating "scroll to the top" button when the user scrolls below the fold of the page.
    if(scrollY > window.innerHeight)
    {
        document.querySelector('.floatingButton').style.display = 'block';
    }
    else
    {
        document.querySelector('.floatingButton').style.display = 'none';
    }

    
    
    // Add class 'active' to section when near top of viewport

    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');
    const section3 = document.querySelector('#section3');
    const section4 = document.querySelector('#section4');

    const section1Y = section1.getBoundingClientRect()['y'];
    const section2Y = section2.getBoundingClientRect()['y'];
    const section3Y = section3.getBoundingClientRect()['y'];
    const section4Y = section4.getBoundingClientRect()['y'];
    
    // Section 1 is near top of viewport.
    if (section1Y >= -100 && section1Y <=400)
    {
        section1.classList.add('your-active-class');
        section2.classList.remove('your-active-class');
        section3.classList.remove('your-active-class');
        section4.classList.remove('your-active-class');
    }

    // Section 2 is near top of viewport.
    else if (section2Y >= -100 && section2Y <=400)
    {
        section1.classList.remove('your-active-class');
        section2.classList.add('your-active-class');
        section3.classList.remove('your-active-class');
        section4.classList.remove('your-active-class');
    }

    // Section 3 is near top of viewport.
    else if (section3Y >= -100 && section3Y <=400)
    {
        section1.classList.remove('your-active-class');
        section2.classList.remove('your-active-class');
        section3.classList.add('your-active-class');
        section4.classList.remove('your-active-class');
    }

    // Section 4 is near top of viewport.
    else if (section4Y >= -100 && section4Y <=400)
    {
        section1.classList.remove('your-active-class');
        section2.classList.remove('your-active-class');
        section3.classList.remove('your-active-class');
        section4.classList.add('your-active-class');
    }

    // None of the sections is near top of viewport.
    else
    {
        section1.classList.remove('your-active-class');
        section2.classList.remove('your-active-class');
        section3.classList.remove('your-active-class');
        section4.classList.remove('your-active-class');
    }
});


// Click event.
document.addEventListener('click',function (event) {
    
    // Moves to the section tied with th clicked anchor
    if (event.target.nodeName.toLowerCase() === 'a' )
    {
        event.preventDefault();
        const activeSectionId = event.target.id.slice(0,8).toLowerCase();
        const activeSection = document.querySelector(`#${activeSectionId}`);
        activeSection.scrollIntoView({behavior: "smooth"});
    }
    

    // Scroll to top when floating button is clicked.
    if(event.target.nodeName.toLowerCase() === 'button')
    {
        window.scrollTo({top: 0,left: 0,behavior: 'smooth'});
    }
});




