'use strict';
//Datos principales
var nombreIntroducido = prompt("¿Cuál es tu nombre");
document.getElementById('nombreformulario').value=nombreIntroducido;
var apellidoIntroducido = prompt("¿Cuáles son tus apellidos?");
document.getElementById('apellidoformulario').value=apellidoIntroducido;
var profesionIntroducido = prompt("¿Cuál es tu profesión");
document.getElementById('profesionformulario').value=profesionIntroducido;
var emailIntroducido = prompt("¿Cuál es tu email");
document.getElementById('emailformulario').value=emailIntroducido;
var telefonoIntroducido = prompt("¿Cuál es tu teléfono móvil?");
document.getElementById('telefonoformulario').value=telefonoIntroducido;
//fin promp datos principales
//guardar datos principales introducidos
function guardardatosprincipales(){
document.getElementById('prenombre').innerHTML=nombreIntroducido;
document.getElementById('preapellidos').innerHTML=apellidoIntroducido;
document.getElementById('preprofesion').innerHTML=profesionIntroducido;
document.getElementById('preemail').innerHTML=emailIntroducido;
document.getElementById('pretelefono').innerHTML=telefonoIntroducido;
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

/*languages form section*/
	function showPromptLanguage() {
		var newTextLanguage = document.querySelector('.textBarPreview');
		var text = prompt("Introduce un idioma");
		newTextLanguage.innerHTML = text;
	}

	function showPromptPercentage() {
		var percentage = prompt("Introduce el porcentaje");
		var newPercentageLanguage = document.getElementById('percentageBar1').style.width = percentage + '%';
	}

	function addInput() {
		var addNewInput = document.querySelector('.languagesForm');
		var addInput = document.createElement('input');
		addNewInput.append(addInput);
	}

/*languages preview section*/
// var newTextLanguage = document.querySelector('.textBarPreview');
// newTextLanguage.innerHTML = text;

/*languages section*/

/*Redes sociales*/
var netSocial = document.querySelector('#a-linkedin');
var text = prompt("Introduce tu usario");
netSocial.href = netSocial.href + text;

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
