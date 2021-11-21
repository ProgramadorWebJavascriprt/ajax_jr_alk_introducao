/* function executar() {
     $(`#caixa`).load(`aj_jQ.txt`);

 }
 $(document).ready(function(){
    $(`#cmd`).click(function(){
        $(`#caixa`).load(`aj_jQ.txt`);
    });
 });*/
 $(document).ready(function(){
    $(`#cmd`).click(
        function(){
        $(`#caixa`).load("aj_jQ.txt", function(responseTxt, statusTxt, xhr) {
            if(statusTxt == "sucess")
              alert('Aconteceu uma comunicação com sucesso');
           if(statusTxt == "error")
            //alert(  'Aconteceu um erro na  comunicação');
          alert('ERRO:' + xhr.status + ":" + xhr,statusText);
             
        });
    
    });
 });
