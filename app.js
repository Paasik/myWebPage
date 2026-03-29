/* MENÜÜ JA CONTACT */

const menuPanel = document.getElementById("menuPanel");
const contactPanel = document.getElementById("contactPanel");
const overlay = document.getElementById("overlay");

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

const openContactDesktop = document.getElementById("openContactDesktop");
const openContactMenu = document.getElementById("openContactMenu");
const openContactSection = document.getElementById("openContactSection");
const closeContact = document.getElementById("closeContact");

function closeAllPanels() {
  menuPanel.classList.remove("active");
  contactPanel.classList.remove("active");
  overlay.classList.remove("active");
}

function openMenuPanel() {
  contactPanel.classList.remove("active");
  menuPanel.classList.add("active");
  overlay.classList.add("active");
}

function openContactPanel() {
  menuPanel.classList.remove("active");
  contactPanel.classList.add("active");
  overlay.classList.add("active");
}

openMenu.addEventListener("click", openMenuPanel);
closeMenu.addEventListener("click", closeAllPanels);

openContactDesktop.addEventListener("click", (e) => {
  e.preventDefault();
  openContactPanel();
});

openContactMenu.addEventListener("click", (e) => {
  e.preventDefault();
  openContactPanel();
});

openContactSection.addEventListener("click", (e) => {
  e.preventDefault();
  openContactPanel();
});

closeContact.addEventListener("click", closeAllPanels);
overlay.addEventListener("click", closeAllPanels);

document.querySelectorAll(".side-link").forEach(link => {
  link.addEventListener("click", () => {
    if (link.id !== "openContactMenu") {
      closeAllPanels();
    }
  });
});

/* MOBIILIVAATE MY WORKS PILDID */

const mobileWorkImage = document.getElementById("mobileWorkImage");

const workImages = [
  "images/1.webp",
  "images/2.webp",
  "images/3.webp",
  "images/4.webp",
  "images/5.webp",
  "images/6.webp"
];

let currentWorkIndex = 0;

if (mobileWorkImage) {
  mobileWorkImage.addEventListener("click", () => {
    currentWorkIndex++;

    if (currentWorkIndex >= workImages.length) {
      currentWorkIndex = 0;
    }

    mobileWorkImage.src = workImages[currentWorkIndex];
  });
}

/* VORMI TEST */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent!");
    contactForm.reset();
  });
}