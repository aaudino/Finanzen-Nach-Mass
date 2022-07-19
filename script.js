






// ###################################
//    HELPER FUNCTIONS 
// ###################################

const multitoggle= (el, ...args)=>{
  args.map(e =>el.classList.toggle(e))
  }



// ###################################
//    INTERSECTION
// ###################################
const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      console.log(entry.target);
      const currentSection = entry.target
      const sectionName = entry.target.id
      console.log(currentSection);
      currentSection.classList.remove(`${sectionName}__section--hidden`)
      observer.unobserve(entry.target)
    }
    
  })

},{threshold:0.15})

sections.forEach(section=>{
  observer.observe(section)
})


  
// ###################################
//    NAVBAR
// ###################################

const navButton = document.querySelector(".navbar__menu--button");
const navBackground = document.querySelector(".navbar__menu--background");
const navNav = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__list--link");

const toggleMenu = function (scaleFactor, opacity, width) {
  navBackground.style.transform = `scale(${scaleFactor})`;
  navNav.style.opacity = `${opacity}`;
  navNav.style.width = `${width}`;
};

const activateMenu = function () {
  navLinks.forEach((el) => el.classList.toggle("disable"));
  if (navButton.classList.contains("closed")) {
    toggleMenu("100", "1", "100%");
  } else {
    toggleMenu("0", "0", "0%");
  }
  navButton.classList.toggle("closed");
  let icon = navButton.firstChild;
  icon.name === "menu-outline"
    ? (icon.name = "close-circle-outline")
    : (icon.name = "menu-outline");
};

navButton.addEventListener("click", function () {
  activateMenu();
});

navLinks.forEach((l) => {
  l.addEventListener("click", function () {
    activateMenu();
  });
});

// ###################################
//            INTRO TEXT
// ###################################
const text = document.querySelector(".subheadingContainer__heading--animated");

const textload = () => {
  setTimeout(() => {
    text.textContent = "Nachhaltig investieren ?";
  }, 200);
  setTimeout(() => {
    text.textContent = "Gewinnbringend anlegen ?";
  }, 4200);

  setTimeout(() => {
    text.textContent = "Beratung auf Augenhöhe ? ";
  }, 8200);
};

textload();
setInterval(textload, 12000);

// ###################################
//           Review - Fulltext
// ###################################

const reviewIcon = document.querySelectorAll(".reviewCard__icon");
const cardContainer = document.querySelector(".reviews__grid");
const reviewCards = document.querySelectorAll(".reviewCard");
cardContainer.addEventListener("click", function (e) {
  // Return if no review icon is nearby - guard clause
  if (!e.target.closest(".reviewCard__icon")) {
    return;
  }
const clicked = e.target.closest(".reviewCard__icon");
const activatedReview = clicked.nextElementSibling;
const activatedCard = clicked.parentElement;

reviewCards.forEach(rc => {
rc.classList.remove("reviewCard--active")
const fulltextHidden = rc.querySelector(".reviewCard__review--ftHidden")
fulltextHidden.classList.remove("reviewCard__review--ftActive")
fulltextHidden.style.color = "transparent"
})
if (!clicked.classList.contains("reviewCard__icon--rotated")) {
  activatedReview.classList.add("reviewCard__review--ftActive");
  activatedCard.classList.add("reviewCard--active");
  setTimeout(function () {
    activatedReview.style.color = "inherit";
  }, 200);
  reviewIcon.forEach((i) => {
    i.classList.remove("reviewCard__icon--rotated");
  });
  clicked.classList.add("reviewCard__icon--rotated");
}
else{
  clicked.classList.remove("reviewCard__icon--rotated");
}
})

const serviceBtns = document.querySelectorAll(".serviceCard__btn");

serviceBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const side = btn.parentElement;
    let backside;
    if (
      btn.previousElementSibling.classList.contains("serviceCard__back__text")
    ) {
      backside = side.previousElementSibling;
      multitoggle(backside,"serviceCard__front--rotated","serviceCard__side--rotated")
      multitoggle(side,"serviceCard__back--rotated","serviceCard__side--rotated")
    } else {
      backside = side.nextElementSibling;
      backside.classList.toggle("serviceCard__back--rotated");
      multitoggle(side,"serviceCard__front--rotated","serviceCard__side--rotated")
    }
  });
});
