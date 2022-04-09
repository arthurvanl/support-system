const span_pswd = document.getElementById('password_err');
const span_confirm_pswd = document.getElementById('confirm_pswd_err');
const password = document.getElementById('password');
const confirm_pswd = document.getElementById('confirm_pswd');

let password_str = ''
password.addEventListener("input", function(e){
    if(e.target.value.length == 0){
        span_pswd.innerHTML = '';
    } else if(e.target.value.length !== 1) {
        password_str = e.target.value;
        const regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$");
        if(password_str.match(regex)){
            password.classList.remove('is-invalid');
            span_pswd.innerHTML = '';
        } else {
            password.classList.add('is-invalid');
            span_pswd.innerHTML = 'Password is not strong enough.'
        }
    } else {
        password_str = e.target.value;
    }
});

confirm_pswd.addEventListener("input", function(e){
    if(e.target.value.length == 0){
        span_confirm_pswd.innerHTML = '';
        confirm_pswd.classList.remove('is-invalid');
    } else if(password_str !== e.target.value){
        confirm_pswd.classList.add('is-invalid');
        span_confirm_pswd.innerHTML = 'The password is not the same.'
    } else {
        confirm_pswd.classList.remove('is-invalid');
        span_confirm_pswd.innerHTML = '';
    }
});