let infoAgricultura, infoConsumo;
let inputSugestao, botaoEnviar;
let sugestoes = [];

function setup() {
  noCanvas();

  // Título principal
  createElement('h1', 'Cidade e campo: Como cada um pode se ajudar?');

  // Subtítulo 1 - Agricultura
  infoAgricultura = createElement('h2', 'Como o campo ajuda no desenvolvimento da cidade:');
  infoAgricultura.style('color', 'rgb(0,72,255)');
  createP('Agricultores oferecem alimentos (verduras e frutas) para os mercados, nos proporcionando alimentos de boa qualidade e, muitas vezes, sem agrotóxicos. O campo influencia áreas como economia, alimentação, meio ambiente e cultura.');

  // Subtítulo 2 - Consumo
  infoConsumo = createElement('h2', 'Ajudas que a cidade oferece para o desenvolvimento do campo:');
  infoConsumo.style('color', '#FFC107');
  createP('Nas cidades, muitas vezes é onde os moradores do campo obtêm uma fonte de renda, vendendo seus produtos para mercados, feiras e outros estabelecimentos. Além disso, as cidades oferecem acesso a equipamentos e maquinários que tornam a plantação e a colheita mais práticas e eficientes. Por meio de investimentos, acesso a serviços e troca de conhecimentos, a cidade contribui para uma vida rural mais digna, produtiva e sustentável.');

  // Subtítulo 3 - Entrevistas
  let subtituloEntrevistas = createElement('h2', 'Entrevistas');
  subtituloEntrevistas.style('color', 'blue');

  createP('Entrevista com Agricultor:');
  createDiv('<iframe width="450" height="290" src="https://www.youtube.com/embed/KBvWCEYiwdg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  createP('Entrevista com Morador Urbano:');
  createDiv('<iframe width="450" height="290" src="https://www.youtube.com/embed/yzb7-olz7Jc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  // Subtítulo 4 - Sugestões
  let subtituloSugestao = createElement('h2', 'Deixe sua sugestão de hábito sustentável:');
  subtituloSugestao.style('color', 'blue');

  inputSugestao = createInput();
  inputSugestao.attribute('placeholder', 'Escreva aqui...');
  botaoEnviar = createButton('Enviar');
  botaoEnviar.mousePressed(enviarSugestao);

  let subtituloLista = createElement('h3', 'Sugestões da comunidade:');
  subtituloLista.style('color', 'blue');
}

function enviarSugestao() {
  const texto = inputSugestao.value();
  if (texto.trim() !== '') {
    sugestoes.push(texto);
    createP(`• ${texto}`);
    inputSugestao.value('');
  }
}
