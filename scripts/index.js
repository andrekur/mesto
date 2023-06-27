let buttonProfileEdit= document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let buttonClosePopup = popup.querySelector('.popup__close');
let userFullName = document.querySelector('.profile__full-name');
let userJob = document.querySelector('.profile__description');

let formElement = document.querySelector('.popup__save');
let nameInput = popup.querySelector('.popup__input-text_name');
let jobInput = popup.querySelector('.popup__input-text_job');

function openPopup() {
  if (!popup.classList.contains('popup_opened')) {
    console.log(nameInput)
    nameInput.value = userFullName.innerText;
    jobInput.value = userJob.innerText;
    popup.classList.add('popup_opened')
  }
}

function closePopup() {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened')
  }
}


function handleFormSubmit (evt) {
    evt.preventDefault();
    userFullName.innerText = nameInput.value;
    userJob.innerText = jobInput.value;
    popup.classList.remove('popup_opened')
    closePopup()
}

formElement.addEventListener('click', handleFormSubmit);
buttonProfileEdit.addEventListener('click', openPopup)
buttonClosePopup.addEventListener('click', closePopup)