var contenido = document.querySelector('#contenido')
function traer() {
    console.log("Hola")
    fetch('http://localhost:8000/api/v1/products')
    .then(res => res.json())
	.then(data => {
		console.log("In Front:", data)
	})
    
}

traer ()