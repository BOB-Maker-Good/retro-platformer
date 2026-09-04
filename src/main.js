import {Game} from './Game.js';
const canvas=document.querySelector('#game'), fatal=document.querySelector('#fatal');
try{new Game(canvas).start()}catch(error){console.error(error);fatal.textContent='Game error: '+error.message;fatal.style.display='block'}