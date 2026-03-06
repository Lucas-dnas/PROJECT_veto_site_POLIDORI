const icone = document.querySelector('.mobile-nav i')
const modal = document.querySelector('.modal')

icone.addEventListener('click', () => {
    modal.classList.toggle('change-modal')
    icone.classList.toggle('fa-times')
})