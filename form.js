let botonAdd = document.querySelector("#adicionar-paciente");

botonAdd.addEventListener("click",function(event){
	
	event.preventDefault();
	let formu = document.querySelector("#formAdicionar");	

	let paciente = capturarDatosPaciente(formu);

	adicionarPacienteTabla(paciente);

	formu.reset();

});

function adicionarPacienteTabla(paciente){

	let formu = document.querySelector("#formAdicionar");

	let pacienteTr = construirTr(paciente);

	let tabla = document.querySelector(".tablaPacientes");

	if(validarPaciente(paciente) == false){
		alert("DATOS INCORRECTOS POR FAVOR REEINGRESE CON CUIDADO")
		formu.reset();
	}else if(validarPaciente(paciente) == true){
		tabla.appendChild(pacienteTr);
	}

}

function capturarDatosPaciente(form){
	//objeto paciente capturando datos del form
	let paciente = {
		nombre: form.nombre.value,
		altura: form.altura.value,
		peso: form.peso.value,
		gordura: form.gordura.value,
		imc: imcCalculo(form.peso.value, form.altura.value/100)
	}
	return paciente; 
}

function construirTr(paciente){
	//crear los td columnas de nuestra tabla. y un tr que es una paciente nuevo(fila)
	let pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("pacienteInfo");

	let nombreTabla = construirTd(paciente.nombre,"pNombre");

	let alturaTabla  = construirTd(paciente.altura,"pAltura");

	let pesoTabla = construirTd(paciente.peso,"pPeso");

	let gorduraTabla = construirTd(paciente.gordura,"pGrasa");

	let imcTabla = construirTd(paciente.imc,"pIMC");

	//asignacion al tr (fila) con las columnas solicitadas td, de nuestra tabla
	pacienteTr.appendChild(nombreTabla);
	pacienteTr.appendChild(alturaTabla);
	pacienteTr.appendChild(pesoTabla);
	pacienteTr.appendChild(gorduraTabla);
	pacienteTr.appendChild(imcTabla);

	return pacienteTr;
}

function construirTd(dato,clase){
	let td = document.createElement("td");
	td.classList.add(clase);
	td.textContent = dato;
	return td;

}

function validarPaciente(paciente){

	if((paciente.altura<50 || paciente.altura>300) || (paciente.peso<10 || paciente.peso>500) || (paciente.gordura<1 || paciente.gordura>100)){
		return false;
	}
	else{
		return true;
	}
}