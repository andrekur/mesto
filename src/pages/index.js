import './index.css';

import { renderLoading } from '../components/helpers.js'
import { FormValidator, } from '../components/FormValidator.js';
import {
  editProfileInfoForm, editProfileInfoOpenButton,
  editPofileAvatarForm, editProfileAvatarOpenButton,
  addImagePopupForm, addImageOpenButton,
  validationConfig,
  imageCardListSelector,
  cardTemplateSelector,
  apiOptions, userConfig
} from '../utils/constants.js'

import { PopupWithForm } from '../components/PopupWithForm.js'
import { Section } from '../components/Section.js'
import { Card } from '../components/Card.js'
import { PopupWithImage } from '../components/PopupWithImage';
import { UserInfo } from '../components/UserInfo.js'
import { Api } from '../components/Api.js'
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

const api = new Api(apiOptions)
const imageCardList = new Section({
  renderer: ({title, url}) => {
      const cardElement = createCard({title, url, zoomImagePopup},  user.getUserId());
      imageCardList.addItem(cardElement, true);
  }
}, imageCardListSelector)


const user = new UserInfo(userConfig, function() {
  Promise.all([api.getUserPofile(), api.getAllCards()])
    .then(([userProfileData, cardsData]) => {
      this.setUserInfoFull(userProfileData)

      cardsData.forEach(cardData => {
        const cardElement = createCard(cardData, user.getUserId());
        imageCardList.addItem(cardElement)
      })
    })
    .catch(error => {
      console.log(error)
    });

});

export function createCard(data, userId) {
  const card = new Card(
    data,
    userId,
    cardTemplateSelector,
    function() { zoomImagePopup.open(this.getImageData()); },
    function() {
      popupWithConfirm.card = this;
      
      popupWithConfirm.changeHandleSubmit(
        function(evt) {
          evt.preventDefault();

          api.delCard(this.card.id)
            .then(data => {
              this.card.deleteCard();
              this.close();
            })
            .catch(error => {
              console.log(error)
            });
        }
      )

      popupWithConfirm.open()
    },
    function() {
      if (!this.wasLiked) {
        api.setLike(this.id)
          .then(data => {
            this.recalculateLike(data.likes);
          })
          .catch(error => {
            console.log(error)
          });
      }
      else {
        api.unsetLike(this.id)
          .then(data => {
            this.recalculateLike(data.likes);
          })
          .catch(error => {
            console.log(error)
          });
      }
    }
  );
  return card.generateCard();
};

const userInfoForm = new FormValidator(editProfileInfoForm, validationConfig);
userInfoForm.enableValidation();

const editUserInfoPopup = new PopupWithForm('#editProfilePopup', function(evt) {
  evt.preventDefault();
  renderLoading(this.buttonSubmit, true)
  api.editUserProfile(this.getInputValues())
    .then(data => {
      user.setUserInfo(data)
      this.close()
    })
    .catch(error => {
      console.log(error)
    })
    .finally(data => renderLoading(this.buttonSubmit, false));
});
editUserInfoPopup.setEventListeners();

editProfileInfoOpenButton.addEventListener('click', () => {
  editUserInfoPopup.setInputValues(user.getUserInfo());
  userInfoForm.updateFormValid();
  editUserInfoPopup.open();
});

const userAvatarForm = new FormValidator(editPofileAvatarForm, validationConfig);
userAvatarForm.enableValidation();

const editUserAvatarPopup = new PopupWithForm('#editAvatarPopup', function(evt) {
  evt.preventDefault();

  renderLoading(this.buttonSubmit, true)
  api.editUserAvatar(this.getInputValues())
    .then((data) => {
      user.setAvatar(data.avatar)
      this.close()
    })
    .catch(error => {
      console.log(error)
    })
    .finally(data => renderLoading(this.buttonSubmit, false));
});
editUserAvatarPopup.setEventListeners()

editProfileAvatarOpenButton.addEventListener('click', () => {
  editUserAvatarPopup.open();
})

const addImagePopup = new PopupWithForm('#addImagePopup', function(evt) {
  evt.preventDefault();

  renderLoading(this.buttonSubmit, true)
  const values = this.getInputValues()
  const requestData = {'name': values.title, 'link': values.image}
  api.createCard(requestData)
    .then((data) => {
      const cardElement = createCard(data, user.getUserId());
      imageCardList.addItem(cardElement);
      this.close()
    })
    .catch((error) => {
      console.log(error)
    })
  .finally(data => renderLoading(this.buttonSubmit, false))
});

addImagePopup.setEventListeners();
addImageOpenButton.addEventListener('click', () => {
  addImagePopup.open()
});

const zoomImagePopup = new PopupWithImage('#viewZoomImagePopup');
zoomImagePopup.setEventListeners();


const popupWithConfirm = new PopupWithConfirm('#deleteCardPopup', () => {})
popupWithConfirm.setEventListeners();

const addCardForm = new FormValidator(addImagePopupForm, validationConfig);
addCardForm.enableValidation();


