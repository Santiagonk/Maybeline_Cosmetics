    console.log('Inicializa test')

    function creatNode(element){
        return document.createElement(element);
    }

    function append(parent, el){
        return parent.appendChild(el);
    }

    const div = document.getElementById('container');
    const url = 'http://localhost:8000/api/v1/products';

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let products = data.results;
            return products.map(function(product){
                let nm = creatNode('nm');
                let img = creatNode('img');
                let span = creatNode('span');

                img.src = data.data.image_link;
                span.innerHTML = `${data.data.name}`;

                append(nm, img);
                append(nm, span);
                append(div, nm)
            })
        })
        .catch(function(error){
            console.log(error);
        });