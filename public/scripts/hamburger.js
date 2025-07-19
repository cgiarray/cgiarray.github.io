document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("search-icon");
  const searchContainer = document.querySelector(".search-container");

  searchIcon?.addEventListener("click", () => {
    searchContainer?.classList.toggle("active");
  });
});


