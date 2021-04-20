console.log('Inicializa')
    
var display = document.querySelector('.display')
function traer() {
fetch('https://salty-beyond-87863.herokuapp.com/api/v1/products?offset=20&results=20') 
.then(res => res.json())
.then(data => {
    console.log(data.data)
    console.log(data.data[0].product_link)
    for(var i=0;i<data.data.length;i++){
        container.innerHTML += `
        <div class="element">
        <img class="img_product" src="https:${data.data[i].api_featured_image}" alt="Cosmetico ${data.data[i].name}"/>
        <p class="name">Name: ${data.data[i].name}</p>
        <p class="name">Brand: ${data.data[i].brand}</p>
        <p>Price: $ ${data.data[i].price}</p>
        <div class="boton"><a href="${data.data[i].product_link}">view</a></div>
        </div>`
    }
})
}
traer ()
