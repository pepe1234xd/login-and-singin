var columaActual = 1;
var a = {};

function readFormData() {
    var formData = {};
    formData["nombre"] = sessionStorage.getItem("name");
    formData["time"] = document.getElementById("Time").value;
    formData["date"] = document.getElementById("Date").value;
    formData["profesional"] = document.getElementById("Profesionisa").value;
    formData["price"] = 500;
    return formData;
}

//validacion de llenado
function validacion() {
    var data = readFormData();
    if(data.date == '' || data.time == '' || data.profesional=="non"){
        alert('Error en los datos de entrada, verificalos e ingresalos de nuevo');
        return 2;
    }
    else{
        return 1;
    }
}

function guardar(){
    var data = readFormData();
    if(validacion()==1){

        let tabla = document.getElementById("tabla").insertRow();
        let c1 = tabla.insertCell(0);
        let c2 = tabla.insertCell(1);
        let c3 = tabla.insertCell(2);
        let c4 = tabla.insertCell(3);

        c1.innerHTML = data.nombre;
        c2.innerHTML = data.profesional;
        c3.innerHTML = data.date+" a las "+ data.time;
        c4.innerHTML = '$'+data.price;

        columaActual++;
    } 
}