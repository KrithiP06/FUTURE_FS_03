// Smooth scroll (for index.html)
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart (used in index.html)
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// ---------------- CART PAGE LOGIC ----------------

// Only run this if we are on cart.html
if (document.getElementById("cart-items")) {

    let container = document.getElementById("cart-items");
    let total = 0;

    function renderCart() {
        container.innerHTML = "";
        total = 0;

        cart.forEach((item, index) => {
            let div = document.createElement("div");
            div.style.margin = "10px";

            div.innerHTML = `
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">❌</button>
            `;

            container.appendChild(div);
            total += item.price;
        });

        document.getElementById("total").innerText = "Total: ₹" + total;
    }

    window.removeItem = function(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    window.clearCart = function() {
        localStorage.removeItem("cart");
        cart = [];
        renderCart();
    }

    renderCart();
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("light-mode");
}

// Scroll animation
const cards = document.querySelectorAll(".card");

function showCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);
