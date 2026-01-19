

var a = document.getElementById("inp");
a.addEventListener("keyup",function(){
document.getElementById("count").innerHTML = "Count :" + " "+ a.value.length;
})