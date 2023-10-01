export class UserInfo {
  constructor({userNameSelector, userDescriptionSelector, userAvatarSelector}, getUserPofile) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userDescriptionSelector);
    this._avatar = document.querySelector(userAvatarSelector);

    this._getUserPofile = getUserPofile.bind(this)
    this._getUserPofile()
  };

  getUserInfo() {
    return {'name': this._name.textContent, 'about': this._about.textContent};
  };

  getUserId() {
    return this._id
  }

  setUserInfoFull(data) {
    this._avatar.src = data.avatar;
    this._id = data._id

    this.setUserInfo(data)
  }

  setAvatar(avatar) {
    this._avatar.src = avatar;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  };
};