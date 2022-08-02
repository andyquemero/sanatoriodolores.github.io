let inputFiltro = document.querySelector("#filtro-tabla");
console.log(inputFiltro);

inputFiltro.addEventListener("input",function(){
	console.log(this.value);
	let ingreso = this.value;

	let paciente = document.querySelectorAll(".pacienteInfo");
	
	if (ingreso.length>0) {

		for (var i = 0; i<paciente.length; i++) {
			let paci = paciente[i];
			let nombre = paci.querySelector(".pNombre");
			let nombreValue = nombre.textContent;
			//regExp recorre y compara variable de primer parametro con variable de segundo parametro
			let expresion = new RegExp(ingreso,"i");// i es una flag que hace que no se diferencie entre mayus y min
			//expresion.test ejecuta funcionalidad de RegExp es decir evalua
			if (!expresion.test(nombreValue)) {//ingreso se compara con nombrevalue para ver si este esta en el parametro
				paci.classList.add("filtro");
			}else{
				paci.classList.remove("filtro");
			}
		}
	}else{
		for (var i = 0; i<paciente.length; i++) {
			let paci = pacientes[i];
			paci.classList.remove("filtro");
		}

	}

})