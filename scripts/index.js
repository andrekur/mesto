editProfilePopupForm.addEventListener('submit', editProfileFormSubmitHandler);
editProfileOpenButton.addEventListener('click', openEditProfilePopup);

addImagePopupForm.addEventListener('submit', addImageFormSubmitHandler);
addImageOpenButton.addEventListener('click', function () { openPopup(addImagePopup) });


renderInitalCards();
setHandlerClosePopup();
enableValidation(validationConfig);