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

var count;
function starmark(item){
    count=item.id[0];
    sessionStorage.starRating = count;
    var subid= item.id.substring(1);
    for(var i=0;i<5;i++){
        if(i<count){
            document.getElementById((i+1)+subid).style.color="#ffc107";
        }
        else
        {
           document.getElementById((i+1)+subid).style.color="black";
        }
    }
}