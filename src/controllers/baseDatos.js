let casaAlicante = [

    {
        nombre: "img1",
        foto:"https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/6.png?alt=media&token=f805691d-b726-4e83-bb0b-ba0e714fdb98",
        },
    {
        nombre: "img2",
        foto:"https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/6.png?alt=media&token=f805691d-b726-4e83-bb0b-ba0e714fdb98",
        },
    {
        nombre: "img3",
        foto:"https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/6.png?alt=media&token=f805691d-b726-4e83-bb0b-ba0e714fdb98",
        },
    {
        nombre: "img4",
        foto:"https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/6.png?alt=media&token=f805691d-b726-4e83-bb0b-ba0e714fdb98",
        },
    {
        nombre: "img5",
        foto:"https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/6.png?alt=media&token=f805691d-b726-4e83-bb0b-ba0e714fdb98",
        },
    {
        nombre: "img6",
        foto:"https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/6.png?alt=media&token=f805691d-b726-4e83-bb0b-ba0e714fdb98",
        },

];
let filaContendidoProductos = document.getElementById("filaContendidoProductos")
filaContendidoProductos.classList.add("contenedorFotosProductos")

casaAlicante.forEach(function(casaAlicante){

    let columna =document.createElement("div")
    columna.classList.add("col")
    
    let tarjetaFotoProducto=document.createElement("img")
    tarjetaFotoProducto.classList.add("cartasProductos")
    tarjetaFotoProducto.src=casaAlicante.foto




    columna.appendChild(tarjetaFotoProducto)
    filaContendidoProductos.appendChild(columna)

})