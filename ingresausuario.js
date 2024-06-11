document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.producto');

    products.forEach(product => {
        const button = product.querySelector('button');
        button.addEventListener('click', function() {
            const name = product.querySelector('h2').innerText;
            const price = product.querySelector('.precio').innerText;
            saveProduct(name, price);
        });
    });
});

function saveProduct(name, price) {
    const productData = {
        name: name,
        price: price
    };

    // Guardar en el localStorage (o puedes enviarlo a un servidor)
    localStorage.setItem(name, JSON.stringify(productData));

    // Mostrar en la consola
    console.log('Producto guardado:', productData);
}