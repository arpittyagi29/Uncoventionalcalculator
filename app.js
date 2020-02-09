let result=0;

function getuserinput(){
    let v=parseInt(userInput.value);
    if (v===0)
        return;
    else
        return v;
}
function add(){
    const getnum=getuserinput();
    const desp=`${result}+${getnum}`;
     result=result + getnum;
    outputResult(result,desp);
}

function subtract(){
     const getnum1=getuserinput();
    const desp=`${result}-${getnum1}`;
     result=result - getnum1;
    outputResult(result,desp);
    
}
function multiplication(){
    const getnum2=getuserinput();
    const desp=`${result}*${getnum2}`;
     result=result * getnum2;
    outputResult(result,desp);
    
}
function divide(){
    const getnum3=getuserinput();
    const desp=`${result}/${getnum3}`;
     result=result / getnum3;
    outputResult(result,desp);
    
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiplication);
divideBtn.addEventListener('click',divide);
