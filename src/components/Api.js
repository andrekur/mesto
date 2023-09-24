export class Api{
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  };

  _sendRequest(url, options) {
    console.log(url, options)
    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
         return response.json() 
        };

        throw new Error(response.statusText);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  getUserPofile() {
    return this._sendRequest(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    })
  }

  editUserProfile(data) {
    console.log(this._headers)
    return this._sendRequest(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
  }

  editUserAvatar() {

  }

  getAllCards() {
    return this._sendRequest(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers
    })
  }

  createCard() {

  }

  setLike() {

  }

  unsetLike() {

  }
};