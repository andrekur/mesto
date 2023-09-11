export class Card {
  constructor(data, containerTemplateSelector, handleCardClick) {
    this._containerTemplateSelector = containerTemplateSelector;
    this._title = data.title;
    this._url = data.url;

    this._likeButtonSelector = '.photo-container__like-button';
    this._deleteButtonSelector = '.photo-container__delete-button';
    this._imageItemSelector = '.photo-container__image';
    this._imageTitleSelector = '.photo-container__title';
    this._handleCardClick = handleCardClick.bind(this);
  };

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
    this._cardImage = this._element.querySelector(this._imageItemSelector);
    this._cardImage.src = this._url;
    this._cardImage.alt = this._getImageAltCaption();

    this._setEventListeners();

    this._element.querySelector(this._imageTitleSelector).textContent = this._title;

    return this._element;
  };

  getImageData(){
    return {'title': this._title, 'url': this._url, 'altCaption': this._getImageAltCaption()};
  };

  _addHandlerLikeBitton(evt) {
    evt.target.classList.toggle('photo-container__like-button_active');
  };

  _deleteCard() {
    this._element.remove();
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);

    const likeButton = this._element.querySelector(this._likeButtonSelector);
    likeButton.addEventListener('click', this._addHandlerLikeBitton);

    const deleteButton = this._element.querySelector(this._deleteButtonSelector);
    deleteButton.addEventListener('click', () => this._deleteCard(this._element));
  };

  _getImageAltCaption() {
    return `Изображение: ${this._title}`;
  };
};