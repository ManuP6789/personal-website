const contactAnimation = document.getElementById("contactBackground");

const numOfColorBoxes = 400;

for (let i = 0; i < numOfColorBoxes; i++) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("colorBox");
  contactBackground.append(colorBox);

  // Add event listeners for mouseover and mouseout
  colorBox.addEventListener("mouseover", handleMouseOver);
}

function handleMouseOver() {
  const randomIndex = Math.floor(Math.random() * numOfColorBoxes);
  const randomColorBox = contactAnimation.children[randomIndex];

  // Change the style of the randomly selected box
  randomColorBox.style.backgroundColor = getRandomColor();

  // Reset the color to black after 1 seconds using setTimeout
  setTimeout(function () {
    randomColorBox.style.backgroundColor = "#0a0a0a";
  }, 1000);
}

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#87cefa";
  return color;
}
