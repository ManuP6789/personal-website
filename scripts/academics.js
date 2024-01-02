function showContainer(containerId) {
    const containers = document.querySelectorAll('.display-content');
    containers.forEach(function(container) {
        container.classList.add('hide');
    });

    const selectedContainer = document.getElementById(containerId)

    if (selectedContainer) {
        selectedContainer.classList.remove('hide');
    }
}