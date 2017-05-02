var regiones = ["Amazonas","Áncash","Apurímac","Arequipa","Ayacucho","Cajamarca","Callao","Cuzco","Huancavelica","Huánuco","Ica","Junin","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martin","Tacna","Tumbes","Ucayali"];
var edad = []
  for (var i=1; i<100;i++){
    edad.push(i);
  }

function newOption(elem){
  var option = document.createElement("option");
  option.setAttribute("value",elem);
  option.innerText = elem;
  return option;
}

window.addEventListener("load",function(){
  var sectionEdad = edad.forEach(function(e){
    var option = document.createElement("option");
    option.setAttribute("value","0");
    option.hidden = "";
    document.getElementById("edad").appendChild(option);
    document.getElementById("edad").appendChild(newOption(e));
  });
  return sectionEdad;
});
