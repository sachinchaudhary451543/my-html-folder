document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cartCount');
    const addToCartButtons = document.querySelectorAll('.add_to_cart');
    const popup = document.getElementById('popup');
    const cartItems = [];
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product_card');
            const brandName = productCard.querySelector('.brand_name').textContent;
            cartItems.push(brandName);
            cartCount++;
            cartCountElement.textContent = cartCount;
            showPopup(brandName);
        });
    });

    function showPopup(brandName) {
        popup.textContent = `${brandName} added to your cart`;
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2000);
    }
});