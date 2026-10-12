const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("path");
const STORAGE_KEY = "elevvo-theme";
const MOON = "M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z";
const SUN =
    "M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" +
    "M11 1h2v3.2h-2zM11 19.8h2V23h-2zM1 11h3.2v2H1zM19.8 11H23v2h-3.2z" +
    "M3.5 4.9l1.4-1.4 2.3 2.3-1.4 1.4zM16.8 18.2l1.4-1.4 2.3 2.3-1.4 1.4z" +
    "M18.2 7.2l-1.4-1.4 2.3-2.3 1.4 1.4zM5.8 20.5l-1.4-1.4 2.3-2.3 1.4 1.4z";
    const saved = localStorage.getItem(STORAGE_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
apply(saved || (prefersDark ? "dark" : "light"));
toggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem(STORAGE_KEY, next);
});

function apply(theme) {
    document.documentElement.dataset.theme = theme;

    const dark = theme === "dark";
    icon.setAttribute("d", dark ? SUN : MOON);
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}