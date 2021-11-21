<?php
 //terça-feira,16/11/2021 meus primeiros códigos em PHP;
// devolve as boa vindas ao usuario com nome e sobrenome;

if(isset($_GET['n'])) and isset($_GET['a']) ){
    $nome = $_GET['n'];
    $apelido = $_GET['a'];
    $frase_final ="Seja  bem-vindo ao servidor, Sr(a).$nome $apelido";
}
 echo 'teste'
?>