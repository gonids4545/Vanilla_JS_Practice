//initialize the counter
let count = 0;

//select value and buttons
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //the currentTarget method fetches the button clicked and classList gets the classes that the html tag has
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    count > 0
      ? (value.style.color = "green")
      : count < 0
      ? (value.style.color = "red")
      : (value.style.color = "#2f539b");
    value.textContent = count;
  });
});
