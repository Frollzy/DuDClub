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



document.getElementById('ShowImagePC').addEventListener('click', function () {
    var image = document.getElementById('display-pc');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

document.getElementById('ShowImageTc').addEventListener('click', function () {
    var image = document.getElementById('display-trashcan');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

document.getElementById('ShowImageImg').addEventListener('click', function () {
    var image = document.getElementById('display-img');
    window.location.href = 'img-window.html';
});

document.getElementById('ShowImageVd').addEventListener('click', function () {
    var image = document.getElementById('display-video');
    window.location.href = 'video-window.html';
});
