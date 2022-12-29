var buttons = document.querySelectorAll(".tab-button");
var contents = document.querySelectorAll(".tab-content");

function open(i) {
  buttons.forEach(function (box) {
    box.classList.remove("orange");
  });
  buttons[i].classList.add("orange");

  contents.forEach(function (box) {
    box.classList.remove("show");
  });
  contents[i].classList.add("show");
}

document.querySelector(".list").addEventListener("click", function (e) {
  // Method 1.
  console.log(e.target);
  if (e.target == buttons[0]) {
    open(0);
  } else if (e.target == buttons[1]) {
    open(1);
  } else if (e.target == buttons[2]) {
    open(2);
  }

  // Method 2.
  open(e.target.dataset.id);
});
