//changing capitalize
let str1="hello world"
let str2=(str1.replace("h","H"));
let str3=(str2.replace("w","W"));
console.log(str3);
//counting words
let s="I love World"
let e=s.split(" ");
let a=e.length;
console.log(a);
//replacing space
let name="my name is John";
console.log(name.replaceAll(" ", "-"));
//printing the duplicate characters
let str = "programming";
let dup = "";
for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) !== i) {
    dup += str[i];
  }
}
console.log(dup);
//return first letter of every word
let person = "John Doe Smith";
let result = "";

for (let word of person.split(" ")) {
  result += word[0];
}

console.log(result);
//returning longest length of the words
let str5 = "The quick brown fox";
let longest = "";
for (let word of str5.split(" ")) {
  if (word.length > longest.length) {
    longest = word;
  }
}
console.log(longest)
//remove duplicate elements from the word
let str6="programming";
let result1 = "";
for (let ch of str6) {
  if (!result1.includes(ch)) {
    result1 += ch;
  }
}
console.log(result1);
//Counting the words frequency from the given word
