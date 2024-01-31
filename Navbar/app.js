const toggle = document.querySelector(".nav-toggle"); //cannot use getElementsByClassName as it returns a *list* of elements
const links = document.querySelector(".links");

toggle.addEventListener("click", function () {
  //console.log(links.classList); //this stmt shows the list of class for the specified variable
  // console.log(links.classList.contains("random")); //displays true or false if the if the list contains the class passed to the contains method
  // console.log(links.classList.contains("links"));

  //function of how the one liner works
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //     }

  //one Liner
  links.classList.toggle("show-links");
});
