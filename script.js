function validateForm() {
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|mail\.ru|yandex\.ru)$/i;
    const phonePattern = /^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    const minLength = 8; // Минимальная длина пароля

    if (!emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный email (например: user@gmail.com, user@mail.ru, user@yandex.ru)');
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert('Пожалуйста, введите номер телефона в формате +7(999) 555-77-77');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Пароли не совпадают. Пожалуйста, попробуйте снова.');
        return false;
    }

    if (password.length < minLength) {
        alert(`Пароль должен содержать не менее ${minLength} символов.`);
        return false;
    }

    return true;
}



function formatPhoneNumber(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); 
    if (value.length > 10) {
        value = value.slice(0, 11); 
    }


    let formattedValue = '';
    if (value.length > 0) {
        formattedValue += '+7(';
    }
    if (value.length > 1) {
        formattedValue += value.slice(1, 4); 
    }
    if (value.length >= 4) {
        formattedValue += ') ' + value.slice(4, 7); 
    }
    if (value.length >= 7) {
        formattedValue += '-' + value.slice(7, 9); 
    }
    if (value.length >= 9) {
        formattedValue += '-' + value.slice(9); 
    }

    input.value = formattedValue; 
}

$(function(){
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});