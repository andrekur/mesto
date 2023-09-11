import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._zoomImageItem = this._popup.querySelector('.popup__image');
    this._zoomImageFigcaption = this._popup.querySelector('.popup__figcaption');
  };


  open(data) {
    this._zoomImageFigcaption.textContent = data.title;
    this._zoomImageItem.src = data.url;
    this._zoomImageItem.alt = data.altCaption;
    super.open();
  };
};
