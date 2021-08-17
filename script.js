function clk(data){
    document.getElementById('input').value += data;
}

function clearDisplay(){
    document.getElementById('input').value = "";
}

function calc(){
    var text = document.getElementById('input').value;
    var result = eval(text);
    document.getElementById('input').value = result;
}