const btn = document.querySelector('button')
const box = document.getElementById('stretcher')

btn.addEventListener('click', () => {
    box.classList.toggle('active')
})