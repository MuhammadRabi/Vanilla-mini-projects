// selectors

const tabContent = document.querySelectorAll(".tab-content");
const listItems = document.querySelectorAll(".tab-control li");

// add eventListener

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleActiveClass(item);
    showTab(item.dataset.class);
  });
});

// functions

function toggleActiveClass(item) {
  listItems.forEach((li) => {
    li.classList.remove("active");
  });
  item.classList.add("active");
}

function showTab(itemDataClass) {
  tabContent.forEach((content) => {
    content.classList.remove("active");
    if (content.dataset.class === itemDataClass) {
      content.classList.add("active");
    }
  });
}
