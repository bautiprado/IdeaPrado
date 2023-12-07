/*let cartStorage = localStorage.getItem("cartCamisetas")
cartStorage = JSON.parse(cartStorage)

let camisetasContainer = document.getElementById("carrito-section")

function renderCarrito (cartItems) {
    cartItems.forEach(camiseta => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>${camiseta.Titulo}</h3>
                        <p>${camiseta.Precio}</p>`
        camisetasContainer.appendChild(cart)
    });
}
renderCarrito(cartStorage)*/






/*let cartStorage = localStorage.getItem("cartCamisetas");
cartStorage = JSON.parse(cartStorage);

let camisetasContainer = document.getElementById("carrito-section");

function renderCarrito(cartItems) {
cartItems.forEach((camiseta, index) => {
    const cart = document.createElement("div");
    cart.innerHTML = `<h3>${camiseta.Titulo}</h3>
                        <p>${camiseta.Precio}</p>
                        <button class="eliminar-btn" data-index="${index}">Eliminar</button>`;
    camisetasContainer.appendChild(cart);
});

const eliminarBotones = document.querySelectorAll(".eliminar-btn");
eliminarBotones.forEach(btn => {
    btn.addEventListener("click", function(event) {
    const index = event.target.dataset.index;
      cartStorage.splice(index, 1); // Elimina el elemento del carrito en esa posición
      localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage)); // Actualiza el carrito en el almacenamiento local
      camisetasContainer.innerHTML = ""; // Borra el contenido actual del carrito
      renderCarrito(cartStorage); // Renderiza nuevamente el carrito actualizado
    });
});
}

renderCarrito(cartStorage);*/






/*let cartStorage = localStorage.getItem("cartCamisetas");
cartStorage = JSON.parse(cartStorage);

let camisetasContainer = document.getElementById("carrito-section");

function renderCarrito(cartItems) {
cartItems.forEach((camiseta, index) => {
    const cart = document.createElement("div");
    cart.innerHTML = `<div class="card mx-auto" style="width: 18rem; margin-bottom: 30px; height: 94%;">
                        <img src="camisetas/${camiseta.Titulo}.jpg" alt="${camiseta.Titulo}" class="card-img-top">
                        <div class="d-flex flex-column align-items-center">
                        <h3 class="card-title text-center>${camiseta.Titulo}</h3>
                        <p class="card-text text-dark">${camiseta.Precio}</p>
                        <button class="eliminar-btn" data-index="${index}">Eliminar</button>
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

renderCarrito(cartStorage);*/




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
                        <h3 class="text-dark">${camiseta.Titulo}</h3>
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