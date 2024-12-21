
document.addEventListener('scroll', ()=> {
    let nav = document.querySelector('.nav')

    if (window.scrollY > 0) {
        nav.classList.add('scrolled')
        // nav.style.background = "red"
    } else {
        nav.classList.remove('scrolled')
        // nav.style.background = "transparent"
    }
})