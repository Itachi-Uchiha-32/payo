document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const acountNumber = document.getElementById('acount-number').value;
    const pin = document.getElementById('pin-number').value;
    if(acountNumber.length === 11){
        if(parseInt(pin) === 1234){
            window.location.href="./home.html"
        }
        else alert('wrong pin');
    }
    else alert('invalid number');
})