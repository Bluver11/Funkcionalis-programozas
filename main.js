import './style.css'
import array from './quotes.json'


document.addEventListener('DOMContentLoaded',init)
let a1 = Array(array.quotes)
function osszes(){

const list = document.getElementById('myList');
let a2 = Array.from(array.quotes)
 
a2.sort((a,b)=>{
  if(a.author < b.author)
  {
    return -1;
  }
})



a2.forEach((a)=>{
  let sor = document.createElement('li')
  sor.textContent
  list.appendChild(sor);
})







}

function init(){
  const osszesGomb =document.getElementById('osszes');
  osszesGomb.addEventListener('click',osszes);
}