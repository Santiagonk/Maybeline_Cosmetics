console.log('Inicializa')

// import llevarId from '../js/database'

const API = 'https://salty-beyond-87863.herokuapp.com/api/v1/products/1';
function traer() {
fetch(API)
.then(res => res.json())
.then(data => {
    console.log(data.data)
    console.log(data.data.product_link)
    console.log(data.data._id)
    container.innerHTML += `
    <div class="element">
    <img class="img_product" src="https:${data.data.api_featured_image}" alt="Cosmetico ${data.data.name}"/>
    <br>
    <spam class="name">Name: ${data.data.name}</spam>
    <spam class="name">Brand: ${data.data.brand}</spam>
    <spam>Price: $ ${data.data.price}</spam>
    <spam class="name">Type: ${data.data.product_type}</spam>
    <br>
    <spam>Description:</spam>
    <br>
    <spam class="light">${data.data.description}</spam>
    <br>
    <div class="boton"><a href="${data.data.product_link}">buy</a></div>
    </div>`
})
}
traer ()
