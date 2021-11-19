function fetchData( event ){
    event.preventDefault();

   




    $.ajax({
        url : ` https://api.github.com/users/MarcoVillegasCampos`,
        method : 'GET',
        success : function( data ){
            $( '.results' ).empty();
         
            $('.results').append(`<p>${data.login}</p>`);
        
        },
        error : function( err ){
            console.log( err );
        }
    }); 

}

  $('button').click('submit', fetchData );
