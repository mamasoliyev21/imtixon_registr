

'use strict';

const loginUrl = "https://task.samid.uz/v1/user/sign-in"



const loginPage = (e) => {
    e.preventDefault()
    const userName = $(".user-input").value.trim();
    const userPassword = $(".user-pasword").value.trim();
    const params = {
        username: userName,
        password: userPassword,
    };
    
    if (userName.length === 0 || userPassword.length === 0) {
        alert('no')
    } else {
        fetch(`${loginUrl}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        })
        .then((e) => e.json())
        .then((res) => {
            console.log(e)
            if(res.code === 1) {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("username",  params.username)
                alert(`${res.data.username}welcome to admin dashboard`)
                    window.location.replace('./home.html')
                  let token=  localStorage.getItem("token")
                alert(res.message)
               
            } else {
                location.replace("./registr.html")
                alert(res.message)
            }
        })
    }
    
}


$('.login-btn').addEventListener ('click', (e) => {
    loginPage(e)
})