let usuariosGuardados = [];
let botoningresa = document.querySelector("#iniciarSesion");
let botonguarda = document.querySelector("#guardarUsuario");

botoningresa.addEventListener("click", ()=>{
    

        const contenedor = document.getElementById("contenedor");
        contenedor.innerHTML =`
        <div>
            <section class="product">
                <img src="product1.jpg" alt="Producto 1">
                <h2>Producto 1</h2>
                <p>Descripción del producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span class="price">$19.99</span>
                <button>Añadir al carrito</button>
            </section>
    
            <section class="product">
                <img src="product2.jpg" alt="Producto 2">
                <h2>Producto 2</h2>
                <p>Descripción del producto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span class="price">$24.99</span>
                <button>Añadir al carrito</button>
            </section>
    
            <section class="product">
                <img src="product3.jpg" alt="Producto 3">
                <h2>Producto 3</h2>
                <p>Descripción del producto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span class="price">$29.99</span>
                <button>Añadir al carrito</button>
            </section>
            </div>
        `
    
})
    
botonguarda.addEventListener("click", ()=>{
    

    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML =`
    <div>
    <input type="text" id="usuario1" placeholder="Usuario">
    <input type="password" id="password1" placeholder="Contraseña">
        </div>
    `

})


function guardarUsuario() {
    // Obtener los valores del usuario y la contraseña
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    // Crear un objeto con la información del usuario
    let nuevoUsuario = {
        nombreUsuario: usuario,
        contrasena: password
    };

    // Agregar el nuevo usuario al array de usuariosGuardados
    usuariosGuardados.push(nuevoUsuario);

    // Limpiar los campos del formulario
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";

    // Mostrar la información del usuario guardado en la consola (puedes quitar esto en producción)
    console.log("Usuario guardado:", nuevoUsuario);
}

function redirigirAotraPagina() {
    // Implementa la redirección a otra página aquí
    // Por ejemplo, redirigir a la página "otraPagina.html"
    window.location.href = "otraPagina.html";
}
