function getComputerChoice(){
    var x = Math.floor(Math.random()*3);
    switch (x) {
        case 0:
            return "R";break;
        case 1:
            return "P";break;
        case 2:return "S";break;
        default:return "A";break;
    }
}
function play(x, y){
    if((x== "R" && y== "P")||(x== "S" && y== "R")||(x== "P" && y== "S")){
        return "ywin";
    }else if((x== "R" && y== "S")||(x== "P" && y== "R")||(x=="S"&&y=="P")){
        return "xwin";
    }else {
        return "noWin";
    }
}
function game(x, y){
    var xs=0;
    var ys=0;
    while (xs<3 && ys<3) {
        console.log("Yal3eb jalel");
        var ch=play(x, y);
        if(ch=="xwin"){xs++;}
        else if(ch=="ywin"){ys++;}
        else{xs++;ys++;}
    }
    if (xs==3){
        console.log("Moi Rbe7t");
    }else{
        console.log("Pc ta3 ze** rbe7");
    }
}
const x=prompt("Donner votre choix ==> R P S").toUpperCase();
const y=getComputerChoice();
game(x, y);