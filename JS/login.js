document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('Shoitane Lareeee');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    const passwordField = document.getElementById('user-password');
    // console.log('Shoitane Lareeee');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'jamaishoshur@gmail.com' && userPassword == 'secrete') {
        // console.log('Valid User');
        window.location.href = 'banking.html';
    }
})