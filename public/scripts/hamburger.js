document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("search-icon");
  const searchContainer = document.querySelector(".search-container");

  searchIcon?.addEventListener("click", () => {
    searchContainer?.classList.toggle("active");
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//   // 🍔 Hamburger Menu Toggle
//   const hamburger = document.querySelector('.hamburger');
//   const navMenu = document.querySelector('.nav-menu');

//   if (hamburger && navMenu) {
//     hamburger.addEventListener('click', () => {
//       hamburger.classList.toggle('active');
//       navMenu.classList.toggle('active');
//     });
//   }

//   // 🔍 Search Bar Toggle
//   const searchToggle = document.getElementById('search-toggle');
//   const searchBar = document.querySelector('.search-bar');

//   if (searchToggle && searchBar) {
//     searchToggle.addEventListener('click', () => {
//       searchBar.classList.toggle('active');
//       searchToggle.classList.toggle('hide');
//     });
//   }
// });
