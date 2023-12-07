let cartStorage = localStorage.getItem("cartCamisetas");
cartStorage = JSON.parse(cartStorage);

let camisetasContainer = document.getElementById("carrito-section");

function renderCarrito(cartItems) {
cartItems.forEach((camiseta, index) => {
    const cart = document.createElement("div");
    cart.classList.add("col-lg-3", "col-md-6", "col-sm-12");
    cart.innerHTML = `<div class="cart-item card mx-auto" style="width: 18rem; margin-bottom: 30px; height: 94%;">
                        <img src="../camisetas/${camiseta.Titulo}.jpg" alt="${camiseta.Titulo}" class="cart-img">
                        <div class="cart-details d-flex flex-column align-items-center">
                        <h3 class="text-dark text-center">${camiseta.Titulo}</h3>
                        <p class="card-text text-dark">${camiseta.Precio}</p>
                        <button class="eliminar-btn btn btn-primary" data-index="${index}">ELIMINAR</button>
                        </div>
                        </div>`;
    camisetasContainer.appendChild(cart);
});

const eliminarBotones = document.querySelectorAll(".eliminar-btn");
eliminarBotones.forEach(btn => {
    btn.addEventListener("click", function(event) {
    const index = event.target.dataset.index;
    cartStorage.splice(index, 1);
    localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
    camisetasContainer.innerHTML = "";
    renderCarrito(cartStorage);
    });
});
}

renderCarrito(cartStorage);