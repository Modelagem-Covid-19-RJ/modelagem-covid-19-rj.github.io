
$(function(){
    $("#mc-vert-navigation").load("https://modelagemcovid19.github.io/", function( response, status, xhr ) {
        if ( status == "error" ) {
          var msg = "Sorry but there was an error: ";
          $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
        }
      })
});