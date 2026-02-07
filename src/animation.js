function pageOneAnimation() {
  let tl = gsap.timeline();

  tl.from(
    ".nav-links img, .nav-links h1, .nav-links h4, .nav-links button, .menu-icon",
    {
      y: -30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
    },
  );

  let menu = document.querySelector(".menu-btn");
  let cross = document.querySelector(".menu-cross");

  let tlMenu = gsap.timeline();

  tlMenu.to(".menu-nav", {
    right: 0,
    top:0,
    duration: 0.3,
  });

  tlMenu.from(".menu-nav h4", {
    x: 200,
    opacity:0,
    duration: 0.2,
    stagger: 0.1,
  });
  tlMenu.from(".menu-nav i", {
    opacity: 0,
  });

  tlMenu.pause();
  menu.addEventListener("click", () => {
    tlMenu.play();
  });
  cross.addEventListener("click", () => {
    tlMenu.reverse();
  });

  
  tl.from(
    "#hero-left h3",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.8",
  );

  tl.from(
    "#hero-left h4",
    {
      x: -100,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.8",
  );

  tl.from(
    "#hero-left button",
    {
      opacity: 0,
      duration: 0.4,
    },
    "-=0.8",
  );

  tl.from(
    "#hero-right img",
    {
      opacity: 0,
      duration: 1,
    },
    "-=1.3",
  );

  tl.from(
    "#company-logos img",
    {
      y: 30,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
    },
    "-=0.6",
  );
}

pageOneAnimation();

function pageTwoAnimation() {
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      scroller: "body",
      start: "top 70%",
      end: "bottom 70%",
      scrub: 2,
    },
  });

  tl1.from("#services h3, #services p", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  // Line 1 animations
  tl1.from(
    ".line1.left",
    {
      x: -120,
      opacity: 0,
      duration: 0.5,
    },
    "left",
  );

  tl1.from(
    ".line1.right",
    {
      x: 120,
      opacity: 0,
      duration: 0.5,
    },
    "left",
  );

  // Line 2 animations (slight delay)
  tl1.from(
    ".line2.left",
    {
      x: -120,
      opacity: 0,
      duration: 0.5,
    },
    "right",
  );

  tl1.from(
    ".line2.right",
    {
      x: 120,
      opacity: 0,
      duration: 0.5,
    },
    "right",
  );
}

pageTwoAnimation();

function lastPageAnimation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".last-left",
      scroller: "body",
      start: "top 70%",
      end: "bottom 70%",
      scrub: 2,
    },
  });

  tl2.from(".last-left h4", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(".last-left p", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(".last-left button", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out",
  });

  tl2.from(
    ".last-right img",
    {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.7",
  );

  tl2.from(".last-bottom h4, .last-bottom p", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
}

lastPageAnimation();

function footerAnimation() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      scroller: "body",
      start: "top 90%",
      end: "top 70%",
      scrub: 2,
    },
  });

  tl3.from(".footerContent p", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl3.from(
    ".footerContent a",
    {
      scale: 0,
      opacity: 0,
      duration: 0.2,
    },
    "-=0.2",
  );
}

footerAnimation();
