'use strict';
//marta
//prueba cargar imagen
function archivo(evt) {
  var files = evt.target.files; // FileList object
  //Obtenemos la imagen del campo "file".
    for (var i = 0, f; f = files[i]; i++){
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
//guardar datos principales introducidos
function guardardatosprincipales(){
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

//previsualizacion en otra hoja
function viewprev(){
	document.getElementById('ventana2').style.display="block";
	document.getElementById('ventana1').style.display="none";
	document.getElementById('headerfondo').style.display="none";
}

//fin parte marta
//About
function showPromptAbout() {
	document.getElementById('aboutMe-preview').innerHTML=document.getElementById('text-about').value;
	/*var textAbout = prompt("Haz una breve descripción sobre ti");
	var textAboutMe = document.querySelector('.aboutMe');
	textAboutMe.value = textAbout;*/
	editar('content-about');
}

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

//Función para introducir en la previsualización los datos obtenidos de formación
function saveTraining(){
	document.getElementById('education-title-preview').innerHTML=document.getElementById('educ-title').value;
	document.getElementById('education-center-preview').innerHTML=document.getElementById('center').value;
	document.getElementById('start-education-month-preview').innerHTML=document.getElementById('month-training-start').value;
	document.getElementById('end-education-month-preview').innerHTML=document.getElementById('month-training-end').value;
	document.getElementById('start-education-year-preview').innerHTML=document.getElementById('year-training-start').value;
	document.getElementById('end-education-year-preview').innerHTML=document.getElementById('year-training-end').value;
}
//Fin de Experiencia y Formación

//cosis
//document.getElementById('barra1').style.width = '50%';
//document.getElementById('barra2').style.width = '25%';
//document.getElementById('barra3').style.width = '95%';

//Skills
function saveSkills(){
document.getElementById('skillsPreview').innerHTML=document.getElementById('addSkills').value;
	var skillsNameList = document.querySelectorAll(".skillName");
	var skillName;
	var skillPercList = document.querySelectorAll(".skillBar");
	var skillPercentage;
	//alert(newSkill.length);
	/*for(var i = 0; i < skillsNameList.length; i++){
		skillName = prompt("Introduce una habilidad");
		skillPercentage = prompt("De 1 a 10, ¿cuánto sabes?")
		skillsNameList[i].innerHTML = skillName;
		skillPercList[i].innerHTML = skillPercentage;
	}*/
	editar('content-skills');
}


/*function showPromptLanguage() {
  var newTextLanguage = document.querySelectorAll('.textBarPreview');
  for (var i = 0; i < newTextLanguage.length; i++) {
    var text = prompt("Introduce un idioma");
    newTextLanguage[i].innerHTML = text;
    var pct = prompt("Introduce el porcentaje");
    newTextLanguage[i].parentElement.style.width = pct + "%";
  }
}*/

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
