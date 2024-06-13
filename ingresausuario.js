document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(product => {
        const button = producto.querySelector('button');
        button.addEventListener('click', function() {
            const name = producto.querySelector('h2').innerText;
            const price = producto.querySelector('.precio').innerText;
            saveProduct(name, price);
        });
    });
});

function guardarProducto(name, price) {
    const productData = {
        name: name,
        price: price
    };

    // Guardar en el localStorage (o puedes enviarlo a un servidor)
    localStorage.setItem(name, JSON.stringify(productData));

    // Mostrar en la consola
    console.log('Producto guardado:', productData);
}
