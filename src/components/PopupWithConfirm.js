import { PopupWithForm } from "./PopupWithForm.js";

export class PopupWithConfirm extends PopupWithForm {

  changeHandleSubmit(handleSubmitForm) {
    this._handleSubmitForm = handleSubmitForm.bind(this);
    this._form.addEventListener('submit', this._handleSubmitForm);
  }
}