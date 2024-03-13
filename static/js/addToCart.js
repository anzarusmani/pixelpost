document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    addToCartBtns.forEach(function(addToCartBtn) {
        const quantityControl = addToCartBtn.nextElementSibling;
        const productQuantity = quantityControl.querySelector('.product-quantity');
        const plusBtn = quantityControl.querySelector('.plus');
        const minusBtn = quantityControl.querySelector('.minus');
        const cartCount = document.getElementById('cart-count');

        // Function to update cart count
        function updateCartCount(quantity) {
            cartCount.textContent = quantity; // Update cart count
        }

        // Function to increment quantity
        function incrementQuantity() {
            let quantity = parseInt(productQuantity.textContent);
            quantity++;
            productQuantity.textContent = quantity;
            updateCartCount(quantity);
        }
        
        // Function to decrement quantity
        function decrementQuantity() {
            let quantity = parseInt(productQuantity.textContent);
            if (quantity > 1) {
                quantity--;
                productQuantity.textContent = quantity;
                updateCartCount(quantity);
            } else {
                // If quantity is 1, show the "Add to Cart" button again
                addToCartBtn.style.display = 'block';
                quantityControl.style.display = 'none';
                updateCartCount(0); // Reset cart count
            }
        }

        addToCartBtn.addEventListener('click', function() {
            addToCartBtn.style.display = 'none';
            quantityControl.style.display = 'flex';
            productQuantity.textContent = '1'; // Set initial quantity to 1
            updateCartCount(1); // Set initial cart count to 1
        });

        // Attach event listeners to plus and minus buttons
        plusBtn.addEventListener('click', incrementQuantity);
        minusBtn.addEventListener('click', decrementQuantity);
    });
});
