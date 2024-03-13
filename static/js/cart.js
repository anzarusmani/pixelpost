document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const quantityControl = document.querySelector('.quantity-control');
    const productQuantity = document.querySelector('.product-quantity');
    const cartCount = document.getElementById('cart-count');

    // Plus button click handler
    document.querySelector('.plus').addEventListener('click', function() {
        let quantity = parseInt(productQuantity.textContent);
        //productQuantity.textContent = ++quantity;
        cartCount.textContent = quantity; // Update cart count
    });

    // Minus button click handler
    document.querySelector('.minus').addEventListener('click', function() {
        let quantity = parseInt(productQuantity.textContent);
        if (quantity > 1) {
            // productQuantity.textContent = --quantity;
            cartCount.textContent = quantity; // Update cart count
        } else {
            quantityControl.style.display = 'none';
            addToCartBtn.style.display = 'block';
            cartCount.textContent = '0'; // Reset cart count
        }
    });
});

