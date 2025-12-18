const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname,"async");
const filePath = path.join(folderPath, "new.txt");

fs.mkdir(folderPath,{recursive:true},(error)=>{
    if(error){
        console.error(error);
    }else{
        console.log("Folder created successfully");
        fs.writeFile(filePath,"Hello,This is a new file",(error)=>{
    if(error){
        console.error(error);
    }else{
        console.log("File created successfully");
        fs.readFile(filePath,"utf-8",(error,data)=>{
      if(error){
        console.error(error);
    }else{
        console.log(data);
    }
})
    }
});
    }
});