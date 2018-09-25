// 1. get elements
var openButton = document.querySelector('#open-button')
var closeButton = document.querySelector('#close-button')
var mobileMenu = document.querySelector('#mobile-menu')

// 2. define actions

function open() {
    mobileMenu.className = 'mobile-menu'
    mobileMenu.setAttribute('aria-hidden', 'false')
    openButton.setAttribute('aria-expanded', 'true')
}

function close() {
    mobileMenu.className = 'mobile-menu closed'
    mobileMenu.setAttribute('aria-hidden', 'true')
    openButton.setAttribute('aria-expanded', 'false')
}

// 3. wire it all up
openButton.addEventListener('click', open)
closeButton.addEventListener('click', close)