export class Card {
  constructor(data, userId, containerTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._containerTemplateSelector = containerTemplateSelector;
    this.id = data._id
    this._name = data.name;
    this._url = data.link;
    this._canDelete = data.owner._id == userId;
    this._userId = userId;

    this._likeButtonSelector = '.photo-container__like-button';
    this._deleteButtonSelector = '.photo-container__delete-button';
    this._imageItemSelector = '.photo-container__image';
    this._imageTitleSelector = '.photo-container__title';
    this._likeCountSelector = '.photo-container__like-count';
    this._likeActiveClass = 'photo-container__like-button_active';
    this._handleCardClick = handleCardClick.bind(this);
    this._handleDeleteClick = handleDeleteClick.bind(this);
    this._handleLikeClick = handleLikeClick.bind(this);
    this._calculateLike(Array.from(data.likes))
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
    this._likeCount = this._element.querySelector(this._likeCountSelector)
    this._likeButton = this._element.querySelector(this._likeButtonSelector);
    this._deleteButton = this._element.querySelector(this._deleteButtonSelector);
    this._deleteButton.hidden = true;

    this._setEventListeners();

    this._element.querySelector(this._imageTitleSelector).textContent = this._name;
    this._likeCount.textContent = this._likes.length;
    if (this.wasLiked) {
      this._setLike();
    }

    return this._element;
  };

  _calculateLike(likes) {
    this._likes = Array.from(likes);
    this.wasLiked = this._likes.filter(user => user._id === this._userId).length;
  };

  _setLike() {
    this._likeButton.classList.add(this._likeActiveClass);
  };

  _unsetLike() {
    this._likeButton.classList.remove(this._likeActiveClass);
  };

  recalculateLike(likes) {
    this._calculateLike(likes);
    if (this.wasLiked) {
      this._setLike();
    }
    else {
      this._unsetLike();
    }
    this._likeCount.textContent = this._likes.length;
  };

  getImageData(){
    return {'title': this._name, 'url': this._url, 'altCaption': this._getImageAltCaption()};
  };

  deleteCard() {
    this._element.remove();
  };

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);
    this._likeButton.addEventListener('click', this._handleLikeClick);

    if (this._canDelete) {
      this._deleteButton.addEventListener('click', this._handleDeleteClick);
      this._deleteButton.hidden = false;
    };
  };

  _getImageAltCaption() {
    return `Изображение: ${this._name}`;
  };
};