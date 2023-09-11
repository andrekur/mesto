export class UserInfo {
  constructor(userNameSelector, userDescriptionSelector) {
    this._username = document.querySelector(userNameSelector);
    this._description = document.querySelector(userDescriptionSelector);
  };

  getUserInfo() {
    return {'username': this._username.textContent, 'description': this._description.textContent};
  };

  setUserInfo(data) {
    this._username.textContent = data.username;
    this._description.textContent = data.description;
  };
};