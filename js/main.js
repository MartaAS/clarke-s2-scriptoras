'use strict';
//prueba cargar imagen
function archivo(evt) {
      var files = evt.target.files; // FileList object

        //Obtenemos la imagen del campo "file".
      for (var i = 0, f; f = files[i]; i++) {
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }

           var reader = new FileReader();

           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
                      document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
               };
           })(f);

           reader.readAsDataURL(f);
       }
}

      document.getElementById('files').addEventListener('change', archivo, false);
			// duplico para img prev
			function archivo2(evt) {
			      var files = evt.target.files; // FileList object

			        //Obtenemos la imagen del campo "file".
			      for (var i = 0, f; f = files[i]; i++) {
			           //Solo admitimos imágenes.
			           if (!f.type.match('image.*')) {
			                continue;
			           }

			           var reader = new FileReader();

			           reader.onload = (function(theFile) {
			               return function(e) {
			               // Creamos la imagen.
			                      document.getElementById("prefoto").innerHTML = ['<img class="thumb2" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
			               };
			           })(f);

			           reader.readAsDataURL(f);
			       }
			}

			      document.getElementById('files').addEventListener('change', archivo2, false);
	//fin prueba cargar imagen

//Datos principales
function clicknombre(){
var nombreIntroducido = prompt("¿Cuál es tu nombre");
document.getElementById('nombreformulario').value=nombreIntroducido;
}
function clickapellido(){
var apellidoIntroducido = prompt("¿Cuáles son tus apellidos?");
document.getElementById('apellidoformulario').value=apellidoIntroducido;
}
function clickprofesion(){
var profesionIntroducido = prompt("¿Cuál es tu profesión");
document.getElementById('profesionformulario').value=profesionIntroducido;
}
function clickemail(){
var emailIntroducido = prompt("¿Cuál es tu email");
document.getElementById('emailformulario').value=emailIntroducido;
}
function clicktelefono(){
var telefonoIntroducido = prompt("¿Cuál es tu teléfono móvil?");
document.getElementById('telefonoformulario').value=telefonoIntroducido;}

//fin promp datos principales


//guardar datos principales introducidos
function guardardatosprincipales(){
document.getElementById('prenombre').innerHTML=document.getElementById('nombreformulario').value;
document.getElementById('preapellidos').innerHTML=document.getElementById('apellidoformulario').value;
document.getElementById('preprofesion').innerHTML=document.getElementById('profesionformulario').value;
document.getElementById('preemail').innerHTML=document.getElementById('emailformulario').value;
document.getElementById('pretelefono').innerHTML=document.getElementById('telefonoformulario').value;
}
//About
//función para abrir el desplegable
function editar(idContent){
document.getElementById(idContent).style.display = 'block';
}
//función para cerrar sección
function ocultar(idContent){
	document.getElementById(idContent).style.display = 'none';
}

/*var aboutMe = document.querySelector("#about");
var aboutInput = prompt("Haz una breve descripción sobre ti.");
aboutMe.innerHTML = aboutInput;
*/
//Experience

//Desplegable mes
var monthOptions = '<option value="mes">Mes</option>';
monthOptions = monthOptions + '<option value="enero"> Enero</option>';
monthOptions = monthOptions + '<option value="febrero"> Febrero</option>';
monthOptions = monthOptions + '<option value="marzo">Marzo</option>';
monthOptions = monthOptions + '<option value="abril">Abril</option>';
monthOptions = monthOptions + '<option value="mayo">Mayo</option>';
monthOptions = monthOptions + '<option value="junio">Junio</option>';
monthOptions = monthOptions + '<option value="julio">Julio</option>';
monthOptions = monthOptions + '<option value="agosto">Agosto</option>';
monthOptions = monthOptions + '<option value="septiembre">Septiembre</option>';
monthOptions = monthOptions + '<option value="octubre">Octubre</option>';
monthOptions = monthOptions + '<option value="noviembre">Noviembre</option>';
monthOptions = monthOptions + '<option value="diciembre">Diciembre</option>';


var months = document.querySelectorAll('.month');
for (var i = 0; i < months.length; i++) {
	months[i].innerHTML = monthOptions;
}


var years = 2030;
var yearOptions = ''; //almacena options de html que van en el select

for (var initialYear=1949; initialYear<years; initialYear++) {
  yearOptions = yearOptions + '<option value=">' + (initialYear) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
	yearsAll[i].innerHTML = yearOptions;
}



/*
var jobName = document.querySelector('#job-pre');
var jobInput = prompt('Introduce el nombre del puesto de trabajo');
jobName.innerHTML = jobInput;

var companyName = document.querySelector('#company-pre');
var companyInput = prompt('Introduce el nombre de la empresa');
companyName.innerHTML = companyInput;
*/
//Skills
var newSkill = document.querySelectorAll(".skilli");
var skill;
//alert(newSkill.length);
for(var i = 0; i < newSkill.length; i++){
	//skill = prompt("Introduce skill");
	newSkill[i].innerHTML = skill;
}

//languages form section
// function showPromptLanguage() {
//   var newTextLanguage = document.querySelectorAll('.textBarPreview');
//     for (var i = 0; i < newTextLanguage.length; i++) {
//       var text = prompt("Introduce un idioma");
//       newTextLanguage[i].innerHTML = text;
//       var percentage = prompt("Introduce el porcentaje");
//       var newPercentageLanguage = document.querySelectorAll('.percentageBar').style.width = percentage + '%';
//       newPercentageLanguage[i].innerHTML = percentage;
//     }
// 	}

	function showPromptLanguage() {
    var newTextLanguage = document.querySelectorAll('.textBarPreview');
    for (var i = 0; i < newTextLanguage.length; i++) {
      var text = prompt("Introduce un idioma");
      newTextLanguage[i].innerHTML = text;
    }

	}

	function showPromptPercentage() {
    var newPercentageLanguage = document.querySelectorAll('.percentageBar1');
    for (var i = 0; i < newPercentageLanguage.length; i++) {
      var percentage = prompt("Introduce el porcentaje");
      // newPercentageLanguage[i] = percentage + '%';
      // newPercentageLanguage[i].innerHTML = newPercentageLanguage[i].style.width = percentage + '%';
    }
	}
	// function addInput() {
	// 	var addNewInput = document.querySelector('.languagesForm');
	// 	var addInput = document.createElement('input');
  //   addInput.style.cssText = 'background-color: black;'
	// 	addNewInput.append(addInput);
	// }

//Hobbies form
function showHobbiesForm() {
  document.getElementById('hobbiesForm').style.display = 'block';
}


/*Redes sociales*/
function showNetsocial() {
  var netSocial = document.querySelectorAll('.printnet');
  for (var i=0; i<netSocial.length; i++){
    var text = prompt("Introduce tu usuario de "+netSocial[i].innerHTML);
    netSocial[i].href = netSocial[i].href + text;
  }
}

/*javascript de redes sociales
function setValue(net){
	var inputSocial = document.getElementById(net);
	setSocialMedia(inputSocial.value, net);
}

function setSocialMedia(value, net){
	var aNet = document.getElementById('a-'+net);
	var url;
	if(net == 'linkedin'){
		aNet.href = aNet.href+value;
	}else if(net == 'Facebook'){
		aNet.href = aNet.href+value;
	}else if(net == 'Github'){
		aNet.href = aNet.href+value;
	}else if(net == 'Twitter'){
		aNet.href = aNet.href+value;
	}
}
*/
