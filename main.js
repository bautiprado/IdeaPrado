function saludo() {
    alert("Bienvenido a Seven Only Fútbol, te ofrecemos camisetas únicas 🙌🏻");
    alert("¡Empecemos!");
}

saludo();

function calcularOferta(precioInicial, descuentoPorcentaje = 20) {
    let descuento = (precioInicial * descuentoPorcentaje) / 100;
    let oferta = precioInicial - descuento;
    alert("El precio con un " + descuentoPorcentaje + "% de descuento es: " + oferta);
    return oferta;
}

const camisetas = [
    {
    Titulo: "Neymar",
    Precio: "$50.000",
    Estado: "9/10",
    },
    {
    Titulo: "Independiente 2016",
    Precio: "$30.000",
    Estado: "10/10"
    },
    {
    Titulo: "Napoli",
    Precio: "$30.000",
    Estado: "10/10"
    },
    {
    Titulo: "Sampdoria",
    Precio: "$30.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente 2023",
    Precio: "$25.000",
    Estado: "10/10"
    },
    {
    Titulo: "Buzo NYC",
    Precio: "$60.000",
    Estado: "10/10"
    },
    {
    Titulo: "Messi",
    Precio: "$35.000",
    Estado: "10/10"
    },
    {
    Titulo: "Argentina",
    Precio: "$20.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente 2020",
    Precio: "$10.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente 2014",
    Precio: "$15.000",
    Estado: "8/10"
    },
    {
    Titulo: "Sevilla",
    Precio: "$20.000",
    Estado: "10/10"
    },
    {
    Titulo: "Campera Independiente",
    Precio: "$20.000",
    Estado: "7/10"
    },
    {
    Titulo: "Bale",
    Precio: "$45.000",
    Estado: "10/10"
    },
    {
    Titulo: "Sergio Ramos",
    Precio: "$45.000",
    Estado: "9/10"
    },
    {
    Titulo: "Real Madrid mujer",
    Precio: "$30.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente 2018",
    Precio: "$30.000",
    Estado: "10/10"
    },
    {
    Titulo: "Billetera Real Madrid",
    Precio: "$11.500",
    Estado: "8/10"
    },
    {
    Titulo: "Kun",
    Precio: "Coleccionable",
    Estado: "5/10"
    },
    {
    Titulo: "Independiente 2017",
    Precio: "Coleccionable",
    Estado: "8/10"
    },
    {
    Titulo: "Real Madrid 2014",
    Precio: "Coleccionable",
    Estado: "10/10"
    },
    {
    Titulo: "Buzo LAG",
    Precio: "Coleccionable",
    Estado: "9/10"
    },
    {
    Titulo: "Real Madrid 2012",
    Precio: "$15.000",
    Estado: "10/10"
    },
    {
    Titulo: "Independiente 2017 blanca",
    Precio: "$15.000",
    Estado: "7/10"
    },
    {
    Titulo: "Arsenal",
    Precio: "$12.500",
    Estado: "7/10"
    },
    {
    Titulo: "Short Independiente",
    Precio: "$10.000",
    Estado: "7/10"
    }
];

console.table(camisetas);

let confirmacion = true;

do {
    let precioDescuento;

    while (true) {
    let nombreCamiseta = prompt("Ingrese el nombre de la camiseta que desea");

    let camisetaEncontrada = camisetas.find(camiseta => camiseta.Titulo.toLowerCase() === nombreCamiseta.toLowerCase());

    if (camisetaEncontrada) {
        break;
    } else {
        alert("Lo sentimos, la camiseta ingresada no está disponible en nuestra tienda");
    }
    }

    while (true) {
    precioDescuento = parseFloat(prompt("Ingrese su precio inicial para calcular el descuento"));

    if (!isNaN(precioDescuento) && precioDescuento > 0) {
        precioDescuento > 30000 ? console.log("El precio es mayor a 30.000") : console.log("El precio es menor a 30.000");

        let oferta = calcularOferta(precioDescuento);

        let respuesta;
        do {
        respuesta = prompt("¿Desea consultar por otra camiseta?");
        if (respuesta === null) {
            console.log("Operación cancelada");
            confirmacion = false;
            break;
        } else if (respuesta.toLowerCase() !== 'si' && respuesta.toLowerCase() !== 'no') {
            alert("Por favor, responda solo con 'si' o 'no'");
        } else {
            if (respuesta.toLowerCase() === 'no') {
            confirmacion = false;
            }
            break;
        }
        } while (true);

        if (!confirmacion) {
        break;
        }
        break;
    } else {
        alert("Por favor, ingrese un número válido");
    }
    }
} while (confirmacion);

/*
let cartCamisetas = []
let addButton = document.querySelectorAll(".camisetaAgregar")
let camisetasContainer = document.getElementById("camisetas-container")

function renderCamisetas(camisetasArray) {
    camisetasArray.forEach(camiseta => {
        const card = document.createElement("div")
        card.innerHTML= `<h3>${camiseta.Titulo}</h3>
        <p>${camiseta.Precio}</p>
        <button class="camisetaAgregar" id="${camiseta.Titulo}">Agregar</button>`
        
        camisetasContainer.appendChild(card)
    });
    addToCartButton ()
}
renderCamisetas(camisetas)

function addToCartButton () {
    addButton = document.querySelectorAll(".camisetaAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const camisetaId = e.currentTarget.id
            const selectedCamiseta = camisetas.find(camiseta => camiseta.id == camisetaId)

            cartCamisetas.push (selectedCamiseta)
            console.log(cartCamisetas)
        }
    })
}*/


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
        card.innerHTML = `<div class="card-body">
                        <p><h3>${camiseta.Titulo}</h3>${camiseta.Precio}</p>
                        <button class="camisetaAñadirAlCarrito btn btn-primary" id="${camiseta.Titulo}">Añadir al carrito</button>`;
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

            cartCamisetas.push(selectedCamiseta);
            console.log(cartCamisetas);

            localStorage.setItem("cartCamisetas", JSON.stringify(cartCamisetas))
        };
    });
}

renderCamisetas(camisetas);
