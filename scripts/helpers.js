function openPopup(popup) {
  if (!popup.classList.contains(popupOpenedClass)) {
    popup.classList.add(popupOpenedClass);
    document.addEventListener('keyup', keyEscHandler);
    document.addEventListener('click', overlayClickHandler);
  };
};

function closePopup(popup) {
  if (popup.classList.contains(popupOpenedClass)) {
    popup.classList.remove(popupOpenedClass);
    document.removeEventListener('keyup', keyEscHandler);
    document.removeEventListener('click', overlayClickHandler);
  };
};

function getOpenedPopup(){
  return document.querySelector(`.${popupOpenedClass}`);
};

function openEditProfilePopup() {
  nameInput.value = userFullName.textContent;
  jobInput.value = userJob.textContent;
  openPopup(editProfilePopup);
};

function openZoomImagePopup(title, link){
  zoomImageFigcaption.textContent = title;
  zoomImageItem.src = link;
  zoomImageItem.alt = getImageAltCaption(title);
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
  const card = createCard(imageTitle.value, imageLink.value);
  addCard(card);
  addImagePopupForm.reset();
  closePopup(addImagePopup);
}

function createCard(title, link) {

  const photoContainerTemplate = document.querySelector('#photo-container_template').content;
  const photoContainerItem = photoContainerTemplate.querySelector('.photo-container').cloneNode(true);
  let imageItem = photoContainerItem.querySelector('.photo-container__image');

  imageItem.src = link;
  imageItem.alt = getImageAltCaption(title);
  imageItem.addEventListener('click', function (event) { openZoomImagePopup(title, link) });
  photoContainerItem.querySelector('.photo-container__title').textContent = title;

  let likeButton = photoContainerItem.querySelector('.photo-container__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('photo-container__like-button_active')
  });

  let deleteButton = photoContainerItem.querySelector('.photo-container__delete-button');
  deleteButton.addEventListener('click', function (event) {
    photoContainerItem.remove();
  });

  return photoContainerItem
}

function addCard(card, to_end=false) {
  to_end ? photoItems.append(card) : photoItems.prepend(card);
};

function renderInitalCards() {
  initialCards.map(
    ({name, link}) => {
      const card = createCard(name, link);
      addCard(card, to_end=true);
  });
};

function getImageAltCaption(title) {
  return `Изображение: ${title}`;
};

function keyEscHandler(evt){
  const popup = getOpenedPopup();

  if (evt.key === 'Escape' && popup){
    closePopup(popup);
 };
};

function overlayClickHandler(evt){
  const popup = getOpenedPopup();

  if (evt.target.contains(popup)) {
   closePopup(popup);
  };
};
