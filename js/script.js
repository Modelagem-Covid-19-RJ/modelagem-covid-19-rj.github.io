$( document ).ready(function() {
    var tipo = 'confirmados';
    var qualidade = 'acum';
    var plot_estilo = 'grafico';
    var newUrl = 'includes/' + plot_estilo + '_bairros_' + tipo + '_' + qualidade + '.html';
    var titulo_tipo = 'Casos';
    var titulo_qualidade = 'acumulados';
    
    $('.plot').attr('src', newUrl);
    
    $(".tipo a").click(function() {
        tipo = $(this).attr("tipo");
        newUrl = 'includes/' + plot_estilo + '_bairros_' + tipo + '_' + qualidade + '.html';
        if ($(this).attr('tipo') == 'confirmados'){
            $('.titulo-tipo').html('Casos');
        }

        else {
            $('.titulo-tipo').html('Óbitos');
        }
        $('.plot').attr('src', newUrl);
        if ($(this).hasClass('botao-ativo')){
			console.log('1')
		}	

		else {
            
            $('.tipo .botao-ativo').removeClass('botao-ativo');
            $(this).addClass('botao-ativo');
            
            console.log('2')
        }
        return false;
    });

    $(".qualidade a").click(function() {
        qualidade = $(this).attr("qualidade");
        newUrl = 'includes/' + plot_estilo + '_bairros_' + tipo + '_' + qualidade + '.html';
        $('.plot').attr('src', newUrl);

        if ($(this).hasClass('botao-ativo')){
			console.log('1')
		}	

		else {
            
            $('.qualidade .botao-ativo').removeClass('botao-ativo');
            $(this).addClass('botao-ativo');
            
            console.log('2')
        }
        return false;
    });

    $(".plot-estilo a").click(function() {
        plot_estilo = $(this).attr("plot-estilo");
        newUrl = 'includes/' + plot_estilo + '_bairros_' + tipo + '_' + qualidade + '.html';
        $('.plot').attr('src', newUrl);

        if ($(this).hasClass('botao-ativo')){
			console.log('1')
		}	

		else {
            
            $('.plot-estilo .botao-ativo').removeClass('botao-ativo');
            $(this).addClass('botao-ativo');
            
            console.log('2')
        }
        return false;
    });

    


})