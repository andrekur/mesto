let buttonProfileEdit= document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let buttonClosePopup = popup.querySelector('.popup__close');
let userFullName = document.querySelector('.profile__full-name');
let userJob = document.querySelector('.profile__description');

let popupForm = document.querySelector('.popup__content');
let nameInput = popup.querySelector('.popup__input_field_name');
let jobInput = popup.querySelector('.popup__input_field_job');

function openPopup() {
  if (!popup.classList.contains('popup_opened')) {
    nameInput.value = userFullName.textContent;
    jobInput.value = userJob.textContent;
    popup.classList.add('popup_opened');
  }
}

function closePopup() {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  }
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  userFullName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup();
}

popupForm.addEventListener('submit', handleFormSubmit);
buttonProfileEdit.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);