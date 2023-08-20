const cardTemplateSelector = '#photo-container_template'

class Card {
  constructor(data, containerTemplateSelector) {
    this._containerTemplateSelector = containerTemplateSelector;
    this._title = data.title;
    this._link = data.link;

    this._likeButtonSelector = '.photo-container__like-button';
    this._deleteButtonSelector = '.photo-container__delete-button';
    this._imageItemSelector = '.photo-container__image';
    this._imageTitleSelector = '.photo-container__title';
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._containerTemplateSelector)
      .content
      .querySelector('.photo-container')
      .cloneNode(true);
    
    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._imageItem = this._element.querySelector(this._imageItemSelector);
    this._setEventListeners();

    this._imageItem.src = this._link;
    this._imageItem.alt = this._getImageAltCaption();

    this._element.querySelector(this._imageTitleSelector).textContent = this._title;

    return this._element
  };

  _openZoomImagePopup() {
    zoomImageFigcaption.textContent = this._title;
    zoomImageItem.src = this._link;
    zoomImageItem.alt = this._getImageAltCaption();
    openPopup(zoomImagePopup);
  };

  _setEventListeners() {
    this._imageItem.addEventListener('click', () => {
      this._openZoomImagePopup();
    });

    const likeButton = this._element.querySelector(this._likeButtonSelector);
    likeButton.addEventListener('click', function (event) {
      event.target.classList.toggle('photo-container__like-button_active');
    });
  
    const deleteButton = this._element.querySelector(this._deleteButtonSelector);
    deleteButton.addEventListener('click', () => {
      this._element.remove();
    });
  };

  _getImageAltCaption() {
    return `Изображение: ${this._title}`;
  };
}

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
  const card = new Card({title: imageTitle.value, link: imageLink.value}, cardTemplateSelector);
  const cardElement = card.generateCard();
  addCard(cardElement);
  addImagePopupForm.reset();
  closePopup(addImagePopup);
}

function addCard(card, toEnd=false) {
  toEnd ? photoItems.append(card) : photoItems.prepend(card);
};

function checkedKeyEscHandler(evt){

  if (evt.key === 'Escape'){
    closePopup(evt.target);
 };
};

function checkedOverlayClickHandler(evt){

  if (evt.target.classList.contains(popupOpenedClass)) {
    const popup = getOpenedPopup();
    closePopup(popup);
  };
};





// рендерим карточки при открытии страницы
function renderInitalCards() {
  initialCards.map(
    ({title, link}) => {
      const card = new Card({title, link}, cardTemplateSelector);
      const cardElement = card.generateCard();
      addCard(cardElement, toEnd=true);
  });
};
