const popupTrigger = document.getElementById('popup-trigger')
const popupContainer = document.getElementById('popup-container')
const popupBackground = document.getElementById('popup-bg')

function openPopup() {
  popupContainer.classList.add('is-visible')
}

function closePopup() {
  popupContainer.classList.remove('is-visible')
}

popupTrigger.addEventListener('click', function(e) {
  e.preventDefault()
  openPopup()
})

popupBackground.addEventListener('click', closePopup)

document.addEventListener('keydown', (keyEvent) => {
  if (keyEvent.code === 'Escape' || keyEvent.keyCode === 27) {
    closePopup()
  }
})
