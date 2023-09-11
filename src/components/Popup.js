export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._openedClass = 'popup_opened';
    this._closeButtonSelector = '.popup__close';
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  open() {
    this._popup.classList.add(this._openedClass);
    document.addEventListener('keyup', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove(this._openedClass);
    document.removeEventListener('keyup', this._handleEscClose);
  };

  setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close');
    closeButton.addEventListener('click', this.close.bind(this));

    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(this._openedClass)) {
        this.close();
      }
    });
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

};
