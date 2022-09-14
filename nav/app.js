// show and hide the navbar.
const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("navMove");

const listItems = document.querySelectorAll("li");

open.addEventListener("click", function () {
  // listItems.forEach((item) => (item.style.opacity = 0));
  this.classList.add("animate__open");
  close.classList.remove("animate__close");
  nav.classList.add("nav__move");
  nav.style.width = "50%";
  setTimeout(() => {
    if (nav.style.width === "50%") {
      listItems.forEach((item) => (item.style.opacity = 1));
    }
  }, 1000);
});

close.addEventListener("click", function () {
  listItems.forEach((item) => (item.style.opacity = 0));
  nav.style.width = "5%";
  this.classList.add("animate__close");
  open.classList.remove("animate__open");
  setTimeout(() => {
    nav.classList.remove("nav__move");
  }, 1000);
});

// handle the active section

listItems.forEach((item) => {
  item.addEventListener("click", handleActiveSection);
});

function handleActiveSection(e) {
  listItems.forEach((item) => item.classList.remove("active"));
  if (e.target.children.length === 0) {
    e.target.parentElement.classList.add("active");
  } else {
    e.target.classList.add("active");
  }
}
// Can call the same function ->  handleActiveSection to keep the reference to selected section.
