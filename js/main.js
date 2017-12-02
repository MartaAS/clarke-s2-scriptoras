'use strict';
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

//previsualizacion en hotra hoja
function viewprev(){
	document.getElementById('ventana2').style.display="block";
	document.getElementById('ventana1').style.display="none";
}

//fin parte marta
//About
function showPromptAbout() {
	var textAbout = prompt("Haz una breve descripción sobre ti");
	var textAboutMe = document.querySelector('.aboutMe');
	textAboutMe.value = textAbout;
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

//Skills
function showPromptSkill(){
	var skillsNameList = document.querySelectorAll(".skillName");
	var skillName;
	var skillPercList = document.querySelectorAll(".skillBar");
	var skillPercentage;
	//alert(newSkill.length);
	for(var i = 0; i < skillsNameList.length; i++){
		skillName = prompt("Introduce una habilidad");
		skillPercentage = prompt("De 1 a 10, ¿cuánto sabes?")
		skillsNameList[i].innerHTML = skillName;
		skillPercList[i].innerHTML = skillPercentage;
	}
	editar('content-skills');
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
