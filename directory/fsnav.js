document.addEventListener("DOMContentLoaded", function() {
    const navCloseElement = document.querySelector(".fsnav-close")
    const navOpenElement = document.querySelector(".menu-button")
    const fsNav = document.querySelector(".fsnav");

    navCloseElement.addEventListener("click", function(){
        fsNav.classList.remove('fsnav--open');
    })

    navOpenElement.addEventListener("click", function(){
        fsNav.classList.add('fsnav--open');
    })
})