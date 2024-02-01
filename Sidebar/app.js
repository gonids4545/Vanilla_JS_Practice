const toggle = document.querySelector(".sidebar-toggle"); //cannot use getElementsByClassName as it returns a *list* of elements
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", function () {
  console.log(sidebar.classList);

  //function of how the one liner works
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }

  //one Liner
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
