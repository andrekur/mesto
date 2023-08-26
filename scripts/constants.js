export const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const photoItems = document.querySelector('.photos__items');
export const popupOpenedClass = 'popup_opened'


export const editProfilePopup = document.querySelector('#editProfilePopup');
export const editProfileOpenButton = document.querySelector('.profile__edit-button');
export const editProfilePopupForm = editProfilePopup.querySelector('#formEditProfilePopup');
export const userFullName = document.querySelector('.profile__full-name');
export const userJob = document.querySelector('.profile__description');
export const nameInput = editProfilePopup.querySelector('.popup__input_field_name');
export const jobInput = editProfilePopup.querySelector('.popup__input_field_job');


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
