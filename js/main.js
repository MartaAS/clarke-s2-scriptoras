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
//guardar datos principales introducidos
function guardarDatosPrincipales(){
	var nombreformulario = document.getElementById('nombreformulario').value;
	if(nombreformulario == ""){
		}
	else {
		document.getElementById('prenombre').innerHTML = nombreformulario;
	}
	var apellidoformulario = document.getElementById('apellidoformulario').value;
	if(apellidoformulario ==""){
	}
	else {
		document.getElementById('preapellidos').innerHTML = apellidoformulario;
	}
	var profesionformulario = document.getElementById('profesionformulario').value;
	if(profesionformulario ==""){
	}
	else {
		document.getElementById('preprofesion').innerHTML = profesionformulario;
	}
	var emailformulario = document.getElementById('emailformulario').value;
	if(emailformulario ==""){
	}
	else {
		document.getElementById('preemail').innerHTML = emailformulario;
	}
	var telefonoformulario = document.getElementById('telefonoformulario').value;
	if(telefonoformulario ==""){
	}
	else {
		document.getElementById('pretelefono').innerHTML = telefonoformulario;
	}
}
var buttonSavePersonal = document.getElementById('button-save-personal');
buttonSavePersonal.addEventListener('click', guardarDatosPrincipales);

//previsualizacion en otra hoja
function viewprev(){
	document.getElementById('ventana2').style.display="block";
	document.getElementById('ventana1').style.display="none";
	document.getElementById('headerfondo').style.display="none";
}

//fin parte marta

//Typed text
// var type = ['C','r','e','a',' ','t','u',' ','C','V ',' ','c','o','n',' ','e','s','t','i','l','o',' ','.','.'];
// var h1 = document.querySelector('.textcrea');
// document.addEventListener('DOMContentLoaded', function() {
//   for (var i = 0; i < type.length; i++) {
//       setTimeout(h1.innerHTML += type[i], 1000);
//   }
// });

// Add typed text.
var idx = 0;
var txt = 'Crea tu CV con estilo...'.split('');
var speed = 150;
var waitOnFinish = 3000;
var textCreaEl = document.querySelector('.textcrea');

document.addEventListener('DOMContentLoaded', typeWriter);

function typeWriter() {
  if (idx < txt.length) {
    var tempTxt = textCreaEl.innerHTML;
    textCreaEl.innerHTML += '|';
    setTimeout(function() {
      textCreaEl.innerHTML = tempTxt + txt[idx];
      idx++;
      setTimeout(typeWriter, speed);
    }, speed/2);
  } else {
    idx = 0;
    setTimeout(function(){
      textCreaEl.innerHTML = '';
      typeWriter();
    }, waitOnFinish);
  }
}

/*--------------------------- ABOUT FUNCTION---------------------------------------*/
function saveAbout(){
	document.getElementById('aboutMe-preview').innerHTML=document.getElementById('text-about').value;
}
var buttonSaveAbout = document.getElementById('button-save-about');
buttonSaveAbout.addEventListener('click', saveAbout);

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
	document.getElementById('headerfondo').style.display = 'block';
}

//Experience
//Desplegable mes
var monthOptions = '<option value="mes">Mes</option>';
monthOptions = monthOptions + '<option value="Ene"> Enero</option>';
monthOptions = monthOptions + '<option value="Feb"> Febrero</option>';
monthOptions = monthOptions + '<option value="Mar">Marzo</option>';
monthOptions = monthOptions + '<option value="Abr">Abril</option>';
monthOptions = monthOptions + '<option value="May">Mayo</option>';
monthOptions = monthOptions + '<option value="Jun">Junio</option>';
monthOptions = monthOptions + '<option value="Jul">Julio</option>';
monthOptions = monthOptions + '<option value="Ago">Agosto</option>';
monthOptions = monthOptions + '<option value="Sep">Septiembre</option>';
monthOptions = monthOptions + '<option value="Oct">Octubre</option>';
monthOptions = monthOptions + '<option value="Nov">Noviembre</option>';
monthOptions = monthOptions + '<option value="Dic">Diciembre</option>';

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
function saveExperience(){
	document.getElementById('job-preview').innerHTML=document.getElementById('job').value;
	document.getElementById('company-preview').innerHTML=document.getElementById('company').value;
	document.getElementById('start-job-month-preview').innerHTML=document.getElementById('month-job-start').value;
	document.getElementById('end-job-month-preview').innerHTML=document.getElementById('month-job-end').value;
	document.getElementById('start-job-year-preview').innerHTML=document.getElementById('year-job-start').value;
	document.getElementById('end-job-year-preview').innerHTML=document.getElementById('year-job-end').value;
}
function addFirstExperience(){
	var timeLineLeft = document.querySelector('.left');
	timeLineLeft.classList.add('visible');
  var buttonSaveFirst = document.querySelector('.experiencia');
  buttonSaveFirst.classList.add('invisible');
  var buttonAddNew = document.querySelector('.add-new');
  buttonAddNew.classList.add('visible');
	saveFirstExperience();
}
var buttonSaveFirstExp = document.getElementById('button-save-first-exp');
buttonSaveFirstExp.addEventListener('click', addFirstExperience);

//Añadir más puestos de trabajo
function saveNewExperience(){
  var jobSectionPreview = '<div class="container-timeline left" id="container-timeline-left"><div class="content-timeline"><div class="dates-output-container"><div class="dates-container"><h3 id="start-job-year-preview"class="title-year">' + document.getElementById("year-job-start").value +'</h3><p id="start-job-month-preview">' + document.getElementById("month-job-start").value + '</p></div><h3 class="title-year">-</h3><div class="dates-container"><h3 id="end-job-year-preview"class="title-year">' + document.getElementById("year-job-end").value + '</h3><p id="end-job-month-preview">' + document.getElementById("month-job-end").value + '</p></div></div><div class="work-information-output-container"><p id="job-preview"class="job-title">' + document.getElementById("job").value + '</p><p id="company-preview">' + document.getElementById("company").value + '</p></div></div></div>'
  var container = document.querySelector('.timeline');
  container.insertAdjacentHTML('beforeend', jobSectionPreview);
}
function addNewExperience(){
	var timeLineLeft = document.querySelector('.left');
	timeLineLeft.classList.add('visible');
	saveNewExperience();
}
var buttonSaveNewExp = document.getElementById('add-new-exp');
buttonSaveNewExp.addEventListener('click', addNewExperience);

//Guardar primera formación
function saveFirstTraining(){
	document.getElementById('education-title-preview').innerHTML=document.getElementById('educ-title').value;
	document.getElementById('education-center-preview').innerHTML=document.getElementById('center').value;
	document.getElementById('start-education-month-preview').innerHTML=document.getElementById('month-training-start').value;
	document.getElementById('end-education-month-preview').innerHTML=document.getElementById('month-training-end').value;
	document.getElementById('start-education-year-preview').innerHTML=document.getElementById('year-training-start').value;
	document.getElementById('end-education-year-preview').innerHTML=document.getElementById('year-training-end').value;
}
function addFirstTraining(){
	var timeLineRight = document.querySelector('.right');
	timeLineRight.classList.add('visible');
  var buttonSaveFirst = document.querySelector('.formacion');
  buttonSaveFirst.classList.add('invisible');
  var buttonAddNew = document.querySelector('.add-new-ed');
  buttonAddNew.classList.add('visible');
	saveFirstTraining();
}
var buttonSaveFirstEd = document.getElementById('save-first-ed');
buttonSaveFirstEd.addEventListener('click', addFirstTraining);

//Añadir más titulaciones
function saveNewTraining(){
	var educationSectionPreview = '<div class="container-timeline right"><div class="content-timeline"><div class="dates-output-container"><div class="dates-container"><h3 id="start-education-year-preview" class="title-year">' + document.getElementById("year-training-start").value + '</h3><p id="start-education-month-preview">' + document.getElementById("month-training-start").value + '</p></div><h3 class="title-year">-</h3><div class="dates-container"><h3 id="end-education-year-preview" class="title-year">' + document.getElementById("year-training-end").value + '</h3><p id="end-education-month-preview">' + document.getElementById("month-training-end").value + '</p></div></div><div class="work-information-output-container"><p id="education-title-preview" class="education-title">' + document.getElementById("educ-title").value + '</p><p id="education-center-preview">' + document.getElementById("center").value + '</p></div></div></div>'
	var educationPreviewBox = document.querySelector('.timeline');
  educationPreviewBox.insertAdjacentHTML('beforeend', educationSectionPreview);
}
function addNewTraining(){
	var timeLineRight = document.querySelector('.right');
	timeLineRight.classList.add('visible');
	saveNewTraining();
}
var buttonSaveNewEd = document.getElementById('add-new-edu');
buttonSaveNewEd.addEventListener('click', addNewTraining);

//Fin de Experiencia y Formación

//cosis
//document.getElementById('barra1').style.width = '50%';
//document.getElementById('barra2').style.width = '25%';
//document.getElementById('barra3').style.width = '95%';

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
function percentageSkill(){
	var auxValue = parseInt(document.getElementById('percentage1').value) || 0;
	document.getElementById('barra1').style.width = auxValue.clamp(0,100) + "%";

	auxValue = parseInt(document.getElementById('percentage2').value) || 0;
	document.getElementById('barra2').style.width = auxValue.clamp(0,100) + "%";

	auxValue = parseInt(document.getElementById('percentage3').value) || 0;
	document.getElementById('barra3').style.width = auxValue.clamp(0,100) + "%";

	auxValue = parseInt(document.getElementById('percentage4').value) || 0;
	document.getElementById('barra4').style.width = auxValue.clamp(0,100) + "%";
}
var percentageBar1 = document.getElementById("percentage1");
percentageBar1.onkeyup = percentageSkill;

var percentageBar2 = document.getElementById("percentage2");
percentageBar2.onkeyup = percentageSkill;

var percentageBar3 = document.getElementById("percentage3");
percentageBar3.onkeyup = percentageSkill;

var percentageBar4 = document.getElementById("percentage4");
percentageBar4.onkeyup = percentageSkill;

/*var addSkills = document.getElementById("saveSkills");
addSkills.addEventListener('click', saveSkills); ESTE BOTON YA NO TENDRÍA SENTIDO*/
/*----------------------END SKILLS FUNCTIONS--------------------------*/

//Get languages and percentages
var addLangs = document.getElementById('button-save');
addLangs.addEventListener('click', addLanguages);

function addLanguages(){
  var newTextLanguage = document.querySelectorAll('.textBarPreview');
  var inputsLanguage = document.querySelectorAll('.language');
  var inputsPercentage = document.querySelectorAll('.percentage');

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
  var netSocialDiv = document.querySelector('.netsocialhidden');
  netSocialDiv.style.display = 'block';
  // var netSocial = document.querySelectorAll('.printnet');
  // for (var i=0; i<netSocial.length; i++){
  //   var text = prompt("Introduce tu usuario de "+netSocial[i].innerHTML);
  //   netSocial[i].href = netSocial[i].href + text;
  // }
}

/*javascript de redes sociales*/
function setValue(net){
	var inputSocial = document.getElementById(net);
  var liSocial = document.querySelector('.'+net);
  if(inputSocial.value != ""){//Si tiene valor el input mostramos el icono
    liSocial.classList.remove('invisible');
    liSocial.classList.add('visible');
  }else{//Si NO tiene valor el input ocultamos el icono
    liSocial.classList.remove('visible');
    liSocial.classList.add('invisible');
  }
	setSocialMedia(inputSocial.value, net);
}

function setSocialMedia(value, net){
	var aNet = document.getElementById('a-'+net);
	var url;
	if(net == 'linkedin'){
		aNet.href = aNet.href+value;
	}else if(net == 'facebook'){
		aNet.href = aNet.href+value;
	}else if(net == 'github'){
		aNet.href = aNet.href+value;
	}else if(net == 'twitter'){
		aNet.href = aNet.href+value;
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
