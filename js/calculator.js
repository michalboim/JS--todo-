function myFunc(){
    //בדיקת ולידציה
    if (num.value==''){
        return;}
    //result.innerHTML=num.value;
    //result.innerHTML+=' '+typeof(num.value);
    //let myString=num.value;
    //let myInt=parseInt(myString);
    //result.innerHTML+=' '+typeof(myInt);
    result1.innerHTML="result= "+parseInt(num.value)*10; }
button.onclick=myFunc;

function myPrice(){
    let sum=parseInt(price.value)*1.17;
    result2.innerHTML="result= "+sum.toFixed(2)}
tax.onclick=myPrice

addition.onclick=()=>{
    solution=parseInt(additionNumber1.value)+parseInt(additionNumber2.value);
    additionSolution.innerHTML=solution;}

    less.onclick=()=>{
    lessSolution.innerHTML=parseInt(lessNumber1.value)-parseInt(lessNumber2.value);}

    multiplying.onclick=()=>{
    multiplyingSolution.innerHTML=parseInt(multiplyingNumber1.value)*parseInt(multiplyingNumber2.value);}
    
division.onclick=()=>{
    divisionSolution.innerHTML=parseInt(divisionNumber1.value)/parseInt(divisionNumber2.value)}
    
function calculator(){
    if(operator.value=='addition'){
        exerciseSolution.innerHTML=parseInt(number1.value)+parseInt(number2.value)}
    if(operator.value=='less'){
        exerciseSolution.innerHTML=parseInt(number1.value)-parseInt(number2.value)}
    if(operator.value=='multiplying'){
        exerciseSolution.innerHTML=parseInt(number1.value)*parseInt(number2.value)}
    if(operator.value=='division'){
        exerciseSolution.innerHTML=parseInt(number1.value)/parseInt(number2.value)}
}
solution.onclick=calculator 
  
