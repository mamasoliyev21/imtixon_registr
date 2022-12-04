'use strict';

const baseUrl = "https://task.samid.uz/v1/user/sign-up";

const signUp = (e) => {
    e.preventDefault();
  const userName = $("#userName").value.trim();
  const userEmail = $("#userEmail").value.trim();
  const userPassword = $("#userPasword").value.trim();
  console.log(userEmail);
  const params = {
    username: userName,
    email: userEmail,
    password: userPassword,
};
  if (userName.length === 0 || userEmail.length === 0 || userPassword.length === 0 ) {
    alert('no')
  } else {
    fetch( `${baseUrl}`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params)
    }).then((e) => e.json())
      .then((e) => {
        console.log(e);
        if(e.code === 1){
            alert(e.message)
               window.location.replace('./login.html')
          }  else{
           alert(e.message)
          }
          console.log(e)
      }) 
  }
};


$('.form').addEventListener('submit', (e) => {    
  
  signUp(e);
});


 const pas_in =$("#swipe")
pas_in.addEventListener("click", (e)=>{
  console.log(e.target);
  $("#userPasword").setAttribute("type", "text");
})
// $("#show").ad
