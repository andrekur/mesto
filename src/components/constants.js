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

export const editProfilePopup = document.querySelector('#editProfilePopup');
export const editProfileOpenButton = document.querySelector('.profile__edit-button');
export const editProfilePopupForm = editProfilePopup.querySelector('#formEditProfilePopup');

export const addImagePopup = document.querySelector('#addImagePopup');
export const addImageOpenButton = document.querySelector('.profile__add-button');
export const addImagePopupForm = addImagePopup.querySelector('#formAddImagePopup');


export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

export const userConfig = {
  userNameSelector: '.profile__full-name',
  userDescriptionSelector: '.profile__description',
  userAvatarSelector: '.profile__avatar'
}

export const cardTemplateSelector = '#photo-container_template'

const cohortNum = 'cohort-75'
const apiUrl = `https://mesto.nomoreparties.co/v1/${cohortNum}`
const token = '979eeed8-c018-4b3b-9808-ccf51416ee30' // isn`t good idea
export const apiOptions = {
  url: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    authorization: token
  }
}
