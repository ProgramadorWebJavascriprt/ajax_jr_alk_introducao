/* sexta-feira,19/11/2021 das 17:43:04 as  h+|-*/
function executar(){
    
      // ajax
      let pedido = new XMLHttpRequest();
  // resposta 
      pedido.onreadystatechange = function(){
        // verificar o estado da resposta 
        if(this.readyState == 4 && this.status == 200){
         // tratamento dos dados 
           let dados = this.responseXML;
           let clientes = dados.getElementsByTagName("cliente");
           let conteudo = '<h2> CLientes  </h2>';
           for(let i = 0; i < clientes.length;i ++) {
              conteudo += '<p> nome:' + clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + '</p>';
              conteudo += '<p> conctato:' + clientes[i].getElementsByTagName("conctato")[0].childNodes[0].nodeValue + '</p>';
              conteudo += '<hr>';
              
           }
            

        // definir a apresentação dos dados 
        document.getElementById('caixa1').innerHTML = conteudo;
       }
      }
   // pedido
  pedido.open("GET", "dados.xml", true);
  pedido.send();

}