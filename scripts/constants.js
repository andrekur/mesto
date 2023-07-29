const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let photoItems = document.querySelector('.photos__items');
const popupOpenedClass = 'popup_opened'


let editProfilePopup = document.querySelector('#editProfilePopup');
let editProfileOpenButton = document.querySelector('.profile__edit-button');
let editProfileCloseButton = editProfilePopup.querySelector('.popup__close');
let editProfilePopupForm = editProfilePopup.querySelector('#formEditProfilePopup');
let userFullName = document.querySelector('.profile__full-name');
let userJob = document.querySelector('.profile__description');
let nameInput = editProfilePopup.querySelector('.popup__input_field_name');
let jobInput = editProfilePopup.querySelector('.popup__input_field_job');


let addImagePopup = document.querySelector('#addImagePopup');
let addImageOpenButton = document.querySelector('.profile__add-button');
let addImageCloseButton = addImagePopup.querySelector('.popup__close');
let addImagePopupForm = addImagePopup.querySelector('#formAddImagePopup');


let zoomImagePopup = document.querySelector('#viewZoomImagePopup');
let zoomImageItem = zoomImagePopup.querySelector('.popup__image');
let zoomImageFigcaption = zoomImagePopup.querySelector('.popup__figcaption');
let zoomImageCloseButton = zoomImagePopup.querySelector('.popup__close');


validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};
