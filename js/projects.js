var a = document.getElementsByTagName("a");
var t = document.getElementById("tictactoe");
var t1 = document.getElementById("2");
var t2 = document.getElementById("3");

a[0].onclick = () => {
    if(t.style.gridColumnEnd == 4){
        t.style.gridColumnStart = 1;
        t.style.gridColumnEnd = 2;  
        t1.style.display = "block";
        t2.style.display = "block";
    }
    else{
        t1.style.display = "none";
        t2.style.display = "none";
        t.style.gridColumnStart = 1;
        t.style.gridColumnEnd = 4;
    }
};

a[1].onclick = () => {
    if(t1.style.gridColumnEnd == 4){
        t1.style.gridColumnStart = 2;
        t1.style.gridColumnEnd = 3;  
        t.style.display = "block";
        t2.style.display = "block";
    }
    else{
        t.style.display = "none";
        t2.style.display = "none";
        t1.style.gridColumnStart = 1;
        t1.style.gridColumnEnd = 4;
    }
};

a[2].onclick = () => {
    if(t2.style.gridColumnEnd == 4){
        t2.style.gridColumnStart = 3;
        t2.style.gridColumnEnd = 4;  
        t.style.display = "block";
        t1.style.display = "block";
    }
    else{
        t.style.display = "none";
        t1.style.display = "none";
        t2.style.gridColumnStart = 1;
        t2.style.gridColumnEnd = 4;
    }
};

