function ingresar(){
    const valorUsuario = document.getElementById('user').value;
    const valorEmail = document.getElementById('email').value;
    const valorPassword = document.getElementById('password').value;

    const object = {
        user: valorUsuario,
        email: valorEmail,
        password: valorPassword,

    }
    console.log(object);
}

