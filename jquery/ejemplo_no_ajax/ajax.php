<?php 
sleep(2);
//$file = file_get_contents("../Entorno_servidor/repaso PHP/ejer_form_table/peticiones.php"); 
$file = file_get_contents("http://apuestas.jm.bymhost.com/"); 
echo $file;
?>