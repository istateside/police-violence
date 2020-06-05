const popupTrigger = document.getElementById('js-popup-trigger')
const popupContainer = document.getElementById('js-popup-container')
const popupBackground = document.getElementById('js-popup-bg')
const popupCloser = document.getElementById('js-popup-closer')

function openPopup(e) {
  e.preventDefault()
  popupContainer.classList.add('is-visible')
}

function closePopup(e) {
  e.preventDefault()
  popupContainer.classList.remove('is-visible')
}

popupTrigger.addEventListener('click', openPopup)
popupBackground.addEventListener('click', closePopup)
popupCloser.addEventListener('click', closePopup)

document.addEventListener('keydown', (keyEvent) => {
  if (keyEvent.code === 'Escape' || keyEvent.keyCode === 27) {
    closePopup(keyEvent)
  }
})
