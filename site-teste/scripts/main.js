//const meuCabecalho = document.querySelector('h1');  /*seletor de consulta*/
//meuCabecalho.textContent = 'IGREJA PRESBITERIANA!';            /*conteudo do texro*/


let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/cross.png') {
      minhaImagem.setAttribute ('src','imagens/fundo2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/cross.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }
  