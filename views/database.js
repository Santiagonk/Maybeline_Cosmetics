    console.log('Inicializa')
    
    var contenido = document.querySelector('.contenido')
    function traer() {
    fetch('http://localhost:8000/api/v1/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.data)
        contenido.innerHTML = `
            <p>Name: </p>
            `

        console.log(data.data[5].name)
        console.log(data.data[5].brand)
        console.log(data.data[5].price)
        console.log(data.data[5].image_link)
        //console.log('Loop de nombres')
        //for (let i of data.data){
        //    console.log(i.name)
        //}
    
    })
    }
    traer ()