var obj = {
    rick: 'morty'
    }
    console.log(obj)
  
    var contenido = document.querySelector('#contenido')
    function traer() {
    fetch('http://localhost:8000/api/v1/products')
    .then(res => res.json())
    .then(data => {
    console.log("In Front:", data)
    })
    }
    traer ()