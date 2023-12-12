const camisetas = [
    {
    Titulo: "Neymar campeón Libertadores 2011",
    Precio: "$50.000",
    Estado: "9/10",
    Image: "camisetas/Neymar campeón Libertadores 2011.jpg"
    },
    {
    Titulo: "Independiente visitante 2016-17",
    Precio: "$30.000",
    Estado: "10/10",
    Image: "camisetas/Independiente visitante 2016-17.jpg"
    },
    {
    Titulo: "Napoli visitante 2015-16",
    Precio: "$30.000",
    Estado: "10/10",
    Image: "camisetas/Napoli visitante 2015-16.jpg"
    },
    {
    Titulo: "Sampdoria local 2014-15",
    Precio: "$30.000",
    Estado: "10/10",
    Image: "camisetas/Sampdoria local 2014-15.jpg"
    },
    {
    Titulo: "Independiente visitante 2023",
    Precio: "$25.000",
    Estado: "10/10"
    },
    {
    Titulo: "Buzo New York City 2020",
    Precio: "$60.000",
    Estado: "10/10"
    },
    {
    Titulo: "Messi local campeón Mundial Qatar 2022",
    Precio: "$35.000",
    Estado: "10/10"
    },
    {
    Titulo: "Argentina Entrenamiento Tiro 23",
    Precio: "$20.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente entrenamiento 2020",
    Precio: "$10.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente tercera equipación 2014/15",
    Precio: "$15.000",
    Estado: "8/10"
    },
    {
    Titulo: "Sevilla local 2016/17",
    Precio: "$20.000",
    Estado: "10/10"
    },
    {
    Titulo: "Campera Independiente 2015",
    Precio: "$20.000",
    Estado: "7/10"
    },
    {
    Titulo: "Bale local campeón UCL 2017/18",
    Precio: "$45.000",
    Estado: "10/10"
    },
    {
    Titulo: "Sergio Ramos tercera equipación campeón UCL 2013/14",
    Precio: "$45.000",
    Estado: "9/10"
    },
    {
    Titulo: "Real Madrid mujer segunda equipacion 2012/13",
    Precio: "$30.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente final Recopa Sudamericana 2018",
    Precio: "$30.000",
    Estado: "10/10"
    },
    {
    Titulo: "Billetera Real Madrid 2017",
    Precio: "$11.500",
    Estado: "8/10"
    },
    {
    Titulo: "Kun Agüero Manchester City campeón Premier League 2011/12",
    Precio: "Coleccionable",
    Estado: "5/10"
    },
    {
    Titulo: "Independiente campeón Sudamericana 2017",
    Precio: "Coleccionable",
    Estado: "8/10"
    },
    {
    Titulo: "Real Madrid local campeón Supercopa de Europa y Mundial de Clubes 2014/15",
    Precio: "Coleccionable",
    Estado: "10/10"
    },
    {
    Titulo: "Buzo Los Angeles Galaxy 2020",
    Precio: "Coleccionable",
    Estado: "9/10"
    },
    {
    Titulo: "Real Madrid entrenamiento 2012/13",
    Precio: "$15.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente edición especial 2017",
    Precio: "$15.000",
    Estado: "7/10"
    },
    {
    Titulo: "Arsenal Pre-Match 2014/15",
    Precio: "$12.500",
    Estado: "7/10"
    },
    {
    Titulo: "Short Independiente 2015",
    Precio: "$10.000",
    Estado: "7/10"
    }
];

console.table(camisetas);


let cartCamisetas
let cartCamisetasLS = localStorage.getItem("cartCamisetas")
if (cartCamisetasLS) {
    cartCamisetas = JSON.parse(cartCamisetasLS)
} else {
    cartCamisetas = []
}

let camisetasContainer = document.getElementById("camisetas-container");

function renderCamisetas(camisetasArray) {
    camisetasArray.forEach(camiseta => {
        const card = document.createElement("div");
        card.classList.add("col-lg-3", "col-md-6", "col-sm-12");
        card.innerHTML = `<div class="card mx-auto" style="width: 18rem; margin-bottom: 30px; height: 94%;">
                        <img src="camisetas/${camiseta.Titulo}.jpg" alt="${camiseta.Titulo}" class="card-img-top">
                        <div class="d-flex flex-column align-items-center">
                        <h3 class="card-title">${camiseta.Titulo}</h3>
                        <p class="card-text text-dark">${camiseta.Precio}</p>
                        ${camiseta.Precio.toLowerCase() !== "coleccionable" ? `<button class="camisetaAñadirAlCarrito btn btn-primary" id="${camiseta.Titulo}">AÑADIR AL CARRITO</button>` : ''}
                        </div>
                        </div>`;
        camisetasContainer.appendChild(card);
    });

    addToCartButton(camisetasArray);
}


function addToCartButton(camisetasArray) {
    let addButton = document.querySelectorAll(".camisetaAñadirAlCarrito");
    addButton.forEach(button => {
        button.onclick = (e) => {
            const camisetaId = e.currentTarget.id;
            const selectedCamiseta = camisetasArray.find(camiseta => camiseta.Titulo === camisetaId);

            const existingCartItem = cartCamisetas.find(item => item.Titulo === camisetaId);
            if (existingCartItem) {
                existingCartItem.Cantidad = (existingCartItem.Cantidad || 1) + 1;
            } else {
                selectedCamiseta.Cantidad = 1;
                cartCamisetas.push(selectedCamiseta);
            }

            localStorage.setItem("cartCamisetas", JSON.stringify(cartCamisetas));
        }
    });
}

renderCamisetas(camisetas);


let addButton = document.querySelectorAll(".camisetaAñadirAlCarrito");

addButton.forEach(button => {
    button.addEventListener("click", function() {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            destination: "pages/carrito.html",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to bottom, #ffcc64, #c49a4c, #8b6b36, #553f20, #241908);",
            },
            onClick: function() {
            }
        }).showToast();
    });
});