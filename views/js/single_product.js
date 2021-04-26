console.log('Inicializa')

const API = 'https://salty-beyond-87863.herokuapp.com/api/v1/products?offset=0';

function traer() {
fetch(API) 
.then(res => res.json())
.then(data => {
    console.log(data.data)
    console.log(data.data.product_link)
    console.log(data.data._id)
    container.innerHTML += `
    <div class="element">
    <img class="img_product" src="https:${data.data[1].api_featured_image}" alt="Cosmetico ${data.data[1].name}"/>
    <br>
    <spam class="name">Name: ${data.data[1].name}</spam>
    <spam class="name">Brand: ${data.data[1].brand}</spam>
    <spam>Price: $ ${data.data[1].price}</spam>
    <spam class="name">Type: ${data.data[1].product_type}</spam>
    <br>
    <spam>Description:</spam>
    <br>
    <spam class="light">${data.data[1].description}</spam>
    <br>
    <div class="boton"><a href="${data.data[1].product_link}">buy</a></div>
    </div>`
})
}
traer ()

var today = new Date();
var time = today.getHours();
    console.log(today);