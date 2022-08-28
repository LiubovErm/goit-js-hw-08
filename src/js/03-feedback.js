import throttle from 'lodash.throttle';

// const formEl = document.querySelector('form');
// const emailEl = document.querySelector('input');
// const textareaEl = document.querySelector('textarea');
// const buttonEl = document.querySelector('button');
// const KEY = 'feedback-form-state';
// const formData = {};

// populateTextArea();

// buttonEl.addEventListener("submit", onFormSubmit);

// emailEl.addEventListener("input", onTextAreaInput);
// textareaEl.addEventListener("input", onTextAreaInput);



// function onTextAreaInput() {
//     formEl.elements.email.value = email;
//     formEl.elements.message.value = message;
    
//     localStorage.setItem(KEY, JSON.stringify(formData));
//     console.log(JSON.parse(localStorage.getItem(KEY)));
// }

// function populateTextArea() {
//     const savedMessage = localStorage.getItem(KEY);
//     if (savedMessage) {
//         textareaEl.value = savedMessage;
//     }
// }

// function onFormSubmit(event) {
//     event.prevent.Default();
//     formEl.reset();
//     localStorage.removeItem(KEY);
// }

// formEl.addEventListener("input", event = {
//     formData[event.target.name] = event.target.value;

// })


const formEl = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
let formData = {};

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);
 
saveForm();

function saveForm() {
   if(localStorage.getItem(KEY)) {
    formEl.email.value = JSON.parse(localStorage.getItem(KEY)).email;
    formEl.message.value = JSON.parse(localStorage.getItem(KEY)).message;
}
};

function onInputChange(event) {
    if (localStorage.getItem(KEY)) {
        formData = JSON.parse(localStorage.getItem(KEY));
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(KEY);
    console.log(formData); 
}

