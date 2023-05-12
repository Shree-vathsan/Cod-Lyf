function inputvalid(){
    const name=document.getElementById("uname").value,
    pswd=document.getElementById("pswd").value;
    let chars=2;
    if(name.length<1 && pswd.length<1){
        alert("please enter your details!");
    }
}