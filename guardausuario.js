let usuariosGuardados = [];
console.log(usuariosGuardados);

function guardar() {
    console.log("Pasé por aquí");
    // Obtener valores de usuario y contraseña
    let usuario = document.getElementById('usuario1').value;
    let contraseña = document.getElementById('password1').value;
    let contenedor = document.getElementById("contenedor");

    // Verificar si el usuario y la contraseña no están vacíos
    if (usuario.trim() !== '' && contraseña.trim() !== '') {
        // Objeto que representa un usuario y su contraseña
        console.log("Entré aquí");
        let usuarioContraseña = {
            usuario: usuario,
            contraseña: contraseña
        };

        // Agregar el objeto al array
        usuariosGuardados.push(usuarioContraseña);

        // Limpiar los campos
        document.getElementById('usuario1').value = '';
        document.getElementById('password1').value = '';

        // Mostrar mensaje de éxito (puedes personalizar según tus necesidades)
        contenedor.innerHTML =`
        <p>
        Usuario y contraseña guardados correctamente
        </p>
        `
    } else {
        // Mostrar mensaje de error si el usuario o la contraseña están vacíos
        contenedor.innerHTML =`
        <p>
        Por favor, ingrese usuario y contraseña
        </p>
        `
    }
}

function cancelar() {
    window.location.href = "index.html";
}

// Añadir evento de escucha al botón de cancelar si existe
let cancelarBtn = document.querySelector("#cancelar");
if (cancelarBtn) {
    cancelarBtn.addEventListener('click', cancelar);
}