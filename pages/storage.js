localStorage.setItem("saludo", "Bienvenido a Seven Only Fútbol, te ofrecemos camisetas únicas 🙌🏻")
localStorage.setItem("productos", "camisetas")


sessionStorage.setItem("ventas en el mes", "44")
sessionStorage.setItem("ventas en el año", "497")


for (let i=0; i<localStorage.length; i++ ) {
    let clave = localStorage.key(i)
    console.log("Clave: "+ clave, "Valor: "+localStorage.getItem(clave))
}

