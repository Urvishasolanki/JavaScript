function remainder()
{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result = num1 % num2;
    console.log("result");
    document.getElementById('res').innerHTML=`Reminder is ${result}`;
}