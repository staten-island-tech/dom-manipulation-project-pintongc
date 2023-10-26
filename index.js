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
    cardTitle: document.querySelector(".card-title"),
    reset: document.querySelector("#Reset"),
    gallery: document.querySelector(".gallery"),
};

function firstName() {
    DOMSelectors.formfirst.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(DOMSelectors.firstName.value);
        DOMSelectors.h2s.forEach((el) => el.textContent = DOMSelectors.firstName.value;
        );
    });
};

const firstName = DOMSelectors.firstName.value;
const lastName = DOMSelectors.lastName.value;
const profilePicture = DOMSelectors.profilePicture.value;

DOMSelectors.firstName.insertAdjacentHTML("beforeend", '<div class="card" $(DOMSelectors.firstName.value) </div>')

function createProfile() {

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const profilePicture = document.querySelector('#profile-picture').value;
  
    const object = {
      firstName,
      lastName,
      profilePicture,
      };

    injectProfileIntoDOM(object);
  
    clearInputFields();
    };

function injectProfileIntoDOM() {

};

function clearInputFields() {
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => {
    document.location.reload();
  });
};

DOMSelectors.cardTitle.insertAdjacentHTML("beforeend", '<img src="https://images..com/photo-1683009427598-9c21a169f98f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">')

const insert = DOMSelectors.querySelector





