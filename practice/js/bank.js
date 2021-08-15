document.getElementById('login-button').addEventListener('click', function () {
    // get user email
    const userEmail = document.getElementById('user-email');

    //get user password
    const userPassword = document.getElementById('user-password');

    if (userEmail.value == 'mizan' && userPassword.value == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Wrong input given');
    }
})