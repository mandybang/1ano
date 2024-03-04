document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'coração.html';
    } else {
        alert('Escreva o alerta que quiser aqui.');
    }
});
