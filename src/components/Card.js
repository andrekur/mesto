export class Card {
  constructor(data, userId, containerTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._containerTemplateSelector = containerTemplateSelector;
    this._id = data._id
    this._name = data.name;
    this._url = data.link;
    this._likes = Array.from(data.likes);
    this.owner_id = data.owner._id;
    this.canDelete = this.owner_id == userId;
    this.wasLiked = data.likes.includes(userId);

    this._likeButtonSelector = '.photo-container__like-button';
    this._deleteButtonSelector = '.photo-container__delete-button';
    this._imageItemSelector = '.photo-container__image';
    this._imageTitleSelector = '.photo-container__title';
    this._likeCountSelector = '.photo-container__like-count';
    this.likeActiveClass = 'photo-container__like-button_active';
    this._handleCardClick = handleCardClick.bind(this);
    this._handleDeleteClick = handleDeleteClick.bind(this);
    this._handleLikeClick = handleLikeClick.bind(this);
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
    this.recalculateLike(this._likes);


    this._setEventListeners();

    this._element.querySelector(this._imageTitleSelector).textContent = this._name;

    return this._element;
  };

  recalculateLike(likes) {
    this._likes = Array.from(likes);
    this._element.querySelector(this._likeCountSelector).textContent = this._likes.length;
  }
  
  getId() {
    return this._id
  };

  getImageData(){
    return {'title': this._name, 'url': this._url, 'altCaption': this._getImageAltCaption()};
  };

  _deleteCard() {
    this._element.remove();
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);

    const likeButton = this._element.querySelector(this._likeButtonSelector);
    likeButton.addEventListener('click', this._handleLikeClick);

    const deleteButton = this._element.querySelector(this._deleteButtonSelector);
    if (this.canDelete) {
      deleteButton.addEventListener('click', this._handleDeleteClick);
    }
    else {
      deleteButton.hidden = true;
    }
  };

  _getImageAltCaption() {
    return `Изображение: ${this._name}`;
  };
};