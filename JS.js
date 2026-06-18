function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');


    if (username === '8==D' && password === 'pass') {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Успешный вход!';
        window.location.href = 'index.html';

    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Неверное имя пользователя или пароль.';
    }

    return false;
}

function pc-window() {
    document.getElementById('showImageBtn').addEventListener('click', function () {
        var image = document.getElementById('hiddenImage');
        if (image.style.display === 'none') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}