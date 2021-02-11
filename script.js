
function Auto (marca, año, tipo, nombre, apellido, mail){
  this.marca = marca;
  this.año = año;
  this.tipo = tipo;
  this.nombre = nombre;
  this.apellido = apellido;
  this.mail = mail;
}

function getPrecioPorMarca(marca){

  if(marca === 'europeo'){
    return 5000;
  }

  if(marca === 'americano'){
    return 3500;
  }
  
  if(marca === 'asiatico'){
    return 2000;
  }
}

function getPrecioPorAño(año){
  return parseInt(año) * 0.5;
}

function getPrecioPorTipo(tipo){
  return tipo === 'basico' ? 1000 : 2500;
}


function procesarDatosDelForm(){

const nombre = document.getElementById("nombre").value;

const apellido = document.getElementById("apellido").value;

const mail = document.getElementById("mail").value;

const marca = document.getElementById("marca").value;

const año = document.getElementById("año").value;

const tipo = document.getElementById("radioBasico").checked ? 'basico' : 'completo'; //define si es o no "tipo basico"

const auto = new Auto(marca, año, tipo, nombre, apellido, mail)   //me crea un JSON

const autoAGuardar = JSON.stringify(auto);  //me crea string de JSON como parametro


localStorage.setItem('auto1', autoAGuardar) //guarda en localStorange

const cotizacion = getPrecioPorAño(año) + getPrecioPorMarca(marca) + getPrecioPorTipo(tipo); //formula de cotizacion

document.getElementById('cotizacion').innerHTML = 'Tu cotizacion es de ' + cotizacion + ' pesos';

}





 


/*function enter (e) {
	if (event.which == 13  ||  event.keyCode == 13) {
		alert("Calculando valor de seguro");
	}
}



function validarCampos (event){


	var valor = event.target.value;

	if (valor ==""){
		event.target.className = "form-control is-invalied"
	}

	else {
		event.target.className = "form-control"
	}

	validarTodosLosCampos()
}


function validarTodosLosCampos (){


	var valormarcaCapturar = marcaCapturar.value;
	var valorañoCapturar = añoCapturar.value;
	var valortipoCapturar = tipoCapturar.value;


		document.getElementByClassName("button-primary").disable = !(valormarcaCapturar !=="" && valormarcaCapturar !=="" && valormarcaCapturar !=="" )
	}


$ (document).ready(function(){
	$("save").clic(function(){
		let nombre = $("#nombre").val();

		let apellido = $("#apellido").val();

		let mail = $("#mail").val();

		let año = $("#año").val();

		let marca = $("#marca").val();

		let radioBasico = $("#radioBasico").val();

		let radioCompleto = $("#radioCompleto").val();

		let auto = {
			'nombre':nombre,
			'apellido':apellido,
			'mail':mail,
			'año':año,
			'marca':marca,
			'radioBasico':radioBasico,
			'radioCompleto':radioCompleto

		}

		localStorage.setItem('nombre', nombre);
		sessionStorage.setItem('mail', mail);
		$('#list').append('')
		$('#form')[0].reset();
	});
});


$ (document).ready(function(){
	$.getJSON('getUser.txt',function(response){
		console.log (JSON.stringify(response) );  
	});
});*/