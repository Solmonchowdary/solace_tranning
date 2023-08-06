
const prompt=require('prompt-sync')();
let a=0;
let b=0;
p=true;
while(p){
    console.log("1 for add");
    console.log("2 for sub");
    console.log("3 for mul");
    console.log("4 for division");
    console.log("5 for exit");
    let opr=prompt('enter your choise   ');
    const val=parseInt(opr);
    
 
    if(opr=='5'){
        return(0);
    }
    if(val<=5){
     a=parseInt(prompt('enter your first number   '));
    b=parseInt(prompt('enter your second number  '));
    
    }
    else{
        opr='7';
    }
    switch(opr){
        case '1':
            console.log(a+b);
            break;
        case '2':
            console.log(a-b);
            break;
        case '3' :
            console.log(a*b);
            break;
        case '4' :
            
                while(b==0){
            try{
                
                throw new Error("error occured:Division by zero is not possible ");
            }
            catch(err){
                console.log(err.message);
                b=parseInt(prompt('enter your second number  '));
            }
            }
                 
            
            console.log(a/b);
            
            break;        
        default:
            console.log("invalid....."+' '+'please enter a valid command');


    }
    
}

