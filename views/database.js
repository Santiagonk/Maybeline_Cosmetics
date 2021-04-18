    console.log('Inicializa')
    
    var contenido = document.querySelector('#contenido')
    function traer() {
    fetch('http://localhost:8000/api/v1/products')
    .then(res => res.json())
    .then(data => {
    console.log(data)
    console.log(data.data)
    //console.log(data.data[100].name)
    //console.log(data.data[100].price)
    //console.log(data.data[100].image_link)
    })
    }
    traer ()