let min=document.getElementById("min")
let max=document.getElementById("max")
let avg=document.getElementById("Average")
let total=document.getElementById("total")
let calcButton=document.getElementById("calculate")
let resetButton=document.getElementById("reset")
let display=document.getElementById("display")
let valid;
let unitsamt=document.getElementById("unitsamount");
let unitcalcbutt=document.getElementById("unitcalculate");
let unitresetbutt=document.getElementById("unitreset");
function calculate()
{
    //document.getElementById("display").style.backgroundColor=black;
    let sum=0;
    let arr=[];
    let count=0;
    
    valid=0;
    for(let i=1;i<=6;i++)
    {
        let value=document.querySelector("#bill"+i).value;
        sum+=Number(value)
        
        arr.push(Number(value));
        if(value=="")
            valid++;
        else if(value<0)
            valid++;
    }
    if(valid>0)
    {
        alert("Please Enter a valid Amount");
    
    }
    else{
    arr.sort(function(a,b){return a-b});
    total.innerHTML="Total Bill : "+sum;
    let average=sum/6;
    avg.innerHTML="Average Bill: "+average.toFixed(2);
    min.innerHTML="Minimum Bill : "+arr[0];
    max.innerHTML="Maximum Bill : "+arr[arr.length-1];
}
}
function reset()
{
    for(let i=1;i<=6;i++)
    {
        document.querySelector("#bill"+i).value=null;
    }
    total.innerHTML="Total Bill : "+0; 
    max.innerHTML="Minimum Bill : "+0;
    min.innerHTML="Maximum Bill : "+0;
    avg.innerHTML="Average Bill: "+"0.00"
}

calcButton.addEventListener("click",function changebg(){
    if(valid==0)
    {
    display.style.backgroundColor="#000000";
    display.style.color="#FFFFFF";
    }
})
resetButton.addEventListener("click",function changebg(){
    display.style.backgroundColor="#000000";
    display.style.color="#FFFFFF";
})


function unitCalc(){
    for(let i=1;i<=7;i++)
        {
            document.getElementById("td"+i+"1").innerHTML=null;
            document.getElementById("td"+i+"2").innerHTML=null;
            document.getElementById("td"+i+"3").innerHTML=null;
        }
        document.getElementById("tablediv").style.visibility="hidden";

    let units=document.querySelector("#unitinput").value;
    unitReset();
    document.getElementById("unitinput").value=units;
    if(units!="" && units>=0)
    {
    document.getElementById("tablediv").style.visibility="visible";
    document.getElementById("table").style.border="3px solid black";
    document.getElementById("th1").innerHTML="Range";
    document.getElementById("th2").innerHTML="Price per Unit";
    document.getElementById("th3").innerHTML="Amount";
    document.getElementById("th1").style.border="3px solid black";
    document.getElementById("th2").style.border="3px solid black";
    document.getElementById("th3").style.border="3px solid black";
    }
    if(units=="" || units<0)
    {
        alert("Please Enter valid Number");
    }
    else{
    
    //console.log(units);
    let amount=0;
    if(units>500)
    {
        if(units>1000)
        {
            document.getElementById("td71").innerHTML=">1000";
            document.getElementById("td72").innerHTML="Rs 11.00";
            document.getElementById("td73").innerHTML=(units-1000)*11;
            
            amount+=((units-1000)*11);
            units=units-(units-1000);
            document.getElementById("td71").style.border="3px solid black";
            document.getElementById("td72").style.border="3px solid black";
            document.getElementById("td73").style.border="3px solid black";
        }
        if(units>=801 && units<=1000)
        {
            document.getElementById("td61").innerHTML="801-1000";
            document.getElementById("td62").innerHTML="Rs 10.00";
            document.getElementById("td63").innerHTML=(units-800)*10;
            amount+=((units-800)*10);
            units-=(units-800);
            document.getElementById("td61").style.border="3px solid black";
            document.getElementById("td62").style.border="3px solid black";
            document.getElementById("td63").style.border="3px solid black";
        }
        if(units>=601 && units<=800)
        {
            document.getElementById("td51").innerHTML="601-800";
            document.getElementById("td52").innerHTML="Rs 9.00";
            document.getElementById("td53").innerHTML=(units-600)*9;
            amount+=((units-600)*9);
            units-=(units-600);
            document.getElementById("td51").style.border="3px solid black";
            document.getElementById("td52").style.border="3px solid black";
            document.getElementById("td53").style.border="3px solid black";
        }
        if(units>=501 && units<=600)
            {
            document.getElementById("td41").innerHTML="501-600";
            document.getElementById("td42").innerHTML="Rs 8.00";
            document.getElementById("td43").innerHTML=(units-500)*8;
                amount+=((units-500)*8);
                units-=(units-500);
                document.getElementById("td41").style.border="3px solid black";
            document.getElementById("td42").style.border="3px solid black";
            document.getElementById("td43").style.border="3px solid black";
            }
            if(units>=401 && units<=500)
                {
                document.getElementById("td31").innerHTML="401-500";
            document.getElementById("td32").innerHTML="Rs 6.00";
            document.getElementById("td33").innerHTML=(units-400)*6;
                    amount+=((units-400)*6);
                    units-=(units-400);
            document.getElementById("td31").style.border="3px solid black";
            document.getElementById("td32").style.border="3px solid black";
            document.getElementById("td33").style.border="3px solid black";
                }
            if(units>=101 && units<=400)
                {
            document.getElementById("td21").innerHTML="101-400";
            document.getElementById("td22").innerHTML="Rs 4.50";
            document.getElementById("td23").innerHTML=(units-100)*4.50;
                    amount+=((units-100)*4.50);
                    units-=(units-100);
                    document.getElementById("td21").style.border="3px solid black";
                    document.getElementById("td22").style.border="3px solid black";
                    document.getElementById("td23").style.border="3px solid black";
                }
            if(units>=1 && units<=100)
                {
            document.getElementById("td11").innerHTML="0-100";
            document.getElementById("td12").innerHTML="Rs 0.00";
            document.getElementById("td13").innerHTML=(units-100)*0;
                    amount+=0;
                    document.getElementById("td11").style.border="3px solid black";
                    document.getElementById("td12").style.border="3px solid black";
                    document.getElementById("td13").style.border="3px solid black";
                } 
            unitsamt.innerHTML="Your Bill Amount = Rs."+amount+".00";
            
    }
    else{
        if(units>=401 && units<=500)
        {
            document.getElementById("td41").innerHTML="401-500";
            document.getElementById("td42").innerHTML="Rs 6";
            document.getElementById("td43").innerHTML=(units-400)*6;
            amount+=(units-400)*6;
            units-=(units-400);
            document.getElementById("td41").style.border="3px solid black";
            document.getElementById("td42").style.border="3px solid black";
            document.getElementById("td43").style.border="3px solid black";
        }
        if(units>=201 && units<=400)
            {
            document.getElementById("td31").innerHTML="201-400";
            document.getElementById("td32").innerHTML="Rs 4.50";
            document.getElementById("td33").innerHTML=(units-200)*4.50;
                amount+=(units-200)*4.50;
                units-=(units-200);
                document.getElementById("td31").style.border="3px solid black";
                document.getElementById("td32").style.border="3px solid black";
                document.getElementById("td33").style.border="3px solid black";
            }
        if(units>=101 && units<=200)
            {
            document.getElementById("td21").innerHTML="101-200";
            document.getElementById("td22").innerHTML="Rs 2.25";
            document.getElementById("td23").innerHTML=(units-100)*2.25;
                amount+=(units-100)*2.25;
                units-=(units-100);
                document.getElementById("td21").style.border="3px solid black";
                document.getElementById("td22").style.border="3px solid black";
                document.getElementById("td23").style.border="3px solid black";
            }
        if(units>=0 && units<=100)
        {
            document.getElementById("td11").innerHTML="0-100";
            document.getElementById("td12").innerHTML="Rs 0";
            document.getElementById("td13").innerHTML=(units-200)*0;
            amount+=0;
            document.getElementById("td11").style.border="3px solid black";
            document.getElementById("td12").style.border="3px solid black";
            document.getElementById("td13").style.border="3px solid black";
        }
        unitsamt.innerHTML="Your Bill Amount = Rs."+amount;
    }
}
document.getElementById("table").style.borderCollapse="collapse";
}
function unitReset()
{
    document.getElementById("unitinput").value=null;
    document.getElementById("tablediv").style.visibility="hidden";
    document.getElementById("th1").innerHTML=null;
    document.getElementById("th2").innerHTML=null;
    document.getElementById("th3").innerHTML=null;
    unitsamt.innerHTML="Your Bill Amount = Rs."+0;
    for(let i=1;i<=7;i++)
    {
        document.getElementById("td"+i+"1").innerHTML=null;
        document.getElementById("td"+i+"2").innerHTML=null;
        document.getElementById("td"+i+"3").innerHTML=null;
        document.getElementById("td"+i+"1").style.border="none";
        document.getElementById("td"+i+"2").style.border="none";
        document.getElementById("td"+i+"3").style.border="none";
    }
}
unitresetbutt.addEventListener("click",function changebg(){
    document.getElementById("unitsamount").style.backgroundColor="cadetblue";

})