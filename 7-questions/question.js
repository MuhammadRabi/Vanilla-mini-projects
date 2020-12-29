// 1st method
// selectors

// selecting all questions at once
const questions = document.querySelectorAll(".questions");

// loop over each question
questions.forEach((question) => {
  // selecting btns of each questions (notice it is "question" not "document")
  const btns = question.querySelector(".question-btn");
  // add event listener [ click on btn of each question will pass the desired function ]
  btns.addEventListener("click", dropAnswer);

  // function
  function dropAnswer() {
    questions.forEach((item) => {
      // if the index of questions is not matched remove the show-text class
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  }
});

//  2nd method
//   // slectors
//  const questionText = document.querySelectorAll(".questions");
//  const Btns = document.querySelectorAll(".question-btn");
//
//  // eventListeners
//  Btns.forEach((btn) => {
//    btn.addEventListener("click", dropDown);
//  });
//
//  // functions
//  function dropDown(item) {
//    const question = item.currentTarget.parentElement;
//    question.parentElement.classList.toggle("show-text");
//  }
