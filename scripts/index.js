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

let photoItems = document.querySelector('.photos__items');


let editProfilePopup = document.querySelector('#editProfilePopup');
let editProfileOpenButton = document.querySelector('.profile__edit-button');
let editProfileCloseButton = editProfilePopup.querySelector('.popup__close');
let editProfilePopupForm = editProfilePopup.querySelector('#formEditProfilePopup');
let userFullName = document.querySelector('.profile__full-name');
let userJob = document.querySelector('.profile__description');
let nameInput = editProfilePopup.querySelector('.popup__input_field_name');
let jobInput = editProfilePopup.querySelector('.popup__input_field_job');


let addImagePopup = document.querySelector('#addImagePopup');
let addImageOpenButton = document.querySelector('.profile__add-button');
let addImageCloseButton = addImagePopup.querySelector('.popup__close');
let addImagePopupForm = addImagePopup.querySelector('#formAddImagePopup');


let zoomImagePopup = document.querySelector('#viewZoomImagePopup');
let zoomImageItem = zoomImagePopup.querySelector('.popup__image');
let zoomImageFigcaption = zoomImagePopup.querySelector('.popup__figcaption');
let zoomImageCloseButton = zoomImagePopup.querySelector('.popup__close');


function openPopup(popup) {
  if (!popup.classList.contains('popup_opened')) {
    popup.classList.add('popup_opened');
  };
};

function closePopup(popup) {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  };
};

function openEditProfilePopup() {
  nameInput.value = userFullName.textContent;
  jobInput.value = userJob.textContent;
  openPopup(editProfilePopup);
};

function openZoomImagePopup(title, link){
  zoomImageFigcaption.textContent = title;
  zoomImageItem.src = link;
  openPopup(zoomImagePopup);
};

function handleEditProfileFormSubmit (event) {
  event.preventDefault();
  userFullName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

function handleAddImageFormSubmit (event) {
  event.preventDefault();
  const eventTarget = event.target;
  let imageTitle = eventTarget.querySelector('.popup__input_field_title');
  let imageLink = eventTarget.querySelector('.popup__input_field_url');
  addPhoto(imageTitle.value, imageLink.value);
  addImagePopupForm.reset();
  closePopup(addImagePopup);
}

editProfilePopupForm.addEventListener('submit', handleEditProfileFormSubmit);
editProfileOpenButton.addEventListener('click', openEditProfilePopup);
editProfileCloseButton.addEventListener('click', function () { closePopup(editProfilePopup) });

addImagePopupForm.addEventListener('submit', handleAddImageFormSubmit);
addImageOpenButton.addEventListener('click', function () { openPopup(addImagePopup) });
addImageCloseButton.addEventListener('click', function () { closePopup(addImagePopup) });

zoomImageCloseButton.addEventListener('click', function() { closePopup(zoomImagePopup)} );

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

  let imageItem = photoContainerItem.querySelector('.photo-container__image');
  imageItem.addEventListener('click', function (event) { openZoomImagePopup(title, link) });

  photoItems.append(photoContainerItem)
}

function setDefaultImage() {
  initialCards.map(({name, link}) => {addPhoto(name, link)});
};

setDefaultImage();