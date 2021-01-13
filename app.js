const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
    container.style.opacity = '1'
    btn.style.opacity = '0'
})