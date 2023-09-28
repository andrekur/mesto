import './index.css';

import { FormValidator, } from '../components/FormValidator.js';
import {
  editProfileInfoForm, editProfileInfoOpenButton,
  editPofileAvatarForm, editProfileAvatarOpenButton,
  addImagePopupForm, addImageOpenButton,
  validationConfig,
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


export function createCard(data, userId) {
  const card = new Card(
    data,
    userId,
    cardTemplateSelector,
    function() { zoomImagePopup.open(this.getImageData()); },
    function() {
      api.delCard(this.getId())
        .then((data) => {
          this._deleteCard();
        })
    }
  );
  return card.generateCard()
};


const api = new Api(apiOptions)

const user = new UserInfo(userConfig, function() {
  api.getUserPofile().then(
    (data) => this.setUserInfoFull(data)
  )
});

const userInfoForm = new FormValidator(editProfileInfoForm, validationConfig);
userInfoForm.enableValidation();

const editUserInfoPopup = new PopupWithForm('#editProfilePopup', function(evt) {
  evt.preventDefault();
  api.editUserProfile(this.getInputValues())
    .then((data) => {
      user.setUserInfo(data)
      this.close()
    })
});
editUserInfoPopup.setEventListeners();

editProfileInfoOpenButton.addEventListener('click', () => {
  editUserInfoPopup.setInputValues(user.getUserInfo())
  userInfoForm.updateFormValid();
  editUserInfoPopup.open()
});

const userAvatarForm = new FormValidator(editPofileAvatarForm, validationConfig);
userAvatarForm.enableValidation();

const editUserAvatarPopup = new PopupWithForm('#editAvatarPopup', function(evt) {
  evt.preventDefault();

  const values = this.getInputValues()
  const requestData = {'avatar': values.url}
  api.editUserAvatar(requestData)
    .then((data) => {
      user.setAvatar(data.avatar)
      this.close()
    })
});
editUserAvatarPopup.setEventListeners()

editProfileAvatarOpenButton.addEventListener('click', () => {
  editUserAvatarPopup.open();
})

const addImagePopup = new PopupWithForm('#addImagePopup', function(evt) {
  evt.preventDefault();

  const values = this.getInputValues()
  
  const requestData = {'name': values.name, 'link': values.url}
  api.createCard(requestData)
    .then((data) => {
      const cardElement = createCard(data, user.getUserId());
      imageCardList.addItem(cardElement);
      this.close()
  })
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
      const cardElement = createCard(cardData);
      imageCardList.addItem(cardElement)
    });
  })
