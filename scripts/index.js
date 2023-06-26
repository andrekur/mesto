const menuItemAbout = document.querySelector('.profile__edit-button')
const popupAbout = document.querySelector('.popup_edit_user_info')
const buttonCloseAboutPopup = popupAbout.querySelector('.popup__close')

function togglePopup(ev) {
  popupAbout.classList.toggle('popup_opened')
}

menuItemAbout.addEventListener('click', togglePopup)
buttonCloseAboutPopup.addEventListener('click', togglePopup)