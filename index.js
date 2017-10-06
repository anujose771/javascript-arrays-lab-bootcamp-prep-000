const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}
destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
destructivelyPrependKitten("Bob")


function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
destructivelyRemoveFirstKitten();


function appendKitten(name){
  return [...kittens, name];
}
appendKitten("Broom");

function prependKitten(name){
  return [name, ...kittens ];
}
prependKitten("Arnold");

function removeLastKitten(name){
  return slice(-1);
}
removeLastKitten();

// function removeFirstKitten(name){
//   return slice(1);
// }
// removeFirstKitten();
