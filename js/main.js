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

<<<<<<< HEAD
/*languages preview section*/
var newTextLanguage = document.querySelector('.textBarPreview');
var text = prompt("Introduce un idioma");
=======
/*languages section*/


var newTextLanguage = document.querySelector('.textBar');
//var text = prompt("Introduce un idioma");
>>>>>>> d0b8eb627969bd70c9189395e3f32523c0eea725
newTextLanguage.innerHTML = text;



/*languages section*/
