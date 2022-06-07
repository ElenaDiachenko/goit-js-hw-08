import throttle from 'lodash.throttle';
const STORAGE_VALUE = "feedback-form-state";

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormData, 500));
formRef.addEventListener('submit', onSubmitForm);

const formData = {};

dataFromLocalStorage()

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_VALUE, JSON.stringify(formData))
   
}

  function onSubmitForm(e) {
    e.preventDefault();
      
    JSON.parse(localStorage.getItem(STORAGE_VALUE));
    console.log(STORAGE_VALUE)
    e.target.reset();
    localStorage.removeItem(STORAGE_VALUE);
  }

  function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(STORAGE_VALUE));
      
    if (data) {
        document.querySelector('[name="email"]').value = data.email;
        document.querySelector('[name="message"]').value = data.message;
    }
};

