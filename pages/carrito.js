/*let cartStorage = localStorage.getItem("cartCamisetas");
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

renderCarrito(cartStorage);*/





/*let cartStorage = localStorage.getItem("cartCamisetas");
cartStorage = JSON.parse(cartStorage);

let camisetasContainer = document.getElementById("carrito-section");
let totalContainer = document.getElementById("total-section");

function renderCarrito(cartItems) {
    cartItems.forEach((camiseta, index) => {
        const cart = document.createElement("div");
        cart.classList.add("col-lg-3", "col-md-6", "col-sm-12");
        cart.innerHTML = `<div class="cart-item card mx-auto" style="width: 18rem; margin-bottom: 30px; height: 94%;">
                            <img src="../camisetas/${camiseta.Titulo}.jpg" alt="${camiseta.Titulo}" class="cart-img">
                            <div class="cart-details d-flex flex-column align-items-center">
                                <h3 class="text-dark">${camiseta.Titulo}</h3>
                                <p class="card-text text-dark">${camiseta.Precio}</p>
                                <div class="quantity-selector">
                                    <button class="minus-btn" data-index="${index}">-</button>
                                    <span class="quantity">${cartItems[index].Cantidad || 1}</span>
                                    <button class="plus-btn" data-index="${index}">+</button>
                                </div>
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
            totalContainer.innerHTML = "";
            renderCarrito(cartStorage);
        });
    });

    updateQuantity();
    updateTotal();
}

function updateQuantity() {
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');
    const quantityTexts = document.querySelectorAll('.quantity');

    minusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (cartStorage[index].Cantidad > 1) {
                cartStorage[index].Cantidad -= 1;
                quantityTexts[index].textContent = cartStorage[index].Cantidad;
                localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
                updateTotal();
            } else {
                cartStorage.splice(index, 1);
                localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
                camisetasContainer.innerHTML = "";
                totalContainer.innerHTML = "";
                renderCarrito(cartStorage);
            }
        });
    });

    plusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            cartStorage[index].Cantidad += 1;
            quantityTexts[index].textContent = cartStorage[index].Cantidad;
            localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
            updateTotal();
        });
    });
}

function updateTotal() {
    let total = 0;
    cartStorage.forEach(camiseta => {
        total += parseInt(camiseta.Precio.replace(/\D/g, '')) * (camiseta.Cantidad || 1);
    });
    totalContainer.innerHTML = `Total: $${total}`;
}

renderCarrito(cartStorage);*/









/*let cartStorage = localStorage.getItem("cartCamisetas");
cartStorage = JSON.parse(cartStorage);

let camisetasContainer = document.getElementById("carrito-section");
let totalContainer = document.getElementById("total-section");
let totalArticulosContainer = document.getElementById("total-articulos");

function renderCarrito(cartItems) {
    cartItems.forEach((camiseta, index) => {
        const cart = document.createElement("div");
        cart.classList.add("col-lg-3", "col-md-6", "col-sm-12");
        cart.innerHTML = `<div class="cart-item card mx-auto" style="width: 18rem; margin-bottom: 30px; height: 94%;">
                            <img src="../camisetas/${camiseta.Titulo}.jpg" alt="${camiseta.Titulo}" class="cart-img">
                            <div class="cart-details d-flex flex-column align-items-center">
                                <h3 class="text-dark">${camiseta.Titulo}</h3>
                                <p class="card-text text-dark">${camiseta.Precio}</p>
                                <div class="quantity-selector">
                                    <button class="minus-btn" data-index="${index}">-</button>
                                    <span class="quantity">${cartItems[index].Cantidad || 1}</span>
                                    <button class="plus-btn" data-index="${index}">+</button>
                                </div>
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
            totalContainer.innerHTML = "";
            renderCarrito(cartStorage);
        });
    });

    updateProductCount();
    updateQuantity();
    updateTotal();
}

function updateQuantity() {
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');
    const quantityTexts = document.querySelectorAll('.quantity');

    minusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (cartStorage[index].Cantidad > 1) {
                cartStorage[index].Cantidad -= 1;
                quantityTexts[index].textContent = cartStorage[index].Cantidad;
                localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
                updateTotal();
                updateProductCount();
            } else {
                cartStorage.splice(index, 1);
                localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
                camisetasContainer.innerHTML = "";
                totalContainer.innerHTML = "";
                renderCarrito(cartStorage);
                updateProductCount();
            }
        });
    });

    plusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            cartStorage[index].Cantidad += 1;
            quantityTexts[index].textContent = cartStorage[index].Cantidad;
            localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
            updateTotal();
            updateProductCount();
        });
    });
}

function updateProductCount() {
    let cantidadTotal = 0;

    if (cartStorage) {
        cartStorage.forEach(camiseta => {
            cantidadTotal += camiseta.Cantidad || 1;
        });
    }

    totalArticulosContainer.textContent = `Total de productos: ${cantidadTotal}`;
}

function updateTotal() {
    let total = 0;
    cartStorage.forEach(camiseta => {
        total += parseInt(camiseta.Precio.replace(/\D/g, '')) * (camiseta.Cantidad || 1);
    });
    totalContainer.innerHTML = `Total: $${total}`;
}

renderCarrito(cartStorage);*/






let cartStorage = localStorage.getItem("cartCamisetas");
cartStorage = JSON.parse(cartStorage);

let camisetasContainer = document.getElementById("carrito-section");
let totalContainer = document.getElementById("total-section");
let totalArticulosContainer = document.getElementById("total-articulos");
let vaciarCarritoBtn = document.getElementById("vaciar-carrito-btn");

function renderCarrito(cartItems) {
    cartItems.forEach((camiseta, index) => {
        const cart = document.createElement("div");
        cart.classList.add("col-lg-3", "col-md-6", "col-sm-12");
        cart.innerHTML = `<div class="cart-item card mx-auto" style="width: 18rem; margin-bottom: 30px; height: 94%;">
                            <img src="../camisetas/${camiseta.Titulo}.jpg" alt="${camiseta.Titulo}" class="cart-img">
                            <div class="cart-details d-flex flex-column align-items-center">
                                <h3 class="text-dark">${camiseta.Titulo}</h3>
                                <p class="card-text text-dark">${camiseta.Precio}</p>
                                <div class="quantity-selector">
                                    <button class="minus-btn" data-index="${index}">-</button>
                                    <span class="quantity">${cartItems[index].Cantidad || 1}</span>
                                    <button class="plus-btn" data-index="${index}">+</button>
                                </div>
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
            totalContainer.innerHTML = "";
            renderCarrito(cartStorage);
        });
    });

    updateProductCount();
    updateQuantity();
    updateTotal();
}

function updateQuantity() {
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');
    const quantityTexts = document.querySelectorAll('.quantity');

    minusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (cartStorage[index].Cantidad > 1) {
                cartStorage[index].Cantidad -= 1;
                quantityTexts[index].textContent = cartStorage[index].Cantidad;
                localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
                updateTotal();
                updateProductCount();
            } else {
                cartStorage.splice(index, 1);
                localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
                camisetasContainer.innerHTML = "";
                totalContainer.innerHTML = "";
                renderCarrito(cartStorage);
                updateProductCount();
            }
        });
    });

    plusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            cartStorage[index].Cantidad += 1;
            quantityTexts[index].textContent = cartStorage[index].Cantidad;
            localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
            updateTotal();
            updateProductCount();
        });
    });
}

function updateProductCount() {
    let cantidadTotal = 0;

    if (cartStorage) {
        cartStorage.forEach(camiseta => {
            cantidadTotal += camiseta.Cantidad || 1;
        });
    }

    totalArticulosContainer.textContent = `Total de productos: ${cantidadTotal}`;
}

function updateTotal() {
    let total = 0;
    cartStorage.forEach(camiseta => {
        total += parseInt(camiseta.Precio.replace(/\D/g, '')) * (camiseta.Cantidad || 1);
    });
    totalContainer.innerHTML = `Total: $${total > 0 ? total : '0'}`;
}

renderCarrito(cartStorage);

vaciarCarritoBtn.addEventListener("click", function() {
    cartStorage = [];
    localStorage.setItem("cartCamisetas", JSON.stringify(cartStorage));
    camisetasContainer.innerHTML = "";
    updateTotal();
    totalArticulosContainer.textContent = "Total de productos: 0";
});