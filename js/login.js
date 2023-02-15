// step 1 - add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2 - get the email address inside the email input field
    // always remember to use .value to get the text from an input field
    const emailField =  document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);
    //step 3 - password - same as step 2 - email
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(password);

    //DANGER: DO NOT VERIFY email password on the client side
    //step 4 - verify email and password and check whether valid user or not
    if(email === 'shontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }else{
        alert('Please enter valid email & password')
    }
})