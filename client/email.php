<?php
$mensaje =  "Nombre: ".$_POST['nombre']."\n".
            "Telefono: ".$_POST['telefono']."\n".
            "Comentario: ".$_POST['mensaje'];

$destino ="jcortizojeda@gmail.com";
$remitente=$_POST['email'];
$asunto="Mensaje de: ".$_POST['nombre'];
mail($destino,$asunto,$mensaje,"FROM: $remitente");
echo"Su mensaje fue enviado, muy pronto nos pondremos en contacto con usted.";
?>