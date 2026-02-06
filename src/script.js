const services = [
  {
    id: 1,
    service: "CCTV installation and Maintanance",
    image:
      "https://media.istockphoto.com/id/1446045839/photo/outdoor-security-camera-cctv-secure-monitoring-concept-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=IpnvFOzJKRZMhfEmHi0M6vfmNFQYYBThhjs-h9_5GdA=",
    url: "#",
  },
  {
    id: 2,
    service: "IT services",
    image:
      "https://media.istockphoto.com/id/1304484797/photo/person-holds-a-smartphone-with-mobile-banking-icons-projection.webp?a=1&b=1&s=612x612&w=0&k=20&c=U9QPGZChpjw1s6TbQWF__9uikMB7LggvKbkqZC3qtZQ=",
    url: "#",
  },
  {
    id: 3,
    service: "Social media marketing",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "#",
  },
  {
    id: 4,
    service: "E-mail marketing",
    image:
      "https://plus.unsplash.com/premium_photo-1679843063416-30e7fe42f095?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "#",
  },
];

const container = document.querySelector("#cards");

services.forEach((item, idx) => {
  if (idx === 0 || idx === 3) {
    // Card
    const card = document.createElement("div");
    
    if (idx === 0){
      card.className =
      "left line1 relative h-[35vh] w-[full] md:w-[50%] lg:w-[45%] p-4 bg-white text-black border-2 border-black border-b-5 rounded-xl flex justify-between items-start gap-4 overflow-hidden shadow-lg hover:scale-105";
    } else {
      card.className =
      "right line2 relative h-[35vh] w-[full] md:w-[50%] lg:w-[45%] p-4 bg-white text-black border-2 border-black border-b-5 rounded-xl flex justify-between items-start gap-4 overflow-hidden shadow-lg hover:scale-105";
    }

    // Title
    const title = document.createElement("h3");
    title.textContent = item.service;
    title.className =
      "text-xl font-semibold bg-green-400 px-4 py-2 rounded max-w-[60%]";

    // Image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.service;
    img.className =
      "h-full w-[40%] object-cover rounded grayscale hover:grayscale-0 transition";

    // Button (link style)
    const btn = document.createElement("a");
    btn.href = item.url;
    btn.className =
      "absolute left-5 bottom-5 h-9 w-9 rounded-full flex items-center justify-center border border-black bg-black text-white hover:bg-white hover:text-black";

    // Icon
    const icon = document.createElement("i");
    icon.className = "ri-arrow-right-up-line";
    //para
    const learnMore = document.createElement("p");
    learnMore.className =
      "text-black text-base font-medium absolute left-16 bottom-6";
    learnMore.textContent = "Learn more";

    // Append
    btn.appendChild(icon);
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(btn);
    card.appendChild(learnMore);
    container.appendChild(card);
  } else {
    // Card
    const card = document.createElement("div");
     if (idx === 1){
      card.className =
      "right line1 relative h-[35vh] w-[full] md:w-[50%] lg:w-[45%] p-4 bg-white text-black border-2 border-black border-b-5 rounded-xl flex justify-between items-start gap-4 overflow-hidden shadow-lg hover:scale-105 ";
    } else {
      card.className =
      "left line2 relative h-[35vh] w-[full] md:w-[50%] lg:w-[45%] p-4 bg-white text-black border-2 border-black border-b-5 rounded-xl flex justify-between items-start gap-4 overflow-hidden shadow-lg hover:scale-105 ";
    }

    // Title
    const title = document.createElement("h3");
    title.textContent = item.service;
    title.className =
      "text-xl font-semibold bg-white text-black px-4 py-2 rounded max-w-[60%]";

    // Image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.service;
    img.className =
      "h-full w-[40%] object-cover rounded grayscale hover:grayscale-0 transition";

    // Button (link style)
    const btn = document.createElement("a");
    btn.href = item.url;
    btn.className =
      "absolute left-5 bottom-5 h-9 w-9 rounded-full flex items-center justify-center border border-black bg-white text-black hover:bg-black hover:text-white";

    // Icon
    const icon = document.createElement("i");
    icon.className = "ri-arrow-right-up-line";
    //para
    const learnMore = document.createElement("p");
    learnMore.className =
      "text-white text-base font-medium absolute left-16 bottom-6";
    learnMore.textContent = "Learn more";

    // Append
    btn.appendChild(icon);
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(btn);
    card.appendChild(learnMore);
    container.appendChild(card);
  }
});

const footer = [
  {
    id: 1,
    text: "Technology is most powerful when it earns trust. At Silver Tools Enterprises, we combine reliable IT services with intelligent security solutions to protect businesses, streamline operations, and build systems that work consistently, securely, and efficiently in an ever-evolving digital landscape.",
    url: "#",
  },
  {
    id: 2,
    text: "True security is not just surveillance, it is confidence. Our CCTV and IT solutions are designed to safeguard people, data, and infrastructure while enabling smarter decisions, uninterrupted workflows, and peace of mind for organizations that value safety and long-term reliability.",
    url: "#",
  },
  {
    id: 3,
    text: "Innovation drives progress, but reliability sustains growth. We deliver technology solutions that adapt to changing needs, empower teams, and secure assets, helping businesses scale with clarity, control, and confidence in a competitive and technology-driven world.",
    url: "#",
  },
];

const footerContainer = document.querySelector("#footer");

footer.forEach((item) => {
  // Wrapper
  const container = document.createElement("div");
  if (item.id !== 3) {
    container.className =
    "footerContent flex flex-col h-[80%] items-start gap-4 bg-black border-r-2 border-gray-600 pr-5";
  } else {
    container.className =
    "footerContent flex flex-col h-[80%] items-start gap-4 bg-black";
  }

  // Quote text
  const text = document.createElement("p");
  text.textContent = item.text;
  text.className = "text-lg text-white md:text-base leading-tight";

  // Learn more link
  const learnMoreBtn = document.createElement("a");
  learnMoreBtn.href = item.url;
  learnMoreBtn.className =
    "flex items-center gap-2 text-sm font-medium hover:opacity-80";

  // Learn more text
  const learnMoreText = document.createElement("span");
  learnMoreText.className = "text-base text-green-400 ";
  learnMoreText.textContent = "Learn More";

  // Icon
  const icon = document.createElement("i");
  icon.className = "ri-arrow-right-up-line text-lg text-white";

  // Append
  learnMoreBtn.appendChild(learnMoreText);
  learnMoreBtn.appendChild(icon);
  container.appendChild(text);
  container.appendChild(learnMoreBtn);
  footerContainer.appendChild(container);
});
