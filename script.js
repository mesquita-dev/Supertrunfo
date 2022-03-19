var carta1 = {
  nome: "Seiya de Pégaso",
  imagem:
    "https://i.pinimg.com/originals/d6/0e/96/d60e96e11204eb9deac0dc35ada34271.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 4,
    Magia: 1
  }
};

var carta2 = {
  nome: "Saori Kido",
  imagem: "https://www.socialdub.com/groupspictures/38320/383202469531409546979.jpg?x2",
  atributos: {
    Ataque: 3,
    Defesa: 8,
    Magia: 10
  }
};

var carta3 = {
  nome: "Shiryu de dragão",
  imagem:
    "https://img.elo7.com.br/product/zoom/2B30902/camiseta-shiryu-de-dragao-fullprint-nerd.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 7,
    Magia: 3
  }
};

var carta4 = {
  nome: "Hyoga de Cisne",
  imagem:
    "http://pm1.narvii.com/6399/ededa8235289a84d041bd4601609103d91493f5f_00.jpg",
  atributos: {
    Ataque: 5,
    Defesa: 2,
    Magia: 9
  }
};

var carta5 = {
  nome: "Shun de Andrômeda",
  imagem:
    "http://pm1.narvii.com/6400/1c55c6cbf4831e75b9f678e742a5212c6face3f6_00.jpg",
  atributos: {
    Ataque: 1,
    Defesa: 8,
    Magia: 8
  }
};

var carta6 = {
  nome: "Ikki de Fênix",
  imagem:
    "https://i.pinimg.com/236x/87/38/7f/87387f75d5af53e094124100a5bd19d0.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 3,
    Magia: 8
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'> Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'> Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`;

  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
