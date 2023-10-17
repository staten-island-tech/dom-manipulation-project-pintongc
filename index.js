const formfirst = document.querySelector("#form")
const formlast = document.querySelector("#form1")
const formimg = document.querySelector("#form2")

console.log(formlast)

const DOMSelectors = {
    formfirst: document.querySelector("#form"),
    formlast: document.querySelector("#form1"),
    formimg: document.querySelector("#form2"),
    firstName: document.querySelector(".first-name"),
    lastName: document.querySelector(".last-name"),
    profilePicture: document.querySelector(".profile-picture"),
    h2s: document.querySelectorAll("h2"),
    h3s: document.querySelectorAll("h3"),
    imgs: document.querySelectorAll("img"),
    text: document.querySelector(".profile"),
};

firstName();
function firstName() {
    DOMSelectors.formfirst.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(DOMSelectors.firstName.value);
        DOMSelectors.h2s.forEach((el) => el.textContent = DOMSelectors.firstName.value
        );
    });
};

lastName();
function lastName() {
    DOMSelectors.formlast.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(DOMSelectors.lastName.value);
        DOMSelectors.h3s.forEach((el) => el.textContent = DOMSelectors.lastName.value
        );
    });
};

profilePicture();
function profilePicture() {
    DOMSelectors.formimg.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(DOMSelectors.profilePicture.value);
        DOMSelectors.imgs.forEach((el) => el.textContent = DOMSelectors.profilePicture.value
        );
    });
};



