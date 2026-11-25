let cart = [];

function addToCart(name, price) {

    let newProduct = {
        name: name,
        price: price
    };

    cart.push(newProduct);

    displayCart();

    alert(name + " added to your cart!");

}

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    let count = document.getElementById("cart-count");

    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let totalAmount = 0;

    

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty">Your shopping bag is empty!</p>';

    }

    

    cart.forEach(function(item, index) {

        totalAmount += item.price;

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>₹${item.price}</p>
            </div>

            <button onclick="removeProduct(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);

    });


  

    count.innerText = cart.length;

    total.innerText = totalAmount;

}




function removeProduct(index) {

    cart.splice(index, 1);

    displayCart();

}




function clearCart() {

    cart = [];

    displayCart();

}




document.getElementById("search").addEventListener("input", function() {

    let value = this.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    let found = 0;

    products.forEach(function(product) {

        let name = product.dataset.name.toLowerCase();

        if (name.includes(value)) {

            product.style.display = "block";

            found++;

        } else {

            product.style.display = "none";

        }

    });


    

    document.getElementById("no-result").style.display =
        found === 0 ? "block" : "none";

});