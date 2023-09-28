export const imageCardListSelector = '.photos__items'
export const photoItems = document.querySelector(imageCardListSelector);

export const editProfileInfoPopup = document.querySelector('#editProfilePopup');
export const editProfileInfoOpenButton = document.querySelector('.profile__edit-button');
export const editProfileInfoForm = editProfileInfoPopup.querySelector('#formEditProfilePopup');

export const editProfileAvatarPopup = document.querySelector('#editAvatarPopup')
export const editProfileAvatarOpenButton = document.querySelector('.profile__avatar-block')
export const editPofileAvatarForm = editProfileAvatarPopup.querySelector('#formEditAvatar')

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
  userNameSelector: '.profile__name',
  userDescriptionSelector: '.profile__about',
  userAvatarSelector: '.profile__avatar-img'
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
