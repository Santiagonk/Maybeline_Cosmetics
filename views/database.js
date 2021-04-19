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
        <figure></figure><img class="img_product" src="data.data[100].image_link"/></figure>
        <p>Name: ${data.data[100].name}</p>
        <p>Brand: ${data.data[100].brand}</p>
        <p>Price: $ ${data.data[100].price}</p>
        <div class="boton"><a href="url" alt="Buy button">BUY</a></div></span></div>
        `
        console.log('Loop de nombres')
        for (var i of data.data){
            console.log(i.name)
        }
    
    })
    }
    traer ()

    