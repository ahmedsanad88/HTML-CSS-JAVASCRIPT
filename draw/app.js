const box = document.getElementById("draw__box");
const virtualDom = document.createDocumentFragment();
// incase of needing a set of static colors.
// const colors = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];
const colors = [];

// create pixels.
const NUMOFPIXELS = 945;

function createPixels() {
  for (let index = 0; index < NUMOFPIXELS; index++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");

    // adding the listener for mouse
    pixel.addEventListener("mouseenter", (e) => {
      if (e.shiftKey === true) {
        setColor(pixel);
      } else if (e.ctrlKey === true) {
        removeColor(pixel);
      }
    });
    // pixel.addEventListener("mouseleave", () => removeColor(pixel));

    virtualDom.appendChild(pixel);
  }

  box.appendChild(virtualDom);
}

createPixels();

// check the selected color by user if any.
let mainColor;

selectMenu.addEventListener("change", function () {
  mainColor = this.value;
});

// helper function
function setColor(element) {
  mainColor = document.getElementById("selectMenu").value;
  const color = mainColor ? mainColor : "#00bbf9";

  element.style.backgroundColor = color;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
}

// clear draw.
const clearDraw = document.getElementById("clear__draw");
clearDraw.addEventListener("click", function () {
  document.querySelectorAll(".pixel").forEach((ele) => {
    removeColor(ele);
  });
});

// Custom colors
const colorInput = document.getElementById("getColor");
const showAndWriteColor = document.getElementById("showColor");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

// update the color value.
colorInput.addEventListener("input", function (e) {
  showAndWriteColor.value = e.target.value;
});

// validate the written color.
showAndWriteColor.addEventListener("change", function (e) {
  const regExpTest = /\#([ABCDEF]|[0-9]){6}\b/gim;
  if (regExpTest.test(e.target.value)) {
    colorInput.value = e.target.value;
  } else {
    alert("Please use the hexadecimal format like following #rrggbb");
  }
});

// Adding new color to the list of colors.
submit.addEventListener("click", function () {
  colors.push(showAndWriteColor.value);
  createSelectMenu(showAndWriteColor.value);
  showAndWriteColor.value = "";
});

// Remove all old options selected by the user.
reset.addEventListener("click", function () {
  const colorsShown = document.getElementById("selectMenu");
  colors.length = 0;
  colorsShown.innerHTML = `<option value="">Select One</option>`;
});

// adding select menu for the color options.
function createSelectMenu(value) {
  if (value.trim() === "") return;
  const colorsShown = document.getElementById("selectMenu");

  const option = document.createElement("option");
  option.setAttribute("data-type", "color");
  option.value = value;
  option.textContent = value;

  colorsShown.appendChild(option);
}
