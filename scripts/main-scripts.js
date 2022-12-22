(function() {
    /*Задаем переменные*/

    var block = document.querySelector('header');
    let ar = document.querySelectorAll('.menu__link');
    
    let headerH = document.querySelector('.js-header').clientHeight;
    
    /*Задаем переменную scroll*/
    document.onscroll = function() {
        let scroll = window.scrollY;

        /*Если scroll < знач. header, то меняем,
        в обратном случае - сбрасываем на дефолт*/
        if (scroll < headerH + 280) {
            block.classList.add('hov1');
            block.classList.remove('hov');
            for (let index = 0; index < ar.length; index++) {
                ar[index].classList.remove('menuhide');
            }
        } else {
            block.classList.remove('hov1');
            block.classList.add('hov');

            for (let index = 0; index < ar.length; index++) {
                ar[index].classList.add('menuhide');
            }
            
            block.addEventListener('mouseenter', function () {
                block.classList.add('hov1');
                for (let index = 0; index < ar.length; index++) {
                    ar[index].classList.remove('menuhide');
                }
            });
            block.addEventListener('mouseleave', function () {
                block.classList.remove('hov1');
                block.classList.add('hov');
                for (let index = 0; index < ar.length; index++) {
                    ar[index].classList.add('menuhide');
                }
            });
        }
    }
})();