import { Card, } from './Card.js'
import {
  photoItems,
  popupOpenedClass, 
  nameInput, jobInput,
  userFullName, userJob,
  addImagePopupForm, addImagePopup,
  editProfilePopup,
} from './constants.js';

const cardTemplateSelector = '#photo-container_template'

export function openPopup(popup) {
  popup.classList.add(popupOpenedClass);
  document.addEventListener('keyup', checkedKeyEscHandler);
  document.addEventListener('click', checkedOverlayClickHandler);
};

export function closePopup(popup) {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener('keyup', checkedKeyEscHandler);
  document.removeEventListener('click', checkedOverlayClickHandler);
};


export function setHandlerClosePopup() {
  const closeButtons = Array.from(document.querySelectorAll('.popup__close'));

  closeButtons.forEach(button => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
};


export function openEditProfilePopup(form) {
  nameInput.value = userFullName.textContent;
  jobInput.value = userJob.textContent;
  form.updateFormValid();
  openPopup(editProfilePopup);
};


export function editProfileFormSubmitHandler(event) {
  event.preventDefault();
  userFullName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}


export function addImageFormSubmitHandler(event) {
  event.preventDefault();
  const eventTarget = event.target;
  const imageTitle = eventTarget.querySelector('.popup__input_field_title');
  const imageLink = eventTarget.querySelector('.popup__input_field_url');
  const card = new Card({title: imageTitle.value, link: imageLink.value}, cardTemplateSelector);
  const cardElement = card.generateCard();
  addCard(cardElement);
  addImagePopupForm.reset();
  closePopup(addImagePopup);
}


export function renderInitalCards(cards) {
  cards.map(
    ({title, link}) => {
      const card = new Card({title, link}, cardTemplateSelector);
      const cardElement = card.generateCard();
      addCard(cardElement, true);
  });
};


function addCard(card, toEnd=false) {
  toEnd ? photoItems.append(card) : photoItems.prepend(card);
};


function checkedKeyEscHandler(evt){
  if (evt.key === 'Escape'){
    const popup = getOpenedPopup();
    closePopup(popup);
 };
};


function checkedOverlayClickHandler(evt) {
  if (evt.target.classList.contains(popupOpenedClass)) {
    closePopup(evt.target);
  };
};


function getOpenedPopup() {
  return document.querySelector(`.${popupOpenedClass}`);
};
