const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
function checkGmail() {
    // Получаем элементы через querySelector
    const gmailInput = document.querySelector('#gmail_input');
    const resultSpan = document.querySelector('#gmail_result');
    const gmailValue = gmailInput.value.trim(); // Убираем лишние пробелы
    if (gmailRegex.test(gmailValue)) {
        resultSpan.textContent = "Valid Gmail address!";
        resultSpan.style.color = "green";
    } else {
        resultSpan.textContent = "Invalid Gmail address!";
        resultSpan.style.color = "red";
    }
}
const gmailButton = document.querySelector('#gmail_button');
gmailButton.addEventListener('click', checkGmail);


function moveBlock() {
    const block = document.querySelector('.child_block');
    const parent = document.querySelector('.parent_block');
    let position = 0; // Начальная позиция для блока

    // Функция рекурсии для движения блока вправо
    function move() {
        // Проверяем, не вышел ли блок за пределы родительского блока
        if (position < parent.offsetWidth - block.offsetWidth) {
            position += 5; // Сколько пикселей должен двигаться блок за один шаг
            block.style.left = `${position}px`; // Обновляем позицию блока
            requestAnimationFrame(move); // Рекурсивно вызываем move
        }
    }

    move(); // Начинаем движение блока
}

// Запуск функции при загрузке страницы
moveBlock();
