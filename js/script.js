window.addEventListener("wheel", topMenuWheel);

function topMenuWheel(e) {
    const header = document.querySelector("header");
    e.deltaY > 0
        ? (header.style.height = "0px")
        : (header.style.height = "40px");
}

const headerSpan1 = document.querySelector("span.header-span1");
const headerSpan2 = document.querySelector("span.header-span2");

headerSpan1.addEventListener("click", megamenuDropdown);
headerSpan2.addEventListener("click", megamenuDropdown);

function megamenuDropdown(e) {
    const megamenuCollection = document.querySelectorAll("header div.megamenu");
    const megamenuFirstHalfCollection = document.querySelectorAll(
        "header div.megamenu div.first-half"
    );
    if (
        (e.composedPath().includes(headerSpan1) &&
            !e.composedPath().includes(megamenuFirstHalfCollection[0])) ||
        (e.composedPath().includes(headerSpan2) &&
            megamenuCollection[0].className === "megamenu show")
    ) {
        megamenuCollection[0].classList.toggle("show");
    }
    if (
        (e.composedPath().includes(headerSpan2) &&
        !e.composedPath().includes(megamenuFirstHalfCollection[1])) ||
        (e.composedPath().includes(headerSpan1) &&
            megamenuCollection[1].className === "megamenu show")
    ) {
        megamenuCollection[1].classList.toggle("show");
    }
}
