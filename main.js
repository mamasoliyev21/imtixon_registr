function logined (){
    let userName= localStorage.getItem("username")
    if(userName){
        $(".username").innerHTML = `<h2>${userName}</h2>`
    } else{
        location.replace("./login.html")
    }
}
logined()
 $(".udalit").addEventListener("click",(e)=>{
    localStorage.clear()
    logined()
 });


 $("#m-swipe").addEventListener("click",(e)=>{
    $(".modal-list").style.backgroundColor ='green'
    $(".modal-list").classList.add("swip")
 })