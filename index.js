document.addEventListener("DOMContentLoaded", () => {
    let botoningresa = document.querySelector("#iniciarSesion");
    let botonguarda = document.querySelector("#guardarUsuario");

    if (botoningresa) {
        botoningresa.addEventListener("click", () => {
            window.location.href = "ingresausuario.html";
        });
    }

    if (botonguarda) {
        botonguarda.addEventListener("click", () => {
            window.location.href = "guardausuario.html";
        });
    }
});
