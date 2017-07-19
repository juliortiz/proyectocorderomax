function mail(){
    
    $("#c_enviar").attr("disabled", false);
    $(".c_error").remove();

    var filter = /^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#c_email').val();
    var s_nombre = $('#c_nombre').val();
    var s_telefono = $('#c_telefono').val();

    if (filter.test(s_email)){
        sendMail = "true";
    }
    else {
        $('#c_emailerror').after("<p class='c_error' id='c_error_mail'>Ingrese e-mail valido.</p>");
        sendMail = "false";
    }
    console.log("FFF");
    if (s_nombre.length == 0 ){
            $('#c_nombreerror').after( "<p class='c_error' id='c_error_name'>Ingrese su nombre.</p>" );
            var sendMail = "false";
        }

    if (s_telefono.length == 0 ){
            $('#c_telefonoerror').after( "<p class='c_error' id='c_error_name'>Ingrese su número  telefonico.</p>" );
            var sendMail = "false";
        }
    
        
    if(sendMail == "true"){

        var datos = {
            "nombre" : $('#c_nombre').val(),
            "email" : $('#c_mail').val(),
            "telefono" : $('#c_telefono').val(),
            "mensaje" : $('#c_mensaje').val()
        };


        $.ajax({
            data:  datos,
            url:   'email.php',
            type:  'post',

            beforeSend: function () {
                $("#c_enviar").val("Enviando...");
            },

            success:  function (response) {
                $('form')[0].reset(); 
                $("#c_enviar").val("Enviar");
                $("#c_information p").html(response);
                $("#c_information").fadeIn('slow');
                $("#c_enviar").removeAttr("disabled"); 
            }

        });
    }
    else{
        $("#c_enviar").removeAttr("disabled");
    }
}
