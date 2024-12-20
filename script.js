// Destaca links de navegação e itens do dropdown
const currentLocation = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-link');
const dropdownItems = document.querySelectorAll('.dropdown-item');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
        if (link.id === "navbarDropdown") {
            link.classList.add('active'); // Adiciona a classe active ao item do dropdown
        }
    }
});

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('#navbarDropdown').classList.add('active');
    });
});

// Aplica máscara ao campo de CNPJ
$(document).ready(function () {
    $('#cnpj').inputmask("99.999.999/9999-99", { placeholder: " " });
});


const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

// Atualiza o dropdown do carrinho
function updateCart() {
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-muted">O carrinho está vazio.</p>';
    } else {
        cartItemsContainer.innerHTML = cartItems
            .map(item => `<p>${item.name} - <strong>${item.price}</strong></p>`)
            .join("");
        cartCount.textContent = cartItems.length;
    }
}

// Inicializa o carrinho
updateCart();
