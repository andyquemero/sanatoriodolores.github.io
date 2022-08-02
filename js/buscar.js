let boton = document.querySelector("#buscar-paciente");
let errorAjax = document.querySelector("#error");
errorAjax.classList.add("filtro");

boton.addEventListener("click",function(){
	
	let xhr = new XMLHttpRequest;
	xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
	xhr.addEventListener("load",function(){

		console.log(xhr.status);
		if(xhr.status == 200){

			let respuesta = xhr.responseText;	

			let pacientes = JSON.parse(respuesta);

			pacientes.forEach(function(paciente){
				paciente.altura = paciente.altura*100;
				adicionarPacienteTabla(paciente);
			})

		}else{
			console.log(xhr.status);
			errorAjax.classList.remove("filtro");
		}
	})
	xhr.send();

})