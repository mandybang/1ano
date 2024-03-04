document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'elison' && password === 'zeroday') {
        window.location.href = 'coração.html';
    } else {
        alert('Senha inválida, tente novamente! Dica: a senha é um apelido seu <3');
    }
});
