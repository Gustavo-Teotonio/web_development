const titulo = document.querySelector('h1');

console.log('Titulo representa', titulo)

titulo.textContent = 'Novo título'

const container = document.getElementById('container');

//const container = document.querySelector('#container');

container.innerHTML = '<p>Parágrafo criado via JavaScript</p>';

const img = document.querySelector('img');

console.log('Imagem representa', img)

img.setAttribute("src", 'https://img.freepik.com/vetores-gratis/pontos-roxos-de-fundo-escuro_78370-8077.jpg?semt=ais_hybrid&w=740&q=80');
img.setAttribute("alt", 'Imagem da nave Starship da SpaceX');


const caixa = document.querySelector('#container');

caixa.style.backgroundColor = 'lightblue';
caixa.style.padding = '20px';
caixa.style.borderRadius = '10px';