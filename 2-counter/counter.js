// creating variable count

let count = 0;

let counterValue = document.querySelector("#value");
btn = document.querySelectorAll(".btn");

// loop on different buttons
btn.forEach((cbtn) => {
  cbtn.addEventListener("click", (e) => {
    let style = e.target.classList;
    // if the button has a certain class, increase its value
    if (style.contains("increase")) {
      count++;
    } else if (style.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    // change the color of the three sets of numbers +ve, -ve and zero
    if (count > 0) {
      counterValue.style.color = "green";
    } else if (count < 0) {
      counterValue.style.color = "red";
    } else {
      counterValue.style.color = "#222";
    }

    // link the value to the number counter
    counterValue.textContent = count;
  });
});
