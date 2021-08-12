// Write TypeScript code!

import {Greeter} from  './greeter';

let title: string = "MeuApp";
let paragraph: string = "Insira um texto aqui.";

// inicio contador 

let counter = 0;

let intervalID = setInterval (() =>{
  counter = counter + 1;
  const appParagraph: HTMLElement = document.getElementById('app.counter');
  appParagraph.innerHTML = counter as string; //as string: converte para string
}, 1000);

// fim contador 

//inicio botão

const btn = document.getElementById('app.btn');
btn.addEventListener("click", alertMethod);

function alertMethod (this: HTMLElement, ev: Event){
  alert("Alertando pelo TypeScript");
}

// fim botão


const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;


//declarando a classe 
let greeter = new Greeter ("[insira o nome aqui]");
const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = greeter.getGreeting();

/**
--- FORMA ALTERNATIVA  --
(para html <div id="app"></div>)

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</p>
`; 

*/ 




