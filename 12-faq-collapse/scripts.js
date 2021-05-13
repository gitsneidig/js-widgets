const faqToggle = document.querySelectorAll('.faq-toggle')
const faqChevronDown = document.querySelectorAll('.fa-chevron-down')
const faq = document.querySelector('.faq')

faqToggle.forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('active')
    })
})

