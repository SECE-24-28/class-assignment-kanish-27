let str1="Hello World";
//length function
console.log(str1.length);
//charAt and at function
console.log(str1.at(-5));
console.log(str1.charAt(2));
//slice function(its like substring)
console.log(str1.slice(2,5));
//indexOf function
console.log(str1.indexOf("l"));
//lastIndexOf function
console.log(str1.lastIndexOf("l"));
//includes function
console.log(str1.includes("i"));
//startsWith function
console.log(str1.startsWith("H"));
//endsWith function
console.log(str1.endsWith("D"));
//replace function
console.log(str1.replace("Hello", "Hi"));
//replaceAll function
console.log(str1.replaceAll("l", "i"));
//concat function
console.log(str1.concat("helloo"));
let str2="    Hello World    ";
//trim function
console.log(str2.trim());
//trimStart function
console.log(str2.trimStart());
//trimEnd function
console.log(str2.trimEnd());
//repeat function
console.log(str1.repeat(2));
//split function
console.log(str1.split(" "));
let str3="John";
//padStart function
console.log(str3.padStart(10, "a"));
//padEnd function
console.log(str3.padEnd(10, "a"));