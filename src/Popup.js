import { checkedKeyEscHandler, checkedOverlayClickHandler } from './helpers.js'

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._openedClass = 'popup_opened';
    this._closeButtonSelector = '.popup__close';
  };

  open() {
    this._popup.classList.add(this._openedClass);
  };

  close() {
    this._popup.classList.remove(this._openedClass);
    document.removeEventListener('keyup', checkedKeyEscHandler.bind(this));
    document.removeEventListener('click', checkedOverlayClickHandler.bind(this));
  };

  _handleEscClose() {
    document.addEventListener('keyup', checkedKeyEscHandler.bind(this));
  };

  isOpen() {
    return this._popup.classList.contains(this._openedClass);
  };

  setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close');
    closeButton.addEventListener('click', this.close.bind(this));

    this._handleEscClose();
    document.addEventListener('click', checkedOverlayClickHandler.bind(this));
  };
}
