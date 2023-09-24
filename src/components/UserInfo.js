export class UserInfo {
  constructor({userNameSelector, userDescriptionSelector, userAvatarSelector}, getUserPofile) {
    this._username = document.querySelector(userNameSelector);
    this._description = document.querySelector(userDescriptionSelector);
    this._avatar = document.querySelector(userAvatarSelector);

    this._getUserPofile = getUserPofile.bind(this)
    this._getUserPofile()
  };

  getUserInfo() {
    return {'username': this._username.textContent, 'description': this._description.textContent};
  };

  setUserInfoFull(data) {
    this._avatar.src = data.avatar;
    this._username.textContent = data.name;
    this._description.textContent = data.about;
  }

  setUserInfo(data) {
    this._username.textContent = data.username;
    this._description.textContent = data.description;
  };
};