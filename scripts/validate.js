

function isInputsValid(inputs) {
  return inputs.some(input => !input.validity.valid);
};

function enableValidation(config) {
  function showInputError(form, input) {
    input.classList.add(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(config.errorClass);
  };

  function hideInputError(form, input){
    input.classList.remove(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = '';
    span.classList.remove(config.errorClass);
  };

  function isValid(form, input){
    if (!input.validity.valid){
      showInputError(form, input);
    } else {
      hideInputError(form, input);
    };
  };

  function setEventListeners(form){
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button_save = form.querySelector(config.submitButtonSelector);

    toggleButtonState(inputs, button_save);
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        isValid(form, input);
        toggleButtonState(inputs, button_save);
      });
    });
  };

  function toggleButtonState(inputs, button) {
    if (isInputsValid(inputs)){
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
    }
    else {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
    };
  };

  const forms = Array.from(document.querySelectorAll(config.formSelector))

  forms.forEach(form => {
    setEventListeners(form);
  });
};