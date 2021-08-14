document.getElementById('login-submit').addEventListener('click', function () {
   // user email
    const userEmail = document.getElementById('email').value;
    //user password
    const userPassword = document.getElementById('password').value;

    if (userEmail == 'mizanur@aminur.com' && userPassword == 'pola') {
        window.location.href = 'banking.html';
    }
    else {
        alert('wrong input given');
    }
})