function inc(){
    var value = document.getElementById('inp').value;
	value++;
    document.getElementById('inp').value = value;
}

function dec(){
    var value = document.getElementById('inp').value;
    value--;
    document.getElementById('inp').value = value;
}

function cart(){
    var value = document.getElementById('inp').value;
    document.getElementById('num').innerHTML = value;
}