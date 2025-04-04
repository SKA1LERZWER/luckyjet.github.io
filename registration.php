<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма регистрации</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <section id="content">
            <form action="register.php" method="POST" onsubmit="return validateForm()">
                <h1>Форма регистрации</h1>
                <div>
                    <input type="text" name="txt" placeholder="Логин(Например:user123)" required="" id="login" />
                </div>
                <div>
                    <input type="password" name="pswd" placeholder="Пароль(Минимум 8 символов)" required="" id="password" />
                </div>
                <div>
                    <input type="password" name="confirmPassword" placeholder="Подтвердить Пароль" required="" id="confirmPassword" />
                </div>
                <div>
                    <input type="text" name="email" placeholder="Почта(Например:user@gmai.com)" required="" id="email" />
                </div>
                <div>
                    <input type="text" name="num" placeholder="Номер телефона" required="" id="phone" oninput="formatPhoneNumber(event)" />
                </div>
                <div>
                    <input type="submit" value="Зарегистрироваться" />
                    <a href="index.php">На главную</a>
                </div>
            </form>
        </section>
    </div>
</body>
</html>
