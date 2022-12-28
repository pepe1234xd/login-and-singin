const usuarios = {
    id:"0",
    nombre:"alfredo",
    lastName:"figueroa",
    email:"joseafedox@gmail.com",
    password:"123qwe"
};

function login(){ 
    const formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["contrasena"] = document.getElementById("contrasena").value;
    return formData;
}

function isRegistred(){
    let data = login();
    if(data.nombre===usuarios.nombre && data.contrasena===usuarios.password)
    { 
        sessionStorage.setItem("name",usuarios.nombre);
        return 1;
    }   
}

function validacion(){
    
    if(isRegistred()===1)
    {
        window.location.href="./registro.html"; 
        return false;
    }  
    else{
        alert("ingresa los datos correctamente");
    }
}



