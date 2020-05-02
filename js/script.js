$( document ).ready(function() {
    $( ".mapa-control-tipo li:nth-child(1)" ).click(function() {
		if ($('.mapa-control-tipo li:nth-child(1)').hasClass('tipo-ativo')){
			console.log('1')
		}	

		else {
			
			$('.tipo-conf').addClass('tipo-ativo');
			$('.mapa-control').addClass('mapa-control-atv-conf');
			$('.mapa-container').addClass('mapa-container-atv-conf');

			$('.tipo-obit').removeClass('tipo-ativo');
			$('.mapa-control').removeClass('mapa-control-atv-obit');
			$('.mapa-container').removeClass('mapa-container-atv-obit');
			console.log('2')
			
			if ($(".mapa-control-loc li:nth-child(1)").hasClass('loc-ativo')){
				
				$('geoplot').attr('src', 'includes/Bairros_acumulados.html');
				console.log('3')
			}
			
			else if ($(".mapa-control-loc li:nth-child(2)").hasClass('loc-ativo')){
				
				$('#geoplot').attr('src', 'includes/AP_acumulados.html');
				console.log('4')
			}	
		}
	});
});

$( document ).ready(function() {
    $( ".mapa-control-tipo li:nth-child(2)" ).click(function() {
		if ($(".mapa-control-tipo li:nth-child(2)").hasClass('tipo-ativo')){
			console.log('f')
		}	

		else {
			
			console.log('g')
			$('.tipo-obit').addClass('tipo-ativo');
			$('.mapa-control').addClass('mapa-control-atv-obit');
			$('.mapa-container').addClass('mapa-container-atv-obit');
			
			$('.tipo-conf').removeClass('tipo-ativo');
			$('.mapa-control').removeClass('mapa-control-atv-conf');
			$('.mapa-container').removeClass('mapa-container-atv-conf');

			if ($(".mapa-control-loc li:nth-child(1)").hasClass('loc-ativo')){
				
				$('#geoplot').attr('src', 'includes/Bairros_acumulados.html');
				console.log('h')
			}

			else if ($(".mapa-control-loc li:nth-child(2)").hasClass('loc-ativo')){
				
				$('#geoplot').attr('src', 'includes/AP_acumulados.html');
				console.log('i')
			}
		}
	});
});


$( document ).ready(function() {
    $( ".mapa-control-loc li:nth-child(1)" ).click(function() {
		if ($(".mapa-control-loc li:nth-child(1)").hasClass('loc-ativo')){
			console.log('a')
		}	
		else {
			console.log('B')
			$('.loc-bairros').addClass('loc-ativo-bairros');
		
			$('loc-ap').removeClass('loc-ativo-ap');
		}
	});
});

$( document ).ready(function() {
    $( ".mapa-control-loc li:nth-child(2)" ).click(function() {
		if ($(".mapa-control-loc li:nth-child(2)").hasClass('loc-ativo-ap')){
			console.log('c')
		}	
		else {
			console.log('d')
			$('.loc-ap').addClass('loc-ativo-ap');
		
			$('loc-bairros').removeClass('loc-ativo-bairros');
		}
	});
});
