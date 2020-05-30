    // FUNÇÃO PARA ATIVAR O AUTO CONTRASTE
          function auto(){
        var altoContraste = document.createElement('link');

 altoContraste.rel = 'stylesheet';
 altoContraste.href = 'acesibilidade/altocontraste.css';
 document.body.appendChild(altoContraste);
          }//fim
      
        // FUNÇÃO PARA VOLTAR A TELA NORMAL(ATUALIZAÇÃO)
    function normal(){
         
            window.location.reload();
           
        }	//fim
        
        
  // Início do código de Aumentar/ Diminuir a letra
 
var tagAlvo = new Array('h3', 'h5', 'blockquote','ul', 'a'); //pega todas as tags p//
 
// Especificando os possíveis tamanhos de fontes, poderia ser: x-small, small...
var tamanhos = new Array( '12px','14px','16px','18px','22px','24px','26px' );
var tamanhoInicial = 2;
 
function mudaTamanho( idAlvo,acao ){
if (!document.getElementById) return
var selecionados = null,tamanho = tamanhoInicial,i,j,tagsAlvo;
tamanho += acao;
if ( tamanho < 0 ) tamanho = 0;
if ( tamanho > 6 ) tamanho = 6;
tamanhoInicial = tamanho;
if ( !( selecionados = document.getElementById( idAlvo ) ) ) selecionados = document.getElementsByTagName( idAlvo )[ 0 ];
 
selecionados.style.fontSize = tamanhos[ tamanho ];
 
for ( i = 0; i < tagAlvo.length; i++ ){
tagsAlvo = selecionados.getElementsByTagName( tagAlvo[ i ] );
for ( j = 0; j < tagsAlvo.length; j++ ) tagsAlvo[ j ].style.fontSize = tamanhos[ tamanho ];
}
}

// Fim do código de Aumentar/ Diminuir a letra