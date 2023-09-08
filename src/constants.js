import { UserInfo } from './UserInfo.js'

export const initialCards = [
  {
    title: 'Архыз',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


export const imageCardListSelector = '.photos__items'
export const photoItems = document.querySelector(imageCardListSelector);
export const popupOpenedClass = 'popup_opened'


export const editProfilePopup = document.querySelector('#editProfilePopup');
export const editProfileOpenButton = document.querySelector('.profile__edit-button');
export const editProfilePopupForm = editProfilePopup.querySelector('#formEditProfilePopup');
export const nameInput = editProfilePopup.querySelector('.popup__input_field_name');
export const descriptionInput = editProfilePopup.querySelector('.popup__input_field_description');


export const addImagePopup = document.querySelector('#addImagePopup');
export const addImageOpenButton = document.querySelector('.profile__add-button');
export const addImagePopupForm = addImagePopup.querySelector('#formAddImagePopup');


export const zoomImagePopup = document.querySelector('#viewZoomImagePopup');
export const zoomImageItem = zoomImagePopup.querySelector('.popup__image');
export const zoomImageFigcaption = zoomImagePopup.querySelector('.popup__figcaption');


export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

export const user = new UserInfo('.profile__full-name', '.profile__description');

export const cardTemplateSelector = '#photo-container_template'