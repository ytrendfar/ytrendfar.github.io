var x = true;
function Open(){
    if(x){
        document.getElementById("flexContent").style.display="block";
        x=false;
    }else{
        document.getElementById("flexContent").style.display="none";
        x=true;
    }
}          