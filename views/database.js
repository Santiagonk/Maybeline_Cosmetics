console.log('Inicializa')
    
var display = document.querySelector('.display')
function traer() {
fetch('https://salty-beyond-87863.herokuapp.com/api/v1/products?results=20') 
.then(res => res.json())
.then(data => {
    for(var i=0;i<data.data.length;i++){
        container.innerHTML += `
        <div class="element">
        <img class="img_product" src="https:${data.data[i].api_featured_image}" alt="Cosmetico ${data.data[i].name}"/>
        <p>Name: ${data.data[i].name}</p>
        <p>Brand: ${data.data[i].brand}</p>
        <p>Price: $ ${data.data[i].price}</p>
        <div class="boton"><a href="url">view</a></div>
        </div>`
    }

})
}
traer ()

// https://salty-beyond-87863.herokuapp.com/api/v1/products?results=20
// http://localhost:8000/api/v1/products?results=20