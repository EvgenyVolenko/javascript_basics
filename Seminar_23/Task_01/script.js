let productsList = document.getElementById('productsList');

function displayProducts(category) {
    productsList.innerHTML = '';

    productData.forEach(product => {
        if (category === '' || product.category === category) {
            const listItem = document.createElement('li');
            listItem.textContent = product.name;
            productsList.append(listItem);
        }
    });
}

const categorySelect = document.getElementById('categorySelect');

categorySelect.addEventListener('change', function (e) {
    const selectedCategory = categorySelect.value;
    displayProducts(selectedCategory);
});

displayProducts('');