'use strict';
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
	skill = prompt("Introduce skill");
	newSkill[i].innerHTML = skill;
}

/*languages section*/


var newTextLanguage = document.querySelector('.textBar');
var text = prompt("Introduce un idioma");
newTextLanguage.innerHTML = text;

/*languages section*/
