let val = document.getElementById("val");
function dec(){
    let value=Number(val.innerText)
    if(value === 0){
        alert("-Ve value not allowed")
    }
    val.innerText=value-1
}
function enc(){
    let value=Number(val.innerText)
    if(value >= 10){
        alert("10+ value not allowed")
    }
    val.innerText=value+1
}
function res(){
    val.innerText=0
}