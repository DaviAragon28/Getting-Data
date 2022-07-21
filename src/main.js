//Código cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Código rectangulo

function periRectangulo(lado, base) {
  return lado * 2 + base * 2;
}

function areaRectangulo(lado, base) {
  return lado * base;
}

//Código triangulo

function perimetroTriangulo(lado) {
  return lado * 3;
}

function alturaTriangulo(altura) {
  return altura;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Código circulo

function radioCirculo(radio) {
  return radio;
}

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

// Sincronizando con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  const perimetro = perimetroCuadrado(value);

  const parrafo = document.querySelector('.textoDesdeJSCuadrado');
  parrafo.innerText = `El perímetro del cuadrado es: ${perimetro}cm`;
  const results = document.querySelector('.result');
  results.innerText = `${value}cm`;
  const resultRight = document.querySelector('.result-right');
  resultRight.innerText = `${value}cm`;
  const resultLeft = document.querySelector('.result-left');
  resultLeft.innerText = `${value}cm`;
  const resultBottom = document.querySelector('.result-bottom');
  resultBottom.innerText = `${value}cm`;
}
function calcularAreaCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);

  const parrafo = document.querySelector('.textoDesdeJSCuadrado');
  parrafo.innerText = `El area del cuadrado es: ${area} cm²`;
  const results = document.querySelector('.result');
  results.innerText = `${value}cm`;
  const resultRight = document.querySelector('.result-right');
  resultRight.innerText = `${value}cm`;
  const resultLeft = document.querySelector('.result-left');
  resultLeft.innerText = `${value}cm`;
  const resultBottom = document.querySelector('.result-bottom');
  resultBottom.innerText = `${value}cm`;
}

//Rectangulo
function calcularPerimetroRectangulo3() {
  const rectangulo = document.getElementById('inputRectangulo');
  const value = rectangulo.value;

  const rectangulo2 = document.getElementById('inputRectangulo2');
  const value2 = rectangulo2.value;

  const perimetroRec = periRectangulo(value2, value);

  const parrafo = document.querySelector('.textoDesdeJSRectangulo');
  parrafo.innerText = `El perímetro del rectangulo es: ${perimetroRec}cm`;

  const resultTop = document.querySelector('.result-top-rg');
  resultTop.innerText = `${value2}cm`;
  const resultRight = document.querySelector('.result-right-rg');
  resultRight.innerText = `${value}cm`;
  const resultLeft = document.querySelector('.result-left-rg');
  resultLeft.innerText = `${value}cm`;
  const resultBottom = document.querySelector('.result-bottom-rg');
  resultBottom.innerText = `${value2}cm`;
  console.log(resultTop, resultRight, resultLeft, resultBottom)
}
function calcularAreaRectangulo() {
  const inputRectangulo = document.getElementById('inputRectangulo');
  const value = inputRectangulo.value;

  const inputRectangulo2 = document.getElementById('inputRectangulo2');
  const value2 = inputRectangulo2.value;

  const areaRec = areaRectangulo(value, value2);

  const parrafo = document.querySelector('.textoDesdeJSRectangulo');
  parrafo.innerText = `El area del rectangulo es: ${areaRec} cm²`;

  const resultTop = document.querySelector('.result-top');
  resultTop.innerText = `${value2}cm`;
  const resultRight = document.querySelector('.result-right');
  resultRight.innerText = `${value}cm`;
  const resultLeft = document.querySelector('.result-left');
  resultLeft.innerText = `${value}cm`;
  const resultBottom = document.querySelector('.result-bottom');
  resultBottom.innerText = `${value2}cm`;
  console.log(resultTop)
}

//Circulo
function calcularPerimetroCirculo() {
  const inputCirculo = document.querySelector('#inputCirculo');
  const valor = inputCirculo.value;

  const perimetroCir = perimetroCirculo(valor);

  const parrafo = document.querySelector('.textoDesdeJSCirculo');
  parrafo.innerText = `El perímetro del circulo es: ${parseInt(
    perimetroCir
  )} cm`;
}
function calcularAreaCirculo() {
  const inputCirculo = document.querySelector('#inputCirculo');
  const valor = inputCirculo.value;

  const areaCir = areaCirculo(valor);

  const parrafo = document.querySelector('.textoDesdeJSCirculo');
  parrafo.innerText = `El área del circulo es: ${parseInt(areaCir)} cm²`;
}
function calcularDiametroCirculo() {
  const inputCirculo = document.querySelector('#inputCirculo');
  const valor = inputCirculo.value;

  const diametroCir = diametroCirculo(valor);

  const parrafo = document.querySelector('.textoDesdeJSCirculo');
  parrafo.innerText = `El diametro del circulo es: ${diametroCir} cm`;
}

//Triangulo
function calcularPerimetroTriangulo() {
  const inputTriangulo = document.querySelector('#inputTriangulo');
  const valor = inputTriangulo.value;

  const perimetroTri = perimetroTriangulo(valor);

  const parrafo = document.querySelector('.textoDesdeJSTriangulo');
  parrafo.innerText = `El perimetro del triangulo es ${perimetroTri}cm`;
}
function calcularAreaTriangulo() {
  const inputTriangulo = document.querySelector('#inputTriangulo');
  const valor = inputTriangulo.value;

  const lado = valor ** 2;
  const base1 = valor / 2;
  const base2 = base1 ** 2;
  const resta = lado - base2;
  const valorFinal = Math.sqrt(resta);

  const areaTri = areaTriangulo(valor, valorFinal);
  const parrafo = document.querySelector('.textoDesdeJSTriangulo');
  parrafo.innerText = `El área del triangulo es ${areaTri.toFixed(2)}cm²`;
}
function calcularAlturaTriangulo() {
  const inputTriangulo = document.querySelector('#inputTriangulo');
  const valor = inputTriangulo.value;

  const lado = valor ** 2;
  const base1 = valor / 2;
  const base2 = base1 ** 2;
  const resta = lado - base2;
  const valorFinal = Math.sqrt(resta);
  valorFinal.toFixed(2);

  const parrafo = document.querySelector('.textoDesdeJSTriangulo');
  parrafo.innerText = `La altura del triangulo es: ${valorFinal.toFixed(2)}cm`;
}


const containerCuadrado = document.querySelector('.container-all-cuadrado')
const containerRectangulo = document.querySelector('.container-all-rectangulo')
const containerTriangulo = document.querySelector('.container-all-triangulo')
const containerCirculo = document.querySelector('.container-all-circulo')
const containerOtherFigures = document.querySelector('.container-otras_figuras')

const showCuadrado = document.querySelector('#showCuadrado')

showCuadrado.addEventListener('click', () => {
  containerCuadrado.classList.remove('inactive')
  containerRectangulo.classList.add('inactive')
  containerTriangulo.classList.add('inactive')
  containerCirculo.classList.add('inactive')
  containerOtherFigures.classList.add('inactive')
})

const showRectangulo = document.querySelector('#showRectangulo')

showRectangulo.addEventListener('click', () => {
  containerRectangulo.classList.remove('inactive')
  containerCuadrado.classList.add('inactive')
  containerTriangulo.classList.add('inactive')
  containerCirculo.classList.add('inactive')
  containerOtherFigures.classList.add('inactive')
})


const showTriangulo = document.querySelector('#showTriangulo')

showTriangulo.addEventListener('click', () => {
  containerTriangulo.classList.remove('inactive')
  containerCuadrado.classList.add('inactive')
  containerRectangulo.classList.add('inactive')
  containerCirculo.classList.add('inactive')
  containerOtherFigures.classList.add('inactive')
})


const showCirculo = document.querySelector('#showCircule')

showCirculo.addEventListener('click', () => {
  containerCirculo.classList.remove('inactive')
  containerTriangulo.classList.add('inactive')
  containerCuadrado.classList.add('inactive')
  containerRectangulo.classList.add('inactive')
  containerOtherFigures.classList.add('inactive')
})

const showOtherFigures = document.querySelector('#showOtherFigures')

showOtherFigures.addEventListener('click', () => {
  containerOtherFigures.classList.remove('inactive')
  containerCuadrado.classList.add('inactive')
  containerRectangulo.classList.add('inactive')
  containerTriangulo.classList.add('inactive')
  containerCirculo.classList.add('inactive')
})