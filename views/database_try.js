console.log('Inicializa')
    
var content = document.querySelector('.content')
function traer() {
fetch('http://localhost:8000/api/v1/products?results=20')
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.data)
    console.log(data.data[5].name)
    console.log(data.data[5].brand)
    console.log(data.data[5].price)
    console.log(data.data[5].image_link)
    
    for(var i=0;i<data.data.length;i++){

        contenido.innerHTML += `<img class="img_product" src="https:${data.data[i].api_featured_image}" alt="Cosmetico ${data.data[i].name}"/>;
        <p>Name: ${data.data[i].name}</p>
        <p>Brand: ${data.data[i].brand}</p>
        <p>Price: $ ${data.data[i].price}</p>
        <div class="boton"><a href="url" alt="Buy button">BUY</a></div>`
    
    }

})
}
traer ()

// https://salty-beyond-87863.herokuapp.com/api/v1/products