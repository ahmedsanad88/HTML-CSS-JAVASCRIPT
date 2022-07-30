const boxes = document.querySelectorAll(".basic");

window.addEventListener("scroll", animateSection);

animateSection();

function animateSection() {
  const targetPosition = (window.innerHeight / 8) * 7;
  boxes.forEach((box) => {
    const boxTopHight = box.getBoundingClientRect().top;

    if (boxTopHight < targetPosition) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
}
