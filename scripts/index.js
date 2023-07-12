const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let buttonProfileEdit = document.querySelector('.profile__edit-button');
let photoItems = document.querySelector('.photos__items')
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

//TODO add popup transition
//TODO validation
//TODO ADD card popup
//image popup

function addPhoto(title, link) {

  const photoContainerTemplate = document.querySelector('#photo-container_template').content;
  const photoContainerItem = photoContainerTemplate.querySelector('.photo-container').cloneNode(true);

  photoContainerItem.querySelector('.photo-container__image').src = link;
  photoContainerItem.querySelector('.photo-container__title').textContent = title;

  let likeButton = photoContainerItem.querySelector('.photo-container__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('photo-container__like-button_active')
  });

  let deleteButton = photoContainerItem.querySelector('.photo-container__delete-button');
  deleteButton.addEventListener('click', function (event) {
    photoContainerItem.remove();
  });

  photoItems.append(photoContainerItem)
}

function setDefaultImage() {
  initialCards.map((item) => {addPhoto(item.name, item.link)});
};

setDefaultImage();