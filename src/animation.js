function pageOneAnimation() {
  let tl = gsap.timeline();

  tl.from("nav img, nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.15,
  });

  tl.from("#hero-left h3", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });

  tl.from("#hero-left h4", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });

  tl.from("#hero-left button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    "#hero-right img",
    {
      opacity: 0,
      duration: 1,
    },
    "-=0.5",
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

function footerAnimation () {
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
  y:30,  
  opacity: 0,
  duration: 0.5,
});

tl3.from(".footerContent a", {
  scale:0,  
  opacity: 0,
  duration: 0.2,
}, "-=0.2");
}

footerAnimation();