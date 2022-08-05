const nombre = document.getElementById('nombre')
const telefono = document.getElementById('telefono')
const contraseña = document.getElementById('contraseña')
const verificacion = document.getElementById('verificacion')

bubtton.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        nombre: nombre.value,
        contraseña: contraseña.value,
        telefono: telefono.value,
        verificacion: verificacion.value,
    }

    console.log(data)
})