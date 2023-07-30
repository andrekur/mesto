function openPopup(popup) {
  popup.classList.add(popupOpenedClass);
  document.addEventListener('keyup', checkedKeyEscHandler);
  document.addEventListener('click', checkedOverlayClickHandler);
};

function closePopup(popup) {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener('keyup', checkedKeyEscHandler);
  document.removeEventListener('click', checkedOverlayClickHandler);
};

function getOpenedPopup(){
  return document.querySelector(`.${popupOpenedClass}`);
};

function setHandlerClosePopup() {
  const closeButtons = Array.from(document.querySelectorAll('.popup__close'));

  closeButtons.forEach(button => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
};

function openEditProfilePopup() {
  nameInput.value = userFullName.textContent;
  jobInput.value = userJob.textContent;
  toggleButtonState([nameInput, jobInput], editProfilePopupForm.querySelector(validationConfig.submitButtonSelector), validationConfig);
  openPopup(editProfilePopup);
};

function openZoomImagePopup(title, link){
  zoomImageFigcaption.textContent = title;
  zoomImageItem.src = link;
  zoomImageItem.alt = getImageAltCaption(title);
  openPopup(zoomImagePopup);
};

function editProfileFormSubmitHandler (event) {
  event.preventDefault();
  userFullName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

function addImageFormSubmitHandler (event) {
  event.preventDefault();
  const eventTarget = event.target;
  const imageTitle = eventTarget.querySelector('.popup__input_field_title');
  const imageLink = eventTarget.querySelector('.popup__input_field_url');
  const card = createCard(imageTitle.value, imageLink.value);
  addCard(card);
  addImagePopupForm.reset();
  closePopup(addImagePopup);
}

function createCard(title, link) {

  const photoContainerTemplate = document.querySelector('#photo-container_template').content;
  const photoContainerItem = photoContainerTemplate.querySelector('.photo-container').cloneNode(true);
  const imageItem = photoContainerItem.querySelector('.photo-container__image');

  imageItem.src = link;
  imageItem.alt = getImageAltCaption(title);
  imageItem.addEventListener('click', function (event) { openZoomImagePopup(title, link) });
  photoContainerItem.querySelector('.photo-container__title').textContent = title;

  const likeButton = photoContainerItem.querySelector('.photo-container__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('photo-container__like-button_active')
  });

  const deleteButton = photoContainerItem.querySelector('.photo-container__delete-button');
  deleteButton.addEventListener('click', function (event) {
    photoContainerItem.remove();
  });

  return photoContainerItem
}

function addCard(card, toEnd=false) {
  toEnd ? photoItems.append(card) : photoItems.prepend(card);
};

function renderInitalCards() {
  initialCards.map(
    ({name, link}) => {
      const card = createCard(name, link);
      addCard(card, toEnd=true);
  });
};

function getImageAltCaption(title) {
  return `Изображение: ${title}`;
};

function checkedKeyEscHandler(evt){

  if (evt.key === 'Escape'){
    const popup = getOpenedPopup();
    closePopup(popup);
 };
};

function checkedOverlayClickHandler(evt){

  if (evt.target.classList.contains(popupOpenedClass)) {
    const popup = getOpenedPopup();
    closePopup(popup);
  };
};
