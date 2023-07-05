document.addEventListener('DOMContentLoaded', (event) => {
    // Получить все блоки
    let subBlocks = document.querySelectorAll('.sub-block, .sub-block-logo');
    let navigationBlocks = document.querySelectorAll('.navigation');

    // Добавить обработчик событий каждому блоку
    subBlocks.forEach(function(block) {
        block.addEventListener('click', function() {
            // Убрать класс 'active-sub-block' у всех блоков
            subBlocks.forEach(block => block.classList.remove('active-sub-block'));

            // Добавить класс 'active-sub-block' к кликнутому блоку
            this.classList.add('active-sub-block');
        });
    });

    navigationBlocks.forEach(function(block) {
        block.addEventListener('click', function() {
            // Убрать класс 'active-navigation' у всех блоков
            navigationBlocks.forEach(block => block.classList.remove('active-navigation'));

            // Добавить класс 'active-navigation' к кликнутому блоку
            this.classList.add('active-navigation');
        });
    });
});

/* select menu */

$(document).ready(function() {
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: Infinity // Эта опция скрывает строку поиска
    });
});

/* FAQ */

$(".faq-question").click(function() {
  $(this).next(".faq-answer").slideToggle("slow");

  $(".faq-answer").not($(this).next(".faq-answer")).slideUp("slow");
});

$(function() {
    var navbar = $('.left-side-block');
    var sticky = navbar.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= sticky) {
            navbar.addClass('fixed');
        } else {
            navbar.removeClass('fixed');
        }
    });
});
