const validateForm = document.querySelector('.form-wrapper');

const pristine = new Pristine(validateForm, {
  classTo: 'pristine-validate',
  errorTextParent: 'pristine-validate'
});

//Добавим обработчик на форму 
validateForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  //и вызовем метод .validate() этот метод возвращает булево 
  //значение: true, если форма валидна, и false, если нет. 
  //Для валидации при этом используются атрибуты в разметке.
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});


//напишем функцию по изменению текстового поля

function buttonDisabled() {
  //находим форму и кнопку
  const registrationForm = document.querySelector('.registration-form').value;
  const formButton = document.querySelector ('.registration-form__button').value;

  formButton.disabled = true;
  if (registrationForm.length != 0) {
    formButton.disabled = false;
  }
};
buttonDisabled();