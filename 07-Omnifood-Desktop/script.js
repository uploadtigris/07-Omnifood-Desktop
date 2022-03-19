console.log("Hello World!");

// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make Mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open');
  // using classList because we want to work with classes
});

///////////////////////////////////////////////////////////
//Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    // prevents the page from jumping to href element after click
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === "#") 
      window.scrollTo({
        top:0,
        behavior:"smooth",
    });

    // scroll to other links
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // close mobile navigaiton
    if(link.classList.contains('main-nav-link'))
    // if main-nav-link in the classList of link,
    // toggle the nav-open off
    headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
//Sticky Navigation

const sectionHeroEl = document.querySelector(".seciton-hero");

const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false) {
      document.querySelector('.header').classList.add('sticky')
    }
}, 
{
  // In the viewport
  root: null,
  // will have an event when 0% of the hero section is inside the viewport
  threshold: 0
});
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();



/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
