const http=require('http');
const fs=require('fs');
let a=fs.readFileSync('./xmlfolder/sample.xml','utf-8');
const server=http.createServer((req,res)=>{
    const path=req.url;
    if(path.toLocaleLowerCase()=='/home')
    res.end(a);
    else if(path.toLocaleLowerCase()=='/about'){
        function1();
    }
});
server.listen(8000,'localhost',()=>{
    console.log("server is listing....")
});