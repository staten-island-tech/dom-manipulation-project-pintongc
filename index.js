const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  lastName: document.querySelector(".last-name"),
  profilePicture: document.querySelector(".profile-picture"),
  text: document.querySelector(".profile"),
  gallery: document.querySelector(".gallery"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  function addProfile() {
    const profilePictureLink = DOMSelectors.profilePicture.value;
    DOMSelectors.gallery.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="card-title">${DOMSelectors.firstName.value} ${DOMSelectors.lastName.value}</div>
        <div class="card-img"> <img
          src="${profilePictureLink}"
          alt="" srcset=""></div>
        <button class="button" id="Reset">Reset</button>
      </div>`
    );
  };

  function createProfile() {
    const firstNameInput = DOMSelectors.firstName.value;
    const lastNameInput = DOMSelectors.lastName.value;

    return {
      firstName: firstNameInput,
      lastName: lastNameInput,
    };
  };

  function clearInputFields() {
    DOMSelectors.firstName.value = "";
    DOMSelectors.lastName.value = "";
    DOMSelectors.profilePicture.value = "";
  };

  function removeProfile() {
    const removeButton = document.querySelector(".button");
    removeButton.addEventListener('click', function (event) {
      event.currentTarget.parentNode.remove();
    });
  };

  addProfile();
  createProfile();
  clearInputFields();
  removeProfile();
});

//fix css, remake to custom song maker formatted like a spotify now playing
