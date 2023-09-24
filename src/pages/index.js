import './index.css';

import { FormValidator, } from '../components/FormValidator.js';
import {
  editProfilePopupForm, editProfileOpenButton,
  addImagePopupForm, addImageOpenButton,
  initialCards, validationConfig,
  imageCardListSelector,
  cardTemplateSelector,
  apiOptions, userConfig
} from '../components/constants.js'

import { PopupWithForm } from '../components/PopupWithForm.js'
import { Section } from '../components/Section.js'
import { Card } from '../components/Card.js'
import { PopupWithImage } from '../components/PopupWithImage';
import { UserInfo } from '../components/UserInfo.js'
import { Api } from '../components/Api.js'


export function createCard(data) {
  const card = new Card(data, cardTemplateSelector, function() { zoomImagePopup.open(this.getImageData()); });
  return card.generateCard()
};


const api = new Api(apiOptions)
//console.log(api.getAllCards())
// получем данные пользователя
// создаем пользователя с этими данными


const userProfileForm = new FormValidator(editProfilePopupForm, validationConfig);
userProfileForm.enableValidation();

const user = new UserInfo(userConfig, function() {
  api.getUserPofile().then(
    (data) => this.setUserInfoFull(data)
  )
});
const editUserDataPopup = new PopupWithForm('#editProfilePopup', function(evt) {
  evt.preventDefault();
  api.editUserProfile(this.getInputValues())
    .then((data) => {
      user.setUserInfo(data)
      this.close()
    })
});
editUserDataPopup.setEventListeners();

editProfileOpenButton.addEventListener('click', () => {
  editUserDataPopup.setInputValues(user.getUserInfo())
  userProfileForm.updateFormValid();
  editUserDataPopup.open()
});

const addImagePopup = new PopupWithForm('#addImagePopup', function(evt) {
  evt.preventDefault();

  const cardElement = createCard(this.getInputValues());
  imageCardList.addItem(cardElement);
  this.close()
});
addImagePopup.setEventListeners();
addImageOpenButton.addEventListener('click', () => {
  addImagePopup.open()
});

const zoomImagePopup = new PopupWithImage('#viewZoomImagePopup');
zoomImagePopup.setEventListeners();


const addCardForm = new FormValidator(addImagePopupForm, validationConfig);
addCardForm.enableValidation();


const imageCardList = new Section({
  renderer: ({title, url}) => {
      const cardElement = createCard({title, url, zoomImagePopup});
      imageCardList.addItem(cardElement, true);
  }
}, imageCardListSelector)

api.getAllCards()
  .then((cards) => {
    cards.forEach(cardData => {
      console.log(12)
      const cardElement = createCard(cardData);
      imageCardList.addItem(cardElement)
    });
  })
