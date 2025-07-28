document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const categorySelect = document.querySelector('.search-category');
  const items = document.querySelectorAll('.searchable-item');

  function filterItems() {
    const searchValue = input.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    // Subcategories
    const webAnimationSubcategories = ['hero', 'footer', 'vector'];
    const assetSubcategories = ['rigged', 'v-tuber', 'modular'];
    const templateSubcategories = ['after-effects', 'premiere-pro', 'cinema4d'];

    items.forEach(item => {
      const itemTitle = item.getAttribute('data-title')?.toLowerCase() || '';
      const itemCategory = item.getAttribute('data-category');

      const matchesSearch = itemTitle.includes(searchValue);

      let matchesCategory = false;

      if (selectedCategory === 'all') {
        matchesCategory = true;
      } else if (selectedCategory === 'web-animations') {
        matchesCategory = webAnimationSubcategories.includes(itemCategory);
      } else if (selectedCategory === '3d-assets') {
        matchesCategory = assetSubcategories.includes(itemCategory);
      } else if (selectedCategory === 'templates') {
        matchesCategory = templateSubcategories.includes(itemCategory);
      } else {
        matchesCategory = itemCategory === selectedCategory;
      }

      item.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
    });
  }

  if (input && categorySelect) {
    input.addEventListener('input', filterItems);
    categorySelect.addEventListener('change', filterItems);
  }
});




// document.addEventListener('DOMContentLoaded', () => {
//   const input = document.getElementById('search-input');
//   const categorySelect = document.querySelector('.search-category');
//   const items = document.querySelectorAll('.searchable-item');

//   function filterItems() {
//     const searchValue = input.value.toLowerCase();
//     const selectedCategory = categorySelect.value;

//     // Subcategories
//     const webAnimationSubcategories = ['hero', 'footer', 'vector'];
//     const assetSubcategories = ['rigged', 'v-tuber', 'modular'];

//     items.forEach(item => {
//       const itemTitle = item.getAttribute('data-title').toLowerCase();
//       const itemCategory = item.getAttribute('data-category');

//       const matchesSearch = itemTitle.includes(searchValue);

//       let matchesCategory = false;

//       if (selectedCategory === 'all') {
//         matchesCategory = true;
//       } else if (selectedCategory === 'web-animations') {
//         matchesCategory = webAnimationSubcategories.includes(itemCategory);
//       } else if (selectedCategory === '3d-assets') {
//         matchesCategory = assetSubcategories.includes(itemCategory);
//       } else {
//         matchesCategory = itemCategory === selectedCategory;
//       }

//       item.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
//     });
//   }

//   if (input && categorySelect) {
//     input.addEventListener('input', filterItems);
//     categorySelect.addEventListener('change', filterItems);
//   }
// });


