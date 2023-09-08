import { Card, } from './Card.js'
import { PopupWithImage } from './PopupWithImage.js'
import {
  photoItems,
  popupOpenedClass,
  user, cardTemplateSelector 
} from './constants.js';


export function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();

  user.setUserInfo(this._getInputValues());
  this.close();
}


export function addImageFormSubmitHandler(evt) {
  evt.preventDefault();

  const card = new Card(this._getInputValues(), cardTemplateSelector, openPopupWithImage);
  const cardElement = card.generateCard();
  addCard(cardElement);
  this.close()
}


export function openPopupWithImage () {
  const popup = new PopupWithImage('#viewZoomImagePopup');
  popup.open(this.getImageData());
  popup.setEventListeners();
}


function addCard(card, toEnd=false) {
  toEnd ? photoItems.append(card) : photoItems.prepend(card);
};


export function checkedKeyEscHandler(evt){
  if (evt.key === 'Escape') {
    this.close();
 };
};


export function checkedOverlayClickHandler(evt) {
  if (evt.target.classList.contains(popupOpenedClass)) {
    this.close();
  };
};
