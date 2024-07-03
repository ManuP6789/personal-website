document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#ec-carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".ec-carousel-item");
    const buttonsHtml = Array.from(items, () => {
      return '<span class="carousel-button"></span>';
    });

    carousel.insertAdjacentHTML(
      "beforeend",
      `
            <div class="carousel-nav">
                ${buttonsHtml.join("")}
            </div>
        `
    );

    const buttons = carousel.querySelectorAll(".carousel-button");

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // unselect items
        items.forEach((item) =>
          item.classList.remove("ec-carousel-item-selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("ec-carousel-button-selected")
        );

        items[i].classList.add("ec-carousel-item-selected");
        button.classList.add("ec-carousel-button-selected");
      });
    });

    // Select the first item on page load
    items[0].classList.add("ec-carousel-item-selected");
    buttons[0].classList.add("ec-carousel-button-selected");
  });
});
