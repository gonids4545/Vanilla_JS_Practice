const txtField = document.getElementById("number");
const op = document.getElementById("output");
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
  var input = txtField.value;
  if (input >= 0) {
    input %= 7;
    console.log(input);
    console.log(dayOfTheWeek(input));
  }
});

function dayOfTheWeek(num) {
  switch (num) {
    case 0: {
      op.innerText = "Monday";
      break;
    }
    case 1: {
      op.innerText = "Tuesday";
      break;
    }
    case 2: {
      op.innerText = "Wednesday";
      break;
    }
    case 3: {
      op.innerText = "Thursday";
      break;
    }
    case 4: {
      op.innerText = "Friday";
      break;
    }
    case 5: {
      op.innerText = "Saturday";
      break;
    }
    case 6: {
      op.innerText = "Sunday";
      break;
    }
    default: {
      op.innerText = "All days are lucky";
    }
  }
}
