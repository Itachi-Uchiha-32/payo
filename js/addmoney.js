document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertBalance = parseInt(mainBalance);
    if(amount && pin){
        if(parseInt(pin)===1234){
            const sum = convertBalance + convertAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else alert("enter valid pin");
    }
    else alert("enter amount");
})