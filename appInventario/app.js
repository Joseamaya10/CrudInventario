document.getElementById("act").style.display = "none";
var myArrayArtculo = [];
objart={
    cod:10,
    nom:null,
    und:null,
    cantexist:null,
    precioComp:null,
    precioVta:null
}
var posAct;
comprobarLocalStorage();
function guardar(){
    objart.cod= document.getElementById("cod").value;
    objart.nom= document.getElementById("nom").value;
    objart.und= document.getElementById("und").value;
    objart.cantexist= parseFloat(document.getElementById("cantexist").value);
    objart.precioComp= parseFloat(document.getElementById("precioComp").value);
    objart.precioVta= parseFloat(document.getElementById("precioVta").value);
    let resultado= JSON.parse(JSON.stringify(objart));
    myArrayArtculo.push(resultado);
    console.log(myArrayArtculo);
    limpiarCajas();
    mostrarDatos();
}
function limpiarCajas(){
    document.getElementById("cod").value="";
    document.getElementById("nom").value="";
    document.getElementById("und").value="";
    document.getElementById("cantexist").value="";
    document.getElementById("precioComp").value="";
    document.getElementById("precioVta").value="";
    document.getElementById("cod").focus();
}
function mostrarDatos(){
    var salida='';
    for (let i = 0; i < myArrayArtculo.length; i++) {
        salida += "<tr>";
        salida += "<td>" + myArrayArtculo[i].cod + "</td>";
        salida += "<td>" + myArrayArtculo[i].nom + "</td>";
        salida += "<td>" + myArrayArtculo[i].und + "</td>";
        salida += "<td>" + myArrayArtculo[i].cantexist + "</td>";
        salida += "<td>" + myArrayArtculo[i].precioComp + "</td>";
        salida += "<td>" + myArrayArtculo[i].precioVta + "</td>";
        salida += "<td>" + utilidad(myArrayArtculo[i].precioComp, myArrayArtculo[i].precioVta, myArrayArtculo[i].cantexist) + "</td>";
        salida += "<td><button onclick='editar(" + i + ")'>Editar</button>";
        salida += "<button onclick='eliminar(" + i + ")'>Eliminar</button></td>";
        salida += "</tr>";
    }
    document.getElementById("listado").innerHTML = salida;
}
function utilidad(precioComp, precioVta, cantexist){
    var utilidad = (precioVta - precioComp) * cantexist;
    return utilidad.toFixed(2);
}
function editar(pos){
    posAct = pos;
    document.getElementById("grd").style.display = "none";
    document.getElementById("act").style.display = "block";
    document.getElementById("cod").value = myArrayArtculo[pos].cod;
    document.getElementById("nom").value = myArrayArtculo[pos].nom;
    document.getElementById("und").value = myArrayArtculo[pos].und;
    document.getElementById("cantexist").value = myArrayArtculo[pos].cantexist;
    document.getElementById("precioComp").value = myArrayArtculo[pos].precioComp;
    document.getElementById("precioVta").value = myArrayArtculo[pos].precioVta;
    
}
function actualizar(){
    myArrayArtculo[posAct].cod = document.getElementById("cod").value;
    myArrayArtculo[posAct].nom = document.getElementById("nom").value;
    myArrayArtculo[posAct].und = document.getElementById("und").value;
    myArrayArtculo[posAct].cantexist = parseFloat(document.getElementById("cantexist").value);
    myArrayArtculo[posAct].precioComp = parseFloat(document.getElementById("precioComp").value);
    myArrayArtculo[posAct].precioVta = parseFloat(document.getElementById("precioVta").value);
    document.getElementById("grd").style.display = "block";
    document.getElementById("act").style.display = "none";
    limpiarCajas();
    mostrarDatos();
    
}
function eliminar(pos){
    myArrayArtculo.splice(pos, 1);
    mostrarDatos();
}

function comprobarLocalStorage(){
    if(localStorage.getItem"ArregloArticulo") != null{
        
    }
}