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

const photoItems = document.querySelector('.photos__items');
const popupOpenedClass = 'popup_opened'


const editProfilePopup = document.querySelector('#editProfilePopup');
const editProfileOpenButton = document.querySelector('.profile__edit-button');
const editProfilePopupForm = editProfilePopup.querySelector('#formEditProfilePopup');
const userFullName = document.querySelector('.profile__full-name');
const userJob = document.querySelector('.profile__description');
const nameInput = editProfilePopup.querySelector('.popup__input_field_name');
const jobInput = editProfilePopup.querySelector('.popup__input_field_job');


const addImagePopup = document.querySelector('#addImagePopup');
const addImageOpenButton = document.querySelector('.profile__add-button');
const addImagePopupForm = addImagePopup.querySelector('#formAddImagePopup');


const zoomImagePopup = document.querySelector('#viewZoomImagePopup');
const zoomImageItem = zoomImagePopup.querySelector('.popup__image');
const zoomImageFigcaption = zoomImagePopup.querySelector('.popup__figcaption');


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};
