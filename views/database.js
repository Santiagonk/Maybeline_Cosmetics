<<<<<<< HEAD
const content = document.querySelector('.contenido');
=======
console.log('Inicializa')
    
var content = document.querySelector('.content')
function traer() {
fetch('http://localhost:8000/api/v1/products')
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.data)
    console.log(data.data[5].name)
    console.log(data.data[5].brand)
    console.log(data.data[5].price)
    console.log(data.data[5].image_link)
    contenido.innerHTML = `
    <img class="img_product" src="https:${data.data[5].api_featured_image}"/>
    <p>Name: ${data.data[5].name}</p>
    <p>Brand: ${data.data[5].brand}</p>
    <p>Price: $ ${data.data[5].price}</p>
    <div class="boton"><a href="url" alt="Buy button">BUY</a></div></span></div>
    `
    //console.log('Loop de nombres')
    //for (var i of data.data){
    //    console.log(i.name)
    //}
>>>>>>> 98292542951d04c74d12c1e7a3833ec1d394cda1

console.log(content);

async function traer() {
    const response = await fetch('http://localhost:8000/api/v1/products')
        .then((res) => res.json())
        .then((res) => res.data);
}
traer();