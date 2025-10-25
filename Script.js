document.addEventListener('DOMContentLoaded', function() {

    let balance = 1000;

    // Dice roll
    const diceBtn = document.getElementById('playDice');
    const diceResult = document.getElementById('diceResult');
    const balanceEl = document.getElementById('balance');

    diceBtn.addEventListener('click', function() {
        let dice = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = dice;

        if(dice > 3){
            balance += 100;
            alert("জিতেছো! +100 টোকেন");
        } else {
            balance -= 50;
            if(balance < 0) balance = 0;
            alert("হারলে! -50 টোকেন");
        }
        balanceEl.textContent = balance;
    });

    // Register
    const registerBtn = document.getElementById('registerBtn');
    registerBtn.addEventListener('click', function() {
        const username = document.getElemejsntById('username').value.trim();
        if(username){
            localStorage.setItem('username', username);
            alert('ডেমো ইউজার "' + username + '" রেজিস্টার হয়েছে!');
        } else {
            alert('Username দিন!');
        }
    });

    // Login
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('loginUsername').value.trim();
        const storedUser = localStorage.getItem('username');
        if(username){
            if(storedUser === username){
                alert('ডেমো ইউজার "' + username + '" লগইন করেছে!');
            } else {
                alert('এই নামের ইউজার পাওয়া যায়নি।');
            }
        } else {
            alert('Username দিন!');
        }
    });

});
