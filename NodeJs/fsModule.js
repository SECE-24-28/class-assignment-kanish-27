const fs = require("fs")
const path = require("path")

const folderPath = path.join(__dirname,"dmeo");
const filePath = path.join(folderPath,"sample.txt");

const folderExist = fs.existsSync(folderPath)
if(!folderExist){
    fs.mkdirSync(folderPath);
}else{
    console.log("Folder already exists");
}

fs.writeFileSync(filePath,"This is a new file");
fs.appendFileSync(filePath, "This is a appended line");

const res = fs.readFileSync(filePath,"utf-8");
console.log(res);

fs.renameSync(filePath,"dmeo/rename.txt");

fs.unlinkSync("dmeo/rename.txt");