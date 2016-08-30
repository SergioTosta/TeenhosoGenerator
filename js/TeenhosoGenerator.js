//Create an array of words to randomize later
var words = [ 
				 "Azarape"
				,"Beiçudo"
				,"Bicho-Preto"
				,"Cabrunco"
				,"Canheta"
				,"Cão"
				,"Cão-Miúdo"
				,"Canhoto"
				,"Capa-Verde"
				,"Capeta"
				,"Capiroto"
				,"Chifrudo"
				,"Coisa-Ruim"
				,"Cramunhão"
				,"Cramulhão"
				,"Crinado"
				,"Danado"
				,"Demo"
				,"Dos Quintos"
				,"Encardido"
				,"Espírito-de-Porco"
				,"Excomungado"
				,"Ferra-Brás"
				,"Indesejado"
				,"Lá de baixo"
				,"Mau"
				,"Mefisto"
				,"Pastor Negro"
				,"Pé-de-Bode"
				,"Pé-Preto"
				,"Peneireiro"
				,"Rabo-de-Seta"
				,"Ranheta"
				,"Renegado"
				,"Sarnento"
				,"Satanás"
				,"Sete-peles"
				,"Temba"
				,"Tinhoso"
				,"Tranca-Rua"
				,"Zarapelho"
				,"Asmodeu"
				,"Azazel"
				,"Belzebu"
				,"Lúcifer"
				,"Mastema"
				,"Mefistófeles"
				,"Satã"
				,"Pé-Cascudo"
				,"Presa"
				,"Presunto"
				,"Tição"
				,"Coxo"
				,"Moleque-do-Surrão"
				,"Careca"
				,"Futrico"
				,"Zé Pilintra"
				,"Trinca Seis"
			];

//Use a function that randomizes the contents of an array
function randomizeArray(words) {
	var i = words.length,
		j, tempi, tempj;
	if (i == 0) return false;
	while (--i) {
		j = Math.floor(Math.random() * (i + 1));
		tempi = words[i];
		tempj = words[j];
		words[i] = tempj;
		words[j] = tempi;
	}
	return words;
}

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function() {

//Start event listener for click
$("#ipsum-form").submit(function() {
	var paragraph = ' ';

	//Grab the paragraph number the user enters
	var paragraph_number = $("#paragraph_count").val();
	
	// Hides the result section if the number is 0
	if (paragraph_number == 0)
	{ 
		$("#print-paragraphs-wrapper").hide();
		return false;	
	}

	for (var i = 0; i < paragraph_number; i++) {
		paragraph += '<p>' + randomizeArray(words)[0] + '</p>';
	}
	
	$("#print-paragraphs-contents").empty().html(paragraph);
	$("#print-paragraphs-wrapper").show();

	//Prevent form from actually submitting so page does not reload
	return false;

	//End jQuery event listener
});

//End document ready
});
