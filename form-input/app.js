const labels = document.querySelectorAll(".form__control label");

labels.forEach((lab) => {
  lab.innerHTML = lab.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay: ${index * 40}ms;">${letter}</span>`
    )
    .join("");
});

// control the input field
// Keep the label state if the form input have value.
const textInputs = document.querySelectorAll("input");

textInputs.forEach((text) => {
  text.addEventListener("change", handleChange);
});

function handleChange(e) {
  const currentLabel = e.target.nextElementSibling;
  const targetSpan = currentLabel.children;
  if (e.target.value.trim() !== "") {
    [...targetSpan].forEach((el) => {
      el.classList.add("text__input");
    });
  } else {
    [...targetSpan].forEach((el) => {
      el.classList.remove("text__input");
    });
  }
}
