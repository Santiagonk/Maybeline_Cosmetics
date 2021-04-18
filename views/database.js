    console.log('Inicializa')
    
    var contenido = document.querySelector('#contenido')
    function traer() {
    fetch('http://localhost:8000/api/v1/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.data)
        console.log(data.data[1].name)
        console.log(data.data[1].brand)
        console.log(data.data[1].price)
        console.log(data.data[1].image_link)
        //console.log('Loop de nombres')
        //for (let i of data.data){
        //    console.log(i.name)
        //}
    
    })
    }
    traer ()
