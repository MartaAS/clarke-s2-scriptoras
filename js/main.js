'use strict';
//https://stackoverflow.com/questions/11409895/whats-the-most-elegant-way-to-cap-a-number-to-a-segment
/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

//marta
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
	//fin cargar imagen
function simularClick(){
	document.getElementById('files').click()
}
//Datos principales
//guardar datos principales introducidos y pintarlos directamente en la preview
function guardarDatosPrincipales(){
	document.getElementById('prenombre').innerHTML = document.getElementById('nombreformulario').value;
	document.getElementById('preapellidos').innerHTML = document.getElementById('apellidoformulario').value;
	document.getElementById('preprofesion').innerHTML = document.getElementById('profesionformulario').value;
	document.getElementById('preemail').innerHTML = document.getElementById('emailformulario').value;
	document.getElementById('pretelefono').innerHTML = document.getElementById('telefonoformulario').value;
}
var nombreformulario = document.getElementById("nombreformulario");
nombreformulario.onkeyup = guardarDatosPrincipales;
var apellidoformulario = document.getElementById("apellidoformulario");
apellidoformulario.onkeyup = guardarDatosPrincipales;
var profesionformulario = document.getElementById("profesionformulario");
profesionformulario.onkeyup = guardarDatosPrincipales;
var emailformulario = document.getElementById("emailformulario");
emailformulario.onkeyup = guardarDatosPrincipales;
var telefonoformulario = document.getElementById("telefonoformulario");
telefonoformulario.onkeyup = guardarDatosPrincipales;
//previsualizacion en otra hoja
function viewprev(){
	document.getElementById('ventana2').style.display="block";
	document.getElementById('ventana1').style.display="none";
	document.getElementById('header-fondo').style.display="none";
	document.getElementById('button-down').style.display="none";
	document.getElementById('empty-container').style.display="none";
	document.querySelector('.cruz-section-button').style.display="block";
	}


// Add typed text.
// var idx = 0;
// var txt = 'Crea tu CV con estilo...'.split('');
// var speed = 150;
// var waitOnFinish = 3000;
// var textCreaEl = document.querySelector('.text-crea');
//
// document.addEventListener('DOMContentLoaded', typeWriter);
//
// function typeWriter() {
//   if (idx < txt.length) {
//     var tempTxt = textCreaEl.innerHTML;
//     textCreaEl.innerHTML += '|';
//     setTimeout(function() {
//       textCreaEl.innerHTML = tempTxt + txt[idx];
//       idx++;
//       setTimeout(typeWriter, speed);
//     }, speed/2);
//   } else {
//     idx = 0;
//     setTimeout(function(){
//       textCreaEl.innerHTML = '';
//       typeWriter();
//     }, waitOnFinish);
//   }
// }

/*--------------------------- ABOUT FUNCTION---------------------------------------*/
function saveAbout(){
	document.getElementById('aboutMe-preview').innerHTML=document.getElementById('text-about').value;
}
var aboutTextArea = document.getElementById('text-about');
aboutTextArea.onkeyup = saveAbout;
/*---------------------------END ABOUT FUNCTION--------------------------------------*/

//función para abrir el desplegable
function editar(idContent){
	document.getElementById(idContent).style.display = 'block';
}
//función para cerrar sección
function ocultar(idContent){
	document.getElementById(idContent).style.display = 'none';
}
//funcion cerrar preview
function closePreview(idContent){
	document.getElementById(idContent).style.display = 'none';
	document.getElementById('ventana1').style.display = 'block';
	document.getElementById('header-fondo').style.display = 'block';
	var tamañoPantalla = window.innerWidth;
	if (tamañoPantalla >= 900) {
		document.getElementById('ventana1').style.display = 'block';
		document.getElementById('ventana2').style.display = 'block';
		document.querySelector('.cruz-section-button').style.display = 'none';
	}
	else {
		document.getElementById('ventana1').style.display = 'block';
	}
}

//Experiencia y Formación
//Desplegable mes
var monthOptions = '<option value="mes">Mes</option><option value="Ene">Enero</option><option value="Feb">Febrero</option><option value="Mar">Marzo</option><option value="Abr">Abril</option><option value="May">Mayo</option><option value="Jun">Junio</option><option value="Jul">Julio</option><option value="Ago">Agosto</option><option value="Sep">Septiembre</option><option value="Oct">Octubre</option><option value="Nov">Noviembre</option><option value="Dic">Diciembre</option>';

//Se aplica en todos los que tengan la clase .month
var months = document.querySelectorAll('.month');
	for (var i = 0; i < months.length; i++){
		months[i].innerHTML = monthOptions;
	}

//desplegable años
var years = 2030;
var yearOptions = ''; //almacena options de html que van en el select
	for (var initialYear=1950; initialYear<years; initialYear++) {
	  yearOptions = yearOptions + '<option>' + (initialYear) + '</option>';
	}
//Se aplica en todos los que tengan la clase year
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
	yearsAll[i].innerHTML = yearOptions;
}
//Función para introducir en la previsualización los datos obtenidos de experiencia
var jobPreviewBox = document.querySelector('.timeline');
var buttonAddExp = document.getElementById('button-add-exp');
var alertDatesDiv = document.querySelector('.alert-dates');
var closeButtonAlert = document.querySelector('.button-alert-img');
var buttonDelExp = document.getElementById('button-delete-exp');

function saveNewExperience(){
  var jobSectionPreview = '<div class="container-timeline left" id="container-timeline-left"><div class="content-timeline"><div class="dates-output-container"><div class="dates-container"><h3 id="start-job-year-preview"class="title-year">' + document.getElementById("year-job-start").value +'</h3><p id="start-job-month-preview">' + document.getElementById("month-job-start").value + '</p></div><h3 class="title-year">-</h3><div class="dates-container"><h3 id="end-job-year-preview"class="title-year">' + document.getElementById("year-job-end").value + '</h3><p id="end-job-month-preview">' + document.getElementById("month-job-end").value + '</p></div></div><div class="work-information-output-container"><p id="job-preview"class="job-title">' + document.getElementById("job").value + '</p><p id="company-preview">' + document.getElementById("company").value + '</p></div></div></div>'

	if(document.getElementById("year-job-start").value > document.getElementById("year-job-end").value){
		showAlert();
	} else {
	  jobPreviewBox.innerHTML += jobSectionPreview;
	}
	document.getElementById("job").value = '';
	document.getElementById("company").value = '';
	document.getElementById("year-job-start").value = '1950';
	document.getElementById("month-job-start").value = 'mes';
	document.getElementById("year-job-end").value = '1950';
	document.getElementById("month-job-end").value = 'mes';
}
buttonAddExp.addEventListener('click', saveNewExperience);

function showAlert(){
	alertDatesDiv.classList.remove('invisible');
}
function closeAlert(){
	alertDatesDiv.classList.add('invisible');
}
closeButtonAlert.addEventListener('click', closeAlert);

function deleteExperience(){
	jobPreviewBox.innerHTML = '';
}
buttonDelExp.addEventListener('click', deleteExperience);

//Función para introducir en la previsualización los datos obtenidos de formación
var educationPreviewBox = document.querySelector('.timeline');
var buttonSaveFirstEd = document.getElementById('button-add-ed');
var buttonDelEd = document.getElementById('button-delete-ed');

function saveNewTraining(){
	var educationSectionPreview = '<div class="container-timeline right"><div class="content-timeline"><div class="dates-output-container"><div class="dates-container"><h3 id="start-education-year-preview" class="title-year">' + document.getElementById("year-training-start").value + '</h3><p id="start-education-month-preview">' + document.getElementById("month-training-start").value + '</p></div><h3 class="title-year">-</h3><div class="dates-container"><h3 id="end-education-year-preview" class="title-year">' + document.getElementById("year-training-end").value + '</h3><p id="end-education-month-preview">' + document.getElementById("month-training-end").value + '</p></div></div><div class="work-information-output-container"><p id="education-title-preview" class="education-title">' + document.getElementById("educ-title").value + '</p><p id="education-center-preview">' + document.getElementById("center").value + '</p></div></div></div>'

	if(document.getElementById("year-training-start").value > document.getElementById("year-training-end").value){
		showAlert();
	}else {
		educationPreviewBox.innerHTML += educationSectionPreview;
	}
	document.getElementById("educ-title").value = '';
	document.getElementById("center").value = '';
	document.getElementById("year-training-start").value = '1950';
	document.getElementById("month-training-start").value = 'mes';
	document.getElementById("year-training-end").value = '1950';
	document.getElementById("month-training-end").value = 'mes';
}
buttonSaveFirstEd.addEventListener('click', saveNewTraining);

function deleteEducation(){
	educationPreviewBox.innerHTML = '';
}
buttonDelEd.addEventListener('click', deleteEducation);
//Fin de Experiencia y Formación

/*--------------------------SKILLS FUNCTIONS------------------------------*/
//SKILLS
function saveSkills(){
	document.getElementById('skill1-preview').innerHTML = document.getElementById('skill1').value;
	document.getElementById('skill2-preview').innerHTML = document.getElementById('skill2').value;
	document.getElementById('skill3-preview').innerHTML = document.getElementById('skill3').value;
	document.getElementById('skill4-preview').innerHTML = document.getElementById('skill4').value;
}
var skillsText1 = document.getElementById("skill1");
skillsText1.onkeyup = saveSkills;
var skillsText2 = document.getElementById("skill2");
skillsText2.onkeyup = saveSkills;
var skillsText3 = document.getElementById("skill3");
skillsText3.onkeyup = saveSkills;
var skillsText4 = document.getElementById("skill4");
skillsText4.onkeyup = saveSkills;

//PERCENTAGES
var barParentArr = document.querySelectorAll('.barra');//array todos los elementos barra sombra
var percentageBoxArr = document.querySelectorAll('.skill-percent');//array de todos los elementos porcentaje
var barsArr = document.querySelectorAll('.barra_front');//array de todos los elementos barra

function percentageSkill(){
	for (var i = 0; i < barsArr.length; i++) {
		var auxValue = parseInt(percentageBoxArr[i].value) || 0;
		barsArr[i].style.width = auxValue.clamp(0,100) + "%";
		if (auxValue > 0)
			barParentArr[i].style.display = "block";
		else
			barParentArr[i].style.display = "none";
	}
}
var percentageBar1 = document.getElementById("percentage1");
percentageBar1.onkeyup = percentageSkill;

var percentageBar2 = document.getElementById("percentage2");
percentageBar2.onkeyup = percentageSkill;

var percentageBar3 = document.getElementById("percentage3");
percentageBar3.onkeyup = percentageSkill;

var percentageBar4 = document.getElementById("percentage4");
percentageBar4.onkeyup = percentageSkill;
/*----------------------END SKILLS FUNCTIONS--------------------------*/

//Get languages and percentages
var newTextLanguage = document.querySelectorAll('.text-bar-preview');
var inputsLanguage = document.querySelectorAll('.language');
var inputsPercentage = document.querySelectorAll('.percentage');

for (var i = 0; i < inputsLanguage.length; i++) {
  inputsLanguage[i].onkeyup = addLanguages;
  inputsPercentage[i].onkeyup = addLanguages;
}

function addLanguages(){
  for (var i = 0; i < newTextLanguage.length; i++) {
    newTextLanguage[i].innerHTML = inputsLanguage[i].value;
    newTextLanguage[i].parentElement.style.width = inputsPercentage[i].value + '%';
  }
}

//Hobbies Preview
function showHobbiesPreview(elementId) {
  var check = document.getElementById(elementId);

  if (check.style.display == "inline-block"){
    check.style.display = "none";
   } else {
     check.style.display = "inline-block";
   }
 }

/*Redes sociales*/
function showNetsocial() {
  var netSocialDiv = document.querySelector('.net-social-hidden');
  netSocialDiv.style.display = 'block';

}

/*javascript de redes sociales*/

document.getElementById('linkedin').addEventListener('keyup', function(){setValue('linkedin')});
document.getElementById('facebook').addEventListener('keyup', function(){setValue('facebook')});
document.getElementById('github').addEventListener('keyup', function(){setValue('github')});
document.getElementById('twitter').addEventListener('keyup', function(){setValue('twitter')});
document.getElementById('instagram').addEventListener('keyup', function(){setValue('instagram')});

function setValue(net){
	var inputSocial = document.getElementById(net);
  var liSocial = document.querySelector('.'+net);
  if(inputSocial.value != ""){//Si tiene valor el input mostramos el icono
    show(liSocial);
  }else{//Si NO tiene valor el input ocultamos el icono
    hide(liSocial);
  }
	setSocialMedia(inputSocial.value, net);
}

function show(element){
  element.classList.remove('invisible');
  element.classList.add('visible');
}

function hide(element){
  element.classList.remove('visible');
  element.classList.add('invisible');
}

function visibility(element){
  element.classList.remove('hidden');
  element.classList.add('shown');
}

function noVisibility(element){
  element.classList.remove('shown');
  element.classList.add('hidden');
}

function setSocialMedia(value, net){
	var aNet = document.getElementById('a-'+net);
	var url;
  var linkedin = "https://www.linkedin.com/in/";
  var facebook = "https://www.facebook.com/";
  var github = "https://github.com/";
  var twitter = "https://twitter.com/";
  var instagram ="https://www.instagram.com/";

	if(net == 'linkedin'){
		aNet.href = linkedin + value;
	}else if(net == 'facebook'){
		aNet.href = facebook + value;
	}else if(net == 'github'){
		aNet.href = github + value;
	}else if(net == 'twitter'){
		aNet.href = twitter + value;
	}else if(net == 'instagram'){
		aNet.href = instagram + value;
	}
}

/*enlace codigo qr*/
var buttonGenerateQr = document.getElementById('button-generateqr');
var qrLink = document.getElementById('qrlink');
buttonGenerateQr.addEventListener('click', generateQr);

function generateQr(event) {
  var inputPortfolio = document.querySelector('.inputPortfolio').value;
  qrLink.href = inputPortfolio;
  update_qrcode();
}

/*flecha*/
window.onscroll = function(){
  var arribaButton = document.getElementById('arriba');
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(scroll < 130){
    hide(arribaButton);
  }else{
    show(arribaButton);
  }
}
//subir al principio de la página cuando se hace click en la flecha arriba
var arribaButton = document.getElementById('arriba');
arribaButton.onclick = function(){
    window.scrollTo(0,0);
}

/*Escuchadores de los botones + y -*/
document.getElementById('openButtonPrincipal').addEventListener('click', listButton);
document.getElementById('closeButtonPrincipal').addEventListener('click', listButton);
document.getElementById('openButtonAbout').addEventListener('click', listButton);
document.getElementById('closeButtonAbout').addEventListener('click', listButton);
document.getElementById('openButtonExperience').addEventListener('click', listButton);
document.getElementById('closeButtonExperience').addEventListener('click', listButton);
document.getElementById('openButtonFormac').addEventListener('click', listButton);
document.getElementById('closeButtonFormac').addEventListener('click', listButton);
document.getElementById('openButtonSkill').addEventListener('click', listButton);
document.getElementById('closeButtonSkill').addEventListener('click', listButton);
document.getElementById('openButtonlanguages').addEventListener('click', listButton);
document.getElementById('closeButtonlanguages').addEventListener('click', listButton);
document.getElementById('openButtonHobbies').addEventListener('click', listButton);
document.getElementById('closeButtonHobbies').addEventListener('click', listButton);
document.getElementById('openButtonNet').addEventListener('click', listButton);
document.getElementById('closeButtonNet').addEventListener('click', listButton);
document.getElementById('openButtonQr').addEventListener('click', listButton);
document.getElementById('closeButtonQr').addEventListener('click', listButton);

//Función que cambia la visibilidad en base al elemento que reciba
function listButton(){
  if(this !== undefined){
    if(this.value == 'openButton'){// si el valor del boton es de abrir
      noVisibility(this);
      visibility(this.nextElementSibling);
    }else if(this.value == 'closeButton'){//Si es de cerrar
      noVisibility(this);
      visibility(this.previousElementSibling);
    }
  }
}

/*imprimir*/
 function printCurriculum(){
  var divPrint = document.getElementById('ventana2');
  divPrint.style.display="block";

  var contenido= divPrint.innerHTML;
  var contenidoOriginal= document.body.innerHTML;

  document.body.innerHTML = contenido;
  window.print();
  document.body.innerHTML = contenidoOriginal;
}
