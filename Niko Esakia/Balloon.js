function zoomin(){
    var myImg = document.getElementById("balloon");
    var explode = document.getElementById("explode")
    var currWidth = myImg.clientWidth;
    if(currWidth == 300){
        alert("Ballon Exploded");
        document.getElementById("balloon").src="explode.png";
    } else{
        myImg.style.width = (currWidth + 10) + "px";
    } 
}
function zoomout(){
    var myImg = document.getElementById("balloon");
    var currWidth = myImg.clientWidth;
    if(currWidth == 200){
        alert("Ballon deflated");
        document.getElementById("balloon").src="deflate.jpg";
    } else{
        myImg.style.width = (currWidth - 10) + "px";
    }
}