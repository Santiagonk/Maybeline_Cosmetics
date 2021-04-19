const content = document.querySelector('.contenido');

console.log(content);

async function traer() {
    const response = await fetch('http://localhost:8000/api/v1/products')
        .then((res) => res.json())
        .then((res) => res.data);
}
traer();