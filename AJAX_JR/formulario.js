// Submeter o formulário...
function Submeterformulario(id_formulario){
    let frm = $(`#`+id_formulario);
      frm.submit(function(e){ 
          // impede e submissão tradicional
          e.preventDefault();
          // submissão do formulário em Ajax
          $.ajax({
              type: frm.attr('method'),
               url: frm.attr('action'),
               data: frm.serialize(),
               // resposta do sucesso 
               success: function(i){
                  $(`#info`).html('Enviado com sucesso');
                },
                //erro:
                error: function(i){
                    $(`#info`).html('lasgou... tentei mais tarde...o Zuquembreque tropeçou nos cabos de redes....');
                }
          });
       
      });

}
