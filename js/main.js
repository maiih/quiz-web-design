// trocar titulo p binario

var title = document.querySelector('#title')

if (title) {

  title.addEventListener('mouseover', function (evento) {
    title.innerHTML = ('01101100 01100001 01111001 01101100 01100001');
  })

  title.addEventListener('mouseout', function (evento) {
    title.innerHTML = ('LAYLA');
  })
}

// Parabéns

var final = document.querySelector('#final')

if (final) {

  final.addEventListener('mouseover', function (evento) {
    final.innerHTML = ('Parabéns!');
  })

  final.addEventListener('mouseout', function (evento) {
    final.innerHTML = ('70 61 72 61 62 26 41 74 69 6C 64 65 3B 26 63 6F 70 79 3B 6E 73!');
  })
}

// aumentar e diminuir a fonte

tamanho = 16;
function diminuir() {
  tamanho--;
  document.body.style.fontSize = tamanho + "px";
}
function aumentar() {
  tamanho++;
  document.body.style.fontSize = tamanho + "px";
}

//constraste preto

var b_constraste_preto = document.querySelector('#contraste_preto')

function contrasteParaPreto() {
  var todas = document.querySelectorAll('*')
  todas.forEach(function (tag) {
    tag.style.backgroundColor = 'black';
    tag.style.color = 'white';
    tag.style.borderColor = 'white';
  })
}

b_constraste_preto.addEventListener('click', contrasteParaPreto)

// constraste branco

var b_constraste_branco = document.querySelector('#contraste_branco')

function contrasteParaBranco() {
  var todas = document.querySelectorAll('*')
  todas.forEach(function (tag) {
    tag.style.backgroundColor = 'white';
    tag.style.color = 'black';
    tag.style.borderColor = 'black';
  })
}

b_constraste_branco.addEventListener('click', contrasteParaBranco)



// afirmativa correta ou errada
// Criar item:
var key = {}
localStorage.setItem(key, JSON.stringify(pontuacao));
var botaoContinuar = document.querySelector('a#proxima')
var formulario = document.querySelector('form')
var pontuacao = 0
if (botaoContinuar === null) {
  // Mostrar a pontuação
  // Ler item:
  let pontos = JSON.parse(localStorage.getItem(key));
  document.querySelector('#pontuacao').innerHTML = `${pontos}/10`;
}
botaoContinuar.addEventListener('click', function (evento) {
  evento.preventDefault()

  // pegar o value do input selecionado
  const formData = new FormData(formulario);
  let resposta;
  console.log(formData.classList);
  for (const [key, value] of formData) {
    console.log(key, value);
    if (key == 'opcao') {
      resposta = value
    }
  }

  // colorir o input selecionado (vermelho ou verde)
  var alternativas = document.querySelectorAll('input[type="radio"]')
  // deixar todas as alternativas na cor branca
  alternativas.forEach(a => {
    a.parentElement.style.backgroundColor = 'white'
  });

  var marcado = document.querySelector('input[type="radio"]:checked')
  marcado.parentElement.style.borderRadius = '4px'

  if (resposta == 'true') {
    marcado.parentElement.style.backgroundColor = '#76B947'
    pontuacao++
    console.log(pontuacao)
  } else {
    marcado.parentElement.style.backgroundColor = '#FF8A8A'
  }

  botaoContinuar.classList.add('disabled')

  var tID = setTimeout(function () {
    window.location.href = botaoContinuar.dataset.proxima;
    window.clearTimeout(tID);		// clear time out.
  }, 3000);

  //salvar pontuaçao no cache do navegador 


})

