let cartStorage = localStorage.getItem("cartCamisetas")
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
renderCarrito(cartStorage)