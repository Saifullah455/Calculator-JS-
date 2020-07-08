function getNumber(btnValue) {
    var num = document.getElementById("inputText");
    if (num.value === "0") {
        num.value = "";
        num.value += btnValue;   
    }
    else {
        num.value += btnValue;
    }
}
function getResult() {
    var result = document.getElementById("inputText");
    var display = document.getElementById("showinput");
    display.value = result.value;
    result.value = eval(result.value);
}
function clearResult() {
    var result = document.getElementById("inputText");
    result.value = "0";
    var display = document.getElementById("showinput");
    display.value = "";
}
function initialStart() {
    var result = document.getElementById("inputText");
    result.value = "0";
}
initialStart();
function lastElement() {
    var result = document.getElementById("inputText");
    var lastVal = result.value;
    var get = lastVal.slice(0, lastVal.length-1);
    console.log(get);
    result.value = get;
}
function squaring() {
    var result = document.getElementById("inputText");
    var display = document.getElementById("showinput");
    var num = result.value;
    display.value = num + "^2";
    result.value = num * num;
}