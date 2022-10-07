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
let fila = document.getElementById("fila")

casaAlicante.forEach(function(casaAlicante){

    let columna = document.createElement("div")
    columna.classList.add("col","columna")
    
    let tarjeta=document.createElement("img")
    tarjeta.classList.add("img-fluid","ms-2","border-right","w-100","h-100","fila")
    tarjeta.src=casaAlicante.foto

    let trasparente = document.createElement("div")
    trasparente.classList.add("trasnparenteParaIconos")
    
    
    // let iconos=document.createElement("div")
    // iconos.classList.add("position-absolute","top-100", "start-50", "translate-middle", "backgr")

    // let imagen =document.createElement("img")
    // imagen.classList.add("img-fluid","w-75","h-50","mt-4","ms-5")
    // imagen.
    // console.log(casaAlicante.foto)


    // tarjeta.appendChild(tarjetaiconos)
    // trasparente.appendChild(columna)
    // columna.append(tarjeta)
    columna.appendChild(trasparente)
    columna.appendChild(tarjeta)
    // columna.appendChild(tarjetaTrasera)  
    fila.appendChild(columna)

})