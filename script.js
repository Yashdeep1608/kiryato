let currentLang = localStorage.getItem("lang") || "en";
const menuBtn = document.getElementById("menuBtn");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuOpen.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
});
async function loadLanguage(lang) {
  const response = await fetch(`./locals/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });

  // Update button text
  document.getElementById("langToggle").textContent =
    lang === "en" ? "हिन्दी" : "English";

  // Save preference
  localStorage.setItem("lang", lang);
}


document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "hi" : "en";
    loadLanguage(currentLang);
});
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
        button.querySelector('svg').classList.toggle('rotate-180');
    });
});

// Update year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize
loadLanguage(currentLang);
