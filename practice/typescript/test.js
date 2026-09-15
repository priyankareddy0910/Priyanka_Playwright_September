import hey, { add as sum, subtract as minus} from './LetVariables.js';

console.log(sum(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(hey(3,2));


///./file.js -- same folder 
//practice\javascript\javascript-basics.js
// ../javascriptbasics.js


//SyntaxError: missing ) after argument list


const p = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('hey'),4000);
});

console.log( await p);

