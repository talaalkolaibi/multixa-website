const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

const floatingWhatsappBtn = document.getElementById("floating-whatsapp-btn");
const floatingWhatsappOptions = document.getElementById("floating-whatsapp-options");

floatingWhatsappBtn.addEventListener("click", () => {
    floatingWhatsappOptions.classList.toggle("active");
});

const languageToggle = document.getElementById("language-toggle");
let currentLanguage = "en";

languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en]").forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });

    document.querySelectorAll("[data-placeholder-en]").forEach(element => {
        element.placeholder = element.getAttribute(`data-placeholder-${currentLanguage}`);
    });

    languageToggle.textContent = currentLanguage === "en" ? "عربي" : "English";
});

const openTerms = document.getElementById("open-terms");
const closeTerms = document.getElementById("close-terms");
const termsModal = document.getElementById("terms-modal");

openTerms.addEventListener("click", () => {
    termsModal.classList.add("active");
});

closeTerms.addEventListener("click", () => {
    termsModal.classList.remove("active");
});

termsModal.addEventListener("click", (e) => {
    if (e.target === termsModal) {
        termsModal.classList.remove("active");
    }
});