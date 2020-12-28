//.sidebar-toggle
//.close-btn
//.show-sidebar

const sideBar = document.querySelector(".sidebar");
const sideToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

// add a class showing the sidebar or remove it if existed

sideToggle.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
});

// clicking close btn will hide the sideBar again
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
