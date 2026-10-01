// The sidebar and the button that opens and closes it.
const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("toggle");

// The width where the sidebar stops shrinking and starts sliding off instead.
// It matches the breakpoint in style.css.
const MOBILE_WIDTH = 768;

// One place that changes the state, so the class and the ARIA flag never disagree.
function setCollapsed(collapsed) {
    sidebar.classList.toggle("collapsed", collapsed);
    toggle.setAttribute("aria-expanded", String(!collapsed));
}

// Clicking the button flips the state. Adding or removing the class is all the
// JavaScript does; the width change and its animation belong to the CSS.
toggle.addEventListener("click", function () {
    setCollapsed(!sidebar.classList.contains("collapsed"));
});

// On a phone an open sidebar covers the page, so it starts closed...
if (window.innerWidth <= MOBILE_WIDTH) {
    setCollapsed(true);
}

// ...and closes again once a link is picked.
document.querySelectorAll(".menu-item").forEach(function (item) {
    item.addEventListener("click", function () {
        if (window.innerWidth <= MOBILE_WIDTH) {
            setCollapsed(true);
        }
    });
});