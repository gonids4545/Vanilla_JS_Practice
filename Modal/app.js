const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
  //I made a mistake while adding the css class, so it was not working at first
  //below is the wrong statement
  //modalOverlay.classList.add(".open-modal") We do not need the dot.
  modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
