// Javascript
/*Quinta-feira,18/11/2021 das 21:56:40 as    h +|-  */
function fnajax(url, funcao ) { 
    let pedido = XMLHttpRequest();
    // Resposta:
      pedido.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        funcao(pedido);

       }
    }
    // Enviar o pedido:
    pedido.open('GET', url , true);
    pedido.send();
    
}
//----------------------------------------///-----------------------------------------//-----------
function cmd1(pedido){
    document.getElementById('caixa1').innerHTML = pedido.responseText; 

}
//----------------------------------------///-----------------------------------------//-----------
function cmd2(pedido){
    document.getElementById('caixa2').innerHTML = pedido.responseText; 
}
///----------------------------//-----------------------------//---------------------------------
