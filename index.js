const form = document.querySelector("#form")
console.log(form)

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    lastName: document.querySelector(".last-name"),
    profilePicture: document.querySelector(".profile-picture"),
    h2s: document.querySelectorAll("h2"),
    imgs: document.querySelector("img"),
    text: document.querySelector(".profile"),
};

firstName();
function firstName() {
    DOMSelectors.form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(DOMSelectors.firstName.value);
        DOMSelectors.h2s.forEach((el) => el.textContent = DOMSelectors.firstName.value
        );
    });
};



