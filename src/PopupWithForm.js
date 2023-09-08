import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);

    this._handleSubmitForm = handleSubmitForm.bind(this);
    this._form = Array.from(this._popup.getElementsByTagName('form'))[0];
  };

  _getInputValues() {
    const formFields = Array.from(this._form.getElementsByTagName('input'));
    const obj = {};
    formFields.forEach((field) => {
      obj[field.id] = field.value;
    });

    return obj
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