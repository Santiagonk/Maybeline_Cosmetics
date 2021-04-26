console.log('Inicializa')

const API = 'https://salty-beyond-87863.herokuapp.com/api/v1/products';

var display = document.querySelector('.display')
function traer() {
fetch(API + '?brand=maybelline') 
.then(res => res.json())
.then(data => {
    console.log(data.data)
    console.log(data.data.product_link)
    console.log(data.data._id)
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

var today = new Date();
var time = today.getHours();
    console.log(today);