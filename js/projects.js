var a = document.getElementsByTagName("a");
var t = document.getElementById("tictactoe");
var t1 = document.getElementById("2");
var t2 = document.getElementById("3");
for(var i = 0; i < a.length; i++){
    a[i].onclick = () => {
        t1.style.display = "none";
        t2.style.display = "none";
        t.style.gridColumnStart = 1;
        t.style.gridColumnEnd = 4;
    };
}
