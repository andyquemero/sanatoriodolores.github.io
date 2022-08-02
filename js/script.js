let pacientes = document.querySelectorAll(".pacienteInfo");
let marco = document.querySelector(".marco");

marco.classList.add("marcoPrincipal")//captura clase desde style y aplica al selector de html

for(let i = 0; i<pacientes.length ;i++){

	let paciente = pacientes[i];
	let peso = paciente.querySelector(".pPeso").textContent;
	let altura = (paciente.querySelector(".pAltura").textContent);
	let IMC = imcCalculo(peso,altura/100);
	paciente.querySelector(".pIMC").textContent = IMC;
	
}

function imcCalculo(pes,alt){
	return (pes/(alt*alt)).toFixed(2);
}
