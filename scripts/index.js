import { FormValidator, } from './FormValidator.js';
import {
  editProfilePopupForm, editProfileOpenButton,
  addImagePopupForm, addImageOpenButton,
  addImagePopup, initialCards, validationConfig
} from './constants.js'

import {
  editProfileFormSubmitHandler, openEditProfilePopup,
  addImageFormSubmitHandler, openPopup, renderInitalCards,
  setHandlerClosePopup, 
} from './helpers.js'


editProfilePopupForm.addEventListener('submit', editProfileFormSubmitHandler);
editProfileOpenButton.addEventListener('click', () => openEditProfilePopup(userProfileForm));

addImagePopupForm.addEventListener('submit', addImageFormSubmitHandler);
addImageOpenButton.addEventListener('click', () => { openPopup(addImagePopup) });

const userProfileForm = new FormValidator(editProfilePopupForm, validationConfig);
userProfileForm.enableValidation();

const addCardForm = new FormValidator(addImagePopupForm, validationConfig);
addCardForm.enableValidation();

renderInitalCards(initialCards);
setHandlerClosePopup();
