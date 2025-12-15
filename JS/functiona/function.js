function add(a,b){
    return a+b;
}
console.log(add(10,20));
console.log("--------------");

var sub=function(a,b){
    return a-b;
}
console.log(sub(10,20));
console.log("--------------");

//callback function
 function main(){
    var sum=10+20;
    console.log("sum is ",sum);
 }
 function second(num){
    console.log("This is the second function",num)
 }

 main(second);

 let person={
    fName:"John",
    lName:"Potter",
    age:23,
    address:{
        city:"Bengaluru",
        pincode:565644
    },
 };

 const{fName,lName,age}=person;
 const{city,pincode}=person.address;

 console.log(fName);
 console.log(city);

 let personCopy={...person};//Shallow Copy
 //let personCopy=person; //Normal Copy        