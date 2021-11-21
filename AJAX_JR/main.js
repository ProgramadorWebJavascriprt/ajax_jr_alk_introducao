window.onload = function(){
    document.getElementById('btn').addEventListener('click', btn_click);
}
 function btn_click() {
     //document.getElementById('caixa').innerHTML = 'Teste...';
     // ajax
     // Objeto request
     let pedido = new XMLHttpRequest();
     // função
     pedido.onreadystatechange = function(){
         if(pedido.readyState == 4 && pedido.status == 200) {
            document.getElementById('caixa').innerHTML = this.responseText;
         } else {
            document.getElementById('caixa').innerHTML = 'Tente mais tarde';

         } 

         
         //.getElementById('caixa').innerHTML = pedido.responseText;

     }
     // preparar o pedido:
     pedido.open("GET",  "processar.php?n=Andréluis=Kunert",  true);
     // enviar o pedido:
     pedido.send();

 }
