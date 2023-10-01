import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);

    this._handleSubmitForm = handleSubmitForm.bind(this);
    this._form = Array.from(this._popup.getElementsByTagName('form'))[0];
    this._inputList = Array.from(this._form.getElementsByTagName('input'));
    this.buttonSubmit = this._form.querySelector('.popup__save') 
  };

  getInputValues() {
    const obj = {};
    this._inputList.forEach((field) => {
      obj[field.id] = field.value;
    });

    return obj;
  };

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  };

  setEventListeners() {
    super.setEventListeners();
    
    this._form.addEventListener('submit', this._handleSubmitForm);
  };

  close() {
    super.close();

    this._form.reset();
  };
};