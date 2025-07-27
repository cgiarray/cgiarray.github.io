document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const categorySelect = document.querySelector('.search-category');
  const items = document.querySelectorAll('.searchable-item');

  function filterItems() {
    const searchValue = input.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    items.forEach(item => {
      const itemTitle = item.getAttribute('data-title').toLowerCase();
      const itemCategory = item.getAttribute('data-category');

      const matchesSearch = itemTitle.includes(searchValue);
      const matchesCategory = selectedCategory === 'all' || itemCategory === selectedCategory;

      if (matchesSearch && matchesCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  input.addEventListener('input', filterItems);
  categorySelect.addEventListener('change', filterItems);
});
