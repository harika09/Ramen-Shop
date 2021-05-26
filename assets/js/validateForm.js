$(document).ready(async function(){

    $('.contact-form').submit(function(e){
        e.preventDefault()
        sendEmail()
    })
})


function sendEmail(){
    const name = document.getElementById('fname').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name === '' || email == '' || message ==''){
        errorMessage()
    }else if(email.match(pattern)){
        fetch('/index', {
            method: 'POST',
            headers :{ 'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, email: email, message, message})
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for getting in touch!',
            text: 'We will respond to your message as soon as possible. Thankyou!',
            showConfirmButton: true,
          })

          $('.contact-form').trigger("reset"); //Reset Form
            
    }else{
        invalidEmail()
    }

    
}


function errorMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some field is empty.',
      })
}


function invalidEmail(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is Invalid!',
      })
}