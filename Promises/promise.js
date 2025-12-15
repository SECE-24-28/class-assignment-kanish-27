//pending,fullfilled,rejected

let promise=new Promise((resolve,reject)=>{
    if(5<10){
        resolve("Resolved");
    }else{
        reject("Rejected");
    }
});

//using the fetch we are trying to fetch the data from the give link
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response);
    let data=response.json();
    return data;
})
.then((data)=>{
    console.log(data);
})
.catch((erroe)=>console.log(error));

//async and await
const fetchUsers= async()=>{
    try{
       let response = await fetch("https://jsonplaceholder.typicode.com/users");
       let data = await response.json();
       console.log("data",data);
    }catch(error){
        console.error(error);
    }
};

fetchUsers();

