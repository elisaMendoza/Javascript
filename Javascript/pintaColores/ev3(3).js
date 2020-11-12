document.getElementById("btnCruz").
addEventListener("click", CruzRoja);
document.getElementById("btnCuadrado").
addEventListener("click", CuadradoRojo);
document.getElementById("btnTriangulo").
addEventListener("click", TrianguloRojo);
document.getElementById("borrar").
addEventListener("click", borrar);
// function borrar(){
// document.getElementById("feliz").
// removeEventListener("click", feliz);
// document.getElementById("neutral").
// removeEventListener("click", neutral);
// document.getElementById("enojada").
// removeEventListener("click", enojada);
// }
function TrianguloRojo(){
document.getElementById("formaCuadricula").src =
"TrianguloRojo.png";
}
function CuadradoRojo(){
document.getElementById("formaCuadricula").src =
"CuadraroRojo.png";
}
function CruzRoja(){
document.getElementById("formaCuadricula").src =
"CruzRoja.png";
}
