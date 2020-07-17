function cambia_tema(elemento){
	console.log("Elemento: ", elemento);
	let color_tema = elemento.style.background;

	// .cabecera_cv
	let cabecera_cv = document.querySelectorAll(".cabecera_cv");
	for (var i = 0; i < cabecera_cv.length; i++) {
		let cb_cv = cabecera_cv[i];
		cb_cv.style.background = color_tema;
	}

	// .redes_sociales ul li
	let redes_sociales = document.querySelectorAll(".redes_sociales ul li");
	for (var i = 0; i < redes_sociales.length; i++) {
		let red_social = redes_sociales[i];
		red_social.style.background = color_tema;
	}

	// .titulo_info
	let titulos_info = document.querySelectorAll(".titulo_info");
	for (var i = 0; i < titulos_info.length; i++) {
		let titulo_info = titulos_info[i];
		titulo_info.style.color = color_tema;
	}

	// .titulo_experiencia_sup
	let titulos_experiencia_sup = document.querySelectorAll(".titulo_experiencia_sup");
	for (var i = 0; i < titulos_experiencia_sup.length; i++) {
		let titulo_experiencia_sup = titulos_experiencia_sup[i];
		titulo_experiencia_sup.style.color = color_tema;
	}

	// .titulo_experiencia
	// .fecha_experiencia
	let titulos_experiencia = document.querySelectorAll(".titulo_experiencia");
	for (var i = 0; i < titulos_experiencia.length; i++) {
		let titulo_experiencia = titulos_experiencia[i];
		titulo_experiencia.style.borderBottom = "1px solid " + color_tema;
	}

	let fechas_experiencia = document.querySelectorAll(".fecha_experiencia");
	for (var i = 0; i < fechas_experiencia.length; i++) {
		let fecha_experiencia = fechas_experiencia[i];
		fecha_experiencia.style.borderBottom = "1px solid " + color_tema;
	}

	let titulos_area_interes = document.querySelectorAll(".titulo_area_interes");
	for (var i = 0; i < titulos_area_interes.length; i++) {
		let titulo_area_interes = titulos_area_interes[i];
		titulo_area_interes.style.color = color_tema;
	}
}

function abrir_red_social(elemento){
	let id_elemento = elemento.getAttribute("id");
	let url = "";
	switch(id_elemento){
		case "youtube":
			url = "https://www.youtube.com/channel/UCgWPvqscqkl7NplDU-mJ-uA";
			window.open(url, '_blank');
		break;
		case "linkedin":
			url = "https://www.linkedin.com/in/emmanuel-lagunas-evangelista-124494141/";
			window.open(url, '_blank');
		break;
		default:
		break;
	}
}