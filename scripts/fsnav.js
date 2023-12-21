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

    // Event listeners for anchor links in the navigation
    fsNav.querySelectorAll('a.fsnav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Close the navigation
      fsNav.classList.remove('fsnav--open');
      bodyElement.classList.remove('stop-scrolling');

      // Scroll to the target section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })
})
