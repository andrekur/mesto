import './styles/index.css';

import { FormValidator, } from './FormValidator.js';
import {
  editProfilePopupForm, editProfileOpenButton,
  addImagePopupForm, addImageOpenButton,
  initialCards, validationConfig,
  nameInput, descriptionInput,
  user, imageCardListSelector,
  cardTemplateSelector,
} from './constants.js'

import {
  editProfileFormSubmitHandler,
  addImageFormSubmitHandler,
  openPopupWithImage
} from './helpers.js'

import { PopupWithForm } from './PopupWithForm.js'
import { Section } from './Section.js'
import { Card } from './Card.js'

const userProfileForm = new FormValidator(editProfilePopupForm, validationConfig);
userProfileForm.enableValidation();

const editUserDataPopup = new PopupWithForm('#editProfilePopup', editProfileFormSubmitHandler);
editUserDataPopup.setEventListeners();
editProfileOpenButton.addEventListener('click', () => {
  const userData = user.getUserInfo();

  nameInput.value = userData.username;
  descriptionInput.value = userData.description;
  userProfileForm.updateFormValid();
  editUserDataPopup.open()
});

const addImagePopup = new PopupWithForm('#addImagePopup', addImageFormSubmitHandler);
addImagePopup.setEventListeners();
addImageOpenButton.addEventListener('click', () => {
  addImagePopup.open()
});

const addCardForm = new FormValidator(addImagePopupForm, validationConfig);
addCardForm.enableValidation();


const imageCardList = new Section({
  data: initialCards.reverse(),
  renderer: ({title, url}) => {
      const card = new Card(
        {title, url},
        cardTemplateSelector,
        openPopupWithImage
      );
      const cardElement = card.generateCard();
      imageCardList.setItem(cardElement);
  }
}, imageCardListSelector)

imageCardList.renderItems()
