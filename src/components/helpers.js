export function renderLoading(obj, isLoading) {
  if (isLoading) {
    obj.textContent = 'Сохранение...'
  }
  else {
    obj.textContent = 'Сохранить'
  }
}