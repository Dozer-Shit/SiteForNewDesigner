document.addEventListener('DOMContentLoaded', (event) => {
    // Получить все блоки
    let blocks = document.querySelectorAll('.sub-block');

    // Добавить обработчик событий каждому блоку
    blocks.forEach(function(block) {
        block.addEventListener('click', function() {
            // Убрать класс 'active' у всех блоков
            blocks.forEach(block => block.classList.remove('active'));

            // Добавить класс 'active' к кликнутому блоку
            this.classList.add('active');
        });
    });
});