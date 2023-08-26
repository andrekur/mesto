export class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._inputs = Array.from(form.querySelectorAll(config.inputSelector));
    this._buttonSubmit = form.querySelector(config.submitButtonSelector);
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
  }

  enableValidation() {
    this._setEventListeners();
  };

  _setEventListeners(){
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
    
    this._toggleButtonState();

    this._form.addEventListener('reset', () => this._disablePopupSaveButton());
  
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
  };

  updateFormValid() {
    this._inputs.forEach(input => {
        this._isValid(input);
        this._toggleButtonState();
    });
  };
  
  _showInputError(input) {
    input.classList.add(this._inputErrorClass);
    const span = this._form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(this._errorClass);
  };
  
  _isInputsValid() {
    return this._inputs.some(input => !input.validity.valid);
  };
  
  _hideInputError(input){
    input.classList.remove(this._inputErrorClass);
    const span = this._form.querySelector(`.${input.id}-error`);
    span.textContent = '';
    span.classList.remove(this._errorClass);
  };
  
  _disablePopupSaveButton() {
    this._buttonSubmit.classList.add(this._inactiveButtonClass);
    this._buttonSubmit.disabled = true;
  };
  
  _isValid(input){
    if (!input.validity.valid){
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    };
  };
  
  _toggleButtonState() {
    if (this._isInputsValid()){
      this._disablePopupSaveButton();
    }
    else {
      this._buttonSubmit.classList.remove(this._inactiveButtonClass);
      this._buttonSubmit.disabled = false;
    };
  };
};
