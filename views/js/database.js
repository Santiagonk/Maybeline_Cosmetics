console.log('Inicializa')

const API = 'https://salty-beyond-87863.herokuapp.com/api/v1/products'

function traer() {
fetch(API + '?offset=0&results=48')
.then(res => res.json())
.then(data => {
    console.log(data.data)
    console.log(data.data[0].product_link)
    for(var i=0;i<data.data.length;i++){
        var verID = data.data[i]._id
        container.innerHTML += `
        <div class="element">
        <img class="img_product" src="https:${data.data[i].api_featured_image}" alt="Cosmetico ${data.data[i].name}"/>
        <p class="name">Name: ${data.data[i].name}</p>
        <p class="name">Brand: ${data.data[i].brand}</p>
        <p>Price: $ ${data.data[i].price}</p>
        <div id="btn" class="boton ${verID}" onclick="llevarId(${verID})"><a href="#">view</a></div>
        <a id="${verID}" href="/${verID}">VIEW</a>
        </div>
        `
    }
})
}
traer ()

function llevarId (id){
    console.log(id)
    window.location.href = `/${id}`
}





