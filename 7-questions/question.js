// slectors

const questionText = document.querySelectorAll(".questions");
const Btns = document.querySelectorAll(".question-btn");

//const plusIcon = document.querySelector(".plus-icon");
//const minusIcon = document.querySelector(".minus-icon");

// eventListener
Btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement;
    question.parentElement.classList.toggle("show-text");
  });
});

// function

// factoring

/*function dropDown(item) {
  item.currentTarget.parentElement.parentElement.classList.add("show-text");
}
*/
