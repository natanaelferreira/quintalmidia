function cPreco() {
	var insumo = document.getElementById("insumo").value;
	var quantidade = document.getElementById("quantidade").value;
	var unidade = document.getElementById("unidade").value;

	var valor;
	var total = 0.0;

	switch (insumo) {
		case "manga":
			if (unidade == "unidade") {
				valor = 2.00;
			} else if (unidade == "gramas") {
				valor = 0.08;
			} else if (unidade == "quilogramas") {
				valor = 8.00;
			} else {
				valor = 20.00;
			}			
			break;
		case "laranja":
			if (unidade == "unidade") {
				valor = 1.00;
			} else if (unidade == "gramas") {
				valor = 0.06;
			} else if (unidade == "quilogramas") {
				valor = 6.00;
			} else {
				valor = 30.00;
			}			
			break;
		case "ypioca":
			if (unidade == "unidade") {
				valor = 1.50;
			} else if (unidade == "gramas") {
				valor = 0.15;
			} else if (unidade == "quilogramas") {
				valor = 15.00;
			} else {
				valor = 50.00;
			}			
			break;
		case "gelo":
			if (unidade == "unidade") {
				valor = 0.20;
			} else if (unidade == "gramas") {
				valor = 0.02;
			} else if (unidade == "quilogramas") {
				valor = 2.00;
			} else {
				valor = 16.00;
			}			
			break;
		default:
			// statements_def
			break;
	}

	total = valor*quantidade;
	document.getElementById("preco").innerHTML = total;
}

