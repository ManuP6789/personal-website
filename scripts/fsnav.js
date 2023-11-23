document.addEventListener("DOMContentLoaded", function() {
    const navCloseElement = document.querySelector(".fsnav-close")
    const navOpenElement = document.querySelector(".menu-button")
    const bodyElement = document.querySelector(".body")
    const fsNav = document.querySelector(".fsnav");

    navCloseElement.addEventListener("click", function(){
        fsNav.classList.remove('fsnav--open');
        bodyElement.classList.remove('stop-scrolling')
    })

    navOpenElement.addEventListener("click", function(){
        fsNav.classList.add('fsnav--open');
        bodyElement.classList.add('stop-scrolling')
    })
})
