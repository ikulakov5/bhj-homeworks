let products = document.querySelectorAll('.product');


for (let product of products) {
    let count = product.querySelector('.product__quantity-value');
    let decBtn = product.querySelector('.product__quantity-control.product__quantity-control_dec');
    let incDtn = product.querySelector('.product__quantity-control.product__quantity-control_inc');
    let itemImage = product.querySelector('.product__image');
    let addBtn = product.querySelector('.product__add');

    let numCount = parseInt(count.innerText);

    decBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(numCount > 1) {
        numCount--;
        count.innerText = numCount;
        }
    });

    incDtn.addEventListener("click", (e) => {
        e.preventDefault();
        numCount++;
        count.innerText = numCount;
    });

    addBtn.addEventListener("click", (e) => {
        let cartProducts = document.querySelector('.cart__products');
        let cartAdded = cartProducts.querySelectorAll(".cart__product");

        if(cartAdded.length < 1) {
            cartProducts.insertAdjacentHTML('beforeEnd', `<div class='cart__product' data-id='${product.dataset.id}'>
                <img class='cart__product-image' src='${itemImage.src}'><div class='cart__product-count'>${numCount}</div></div>`);
        } else {
            for (let added of cartAdded) {
                if(added.dataset.id === product.dataset.id) {
                    let newCount = added.querySelector(".cart__product-count").innerText * 1;
                    newCount = newCount + numCount;
                    added.querySelector(".cart__product-count").innerText = newCount;
                } else {
                    cartProducts.insertAdjacentHTML('beforeEnd', `<div class='cart__product' data-id='${product.dataset.id}'>
                        <img class='cart__product-image' src='${itemImage.src}'><div class='cart__product-count'>${numCount}</div></div>`);
                }
            }
        }
        e.preventDefault();
    });


}