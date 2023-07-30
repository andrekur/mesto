function setEventListeners(form, config){
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const buttonSave = form.querySelector(config.submitButtonSelector);

  toggleButtonState(inputs, buttonSave, config);

  form.addEventListener('reset', () => disablePopupSaveButton(buttonSave, config));

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      isValid(form, input, config);
      toggleButtonState(inputs, buttonSave, config);
    });
  });
};

function showInputError(form, input, config) {
  input.classList.add(config.inputErrorClass);
  const span = form.querySelector(`.${input.id}-error`);
  span.textContent = input.validationMessage;
  span.classList.add(config.errorClass);
};

function isInputsValid(inputs) {
  return inputs.some(input => !input.validity.valid);
};

function hideInputError(form, input, config){
  input.classList.remove(config.inputErrorClass);
  const span = form.querySelector(`.${input.id}-error`);
  span.textContent = '';
  span.classList.remove(config.errorClass);
};

function disablePopupSaveButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.disabled = true;
};

function isValid(form, input, config){
  if (!input.validity.valid){
    showInputError(form, input, config);
  } else {
    hideInputError(form, input, config);
  };
};

function toggleButtonState(inputs, button, config) {
  if (isInputsValid(inputs)){
    disablePopupSaveButton(button, config);
  }
  else {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  };
};

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector))

  forms.forEach(form => {
    setEventListeners(form, config);
  });
};