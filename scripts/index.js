editProfilePopupForm.addEventListener('submit', handleEditProfileFormSubmit);
editProfileOpenButton.addEventListener('click', openEditProfilePopup);
editProfileCloseButton.addEventListener('click', function () { closePopup(editProfilePopup) });

addImagePopupForm.addEventListener('submit', handleAddImageFormSubmit);
addImageOpenButton.addEventListener('click', function () { openPopup(addImagePopup) });
addImageCloseButton.addEventListener('click', function () { closePopup(addImagePopup) });

zoomImageCloseButton.addEventListener('click', function() { closePopup(zoomImagePopup)} );

renderInitalCards();
enableValidation(validationConfig);