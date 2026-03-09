const themeKey = 'szTheme';

function applyTheme(themeValue) {
    const themeLink = document.getElementById("theme-style");
    if (!themeLink) return;
    themeLink.setAttribute("href", themeValue === "alt" ? "style2.css" : "style.css");
}

function changeTheme() {
    const current = localStorage.getItem(themeKey) === "alt" ? "alt" : "default";
    const next = current === "alt" ? "default" : "alt";
    localStorage.setItem(themeKey, next);
    applyTheme(next);
}

function initTheme() {
    const stored = localStorage.getItem(themeKey);
    applyTheme(stored === "alt" ? "alt" : "default");
}

document.addEventListener("DOMContentLoaded", initTheme);