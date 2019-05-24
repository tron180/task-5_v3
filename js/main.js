
// + operator
function inc(){
    var value = document.getElementById('inp').value;
	value++;
    document.getElementById('inp').value = value;
}

// - operator
function dec(){
    var value = document.getElementById('inp').value;
    value--;
    document.getElementById('inp').value = value;
}

// Add to cart button
function cart(){
    var value = document.getElementById('inp').value;
    document.getElementById('num').innerHTML = value;
    document.getElementById('num1').innerHTML = value;
}

// Selected Effects
var cont = document.getElementById("sticky");
var menu = cont.getElementsByClassName("py");
for (var i = 0; i < menu.length; i++) {
menu[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selecting");
    current[0].className = current[0].className.replace(" selecting", "");
    this.className += " selecting";
    });
}


// Stars effect
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
           document.getElementById((i+1)+subid).style.color="#e6e6e6";
        }
    }
}

// Color Shade Selection
$(document).ready(function(){
	$('#color i').click(function(){
		$('#color i').removeClass('fa-check-circle').addClass('fa-circle');
		$(this).removeClass('fa-circle').addClass('fa-check-circle');
	});
})

function heart(){
    var heart = document.getElementById("heart");
    heart.click(function(){
        heart.style.color = "red";
    });
}

// Video Transition
// function right_shift(){
//     document.getElementById("video").style.width = "100%";
// }