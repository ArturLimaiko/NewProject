const validateForm = document.querySelector(".form-wrapper");

const pristine = new Pristine(validateForm, {
  classTo: "pristine-validate",
  errorTextParent: "pristine-validate",
});

validateForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log("Можно отправлять");
  } else {
    console.log("Форма невалидна");
  }
});

const registrationForm = document.querySelector('.form-wrapper');
const formButton = document.querySelector('.registration-form__button');

formButton.disabled = true;

const cb = function () {
  const isValid = pristine.validate();

  if (isValid) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
};

registrationForm.addEventListener("change", cb);
