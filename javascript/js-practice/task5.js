let input = "w3resource";
for (let i = 0; i < input.length; i++){
 let temp = input.charAt(input.length - i); 
 input.slice(1,1);
 input.padEnd(temp);
}
console.log(input);

