var arr=[10,20,30,40,50]
for (var i=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("--------------------")

for(var a of arr){
    console.log(a)
}

var person ={
    fname: "Harry",
    lname: "Potter",
    age: 25
}

console.log(person.fname)
for(var a in person){
    console.log(person[a])
} 