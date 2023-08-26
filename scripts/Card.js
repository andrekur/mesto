import {
  zoomImageFigcaption, zoomImageItem, zoomImagePopup
} from "./constants.js";
import { openPopup } from "./helpers.js";

export class Card {
  constructor(data, containerTemplateSelector) {
    this._containerTemplateSelector = containerTemplateSelector;
    this._title = data.title;
    this._link = data.link;

    this._likeButtonSelector = '.photo-container__like-button';
    this._deleteButtonSelector = '.photo-container__delete-button';
    this._imageItemSelector = '.photo-container__image';
    this._imageTitleSelector = '.photo-container__title';
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._containerTemplateSelector)
      .content
      .querySelector('.photo-container')
      .cloneNode(true);
    
    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._imageItem = this._element.querySelector(this._imageItemSelector);
    this._setEventListeners();

    this._imageItem.src = this._link;
    this._imageItem.alt = this._getImageAltCaption();

    this._element.querySelector(this._imageTitleSelector).textContent = this._title;

    return this._element
  };

  _openZoomImagePopup() {
    zoomImageFigcaption.textContent = this._title;
    zoomImageItem.src = this._link;
    zoomImageItem.alt = this._getImageAltCaption();
    openPopup(zoomImagePopup);
  };
  
  _addHandlerLikeBitton(event) {
    event.target.classList.toggle('photo-container__like-button_active')
  }

  _deleteCard() {
    this._element.remove();
  };

  _setEventListeners() {
    this._imageItem.addEventListener('click', () => {
      this._openZoomImagePopup();
    });

    const likeButton = this._element.querySelector(this._likeButtonSelector);
    likeButton.addEventListener('click', this._addHandlerLikeBitton);
  
    const deleteButton = this._element.querySelector(this._deleteButtonSelector);
    deleteButton.addEventListener('click', () => this._deleteCard(this._element));
  };

  _getImageAltCaption() {
    return `Изображение: ${this._title}`;
  };
}