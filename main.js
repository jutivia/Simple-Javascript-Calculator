

function getHistory(){
    return document.getElementsByClassName("output-value").innerText;
}
console.log(getHistory());

function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}

printHistory(9+4-5);
console.log(document.body);