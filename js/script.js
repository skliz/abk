// адаптив изображений

function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
};
ibg();
/*
// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink =>{
	menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

		if (iconMenu.classList.contains('_active')) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
		}

		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth'
		});
		e.preventDefault();
		}
	}
};
*/
// Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

	});
};

// Инициализируем Swiper

new Swiper('.main__image-slider', {
	// Стрелки
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev'
},

// Навигация
// Буллеты,текущие положение,прогрессбар
pagination: {
	el: '.swiper-pagination',

// Буллеты
	type: 'bullets',
	clickable: true,
// Динамические буллеты
	dynamicBullets: true,
// Костомные буллеты
renderBullet: function (index, className) {
	return '<span class="' + className + '">' + (index + 1) + '</span>';
},
},
// скролл
scrollbar: {
	el: '.swiper-scrollbar',
// Возможность перетаскивать скролл
draggable:true
},

// Чувствительность свойства
touchRatio: 1,

// Угол срабатывания свайпа/перетаскивания
//touchAngle: 45,
// Курсор перетаскивания
grabCursor: true,

// Переключение при клике на слайд
//slideToClickedSlide: true,

// Навигация по хешу
hashNavigation: {
// Отслеживать состояние
watchState: true,
},

// Управление клавиатурой
keyboard: {
// Включить/выключить
enabled: true,

// Вкл/Выкл
// только когда слайдер
// в пределах вьюпорта
//onlyInViewport: true,

// Вкл/Выкл
// Управление клавишами
// pageUp, pageDown
pageUpDown: true,
},

// Управление колесом мыщи
mousewheel: {
// Чувствительность колеса мыши
sensitivity: 1,

},

// Количество слайдов для показа
slidesPerView: 1,

// Отступ между слайдами
spaceBetween: 50,

// Количество пролистываемых слайдов
slidesPerGroup: 1,
/*
// Автопрокрутка
autoplay: {
	// Пауза между прокруткой
	delay: 3000,
	// Закончить на последнем слайде
	stopOnLastSlide: false,
	// Отключить после ручного переключения
	disambleOnInteraction: true
},
*/
// Скорость
speed: 800,

// Эффекты переключения слайдов
// Куб
effect: 'cube',
// Дополнение к cube
cubeEffect: {
	// Настройки тени
	slideShadows: true,
	shadow: true,
	shadowOffset: 20,
	shadowScale: 0.94
},
// Отключить предзагрузку картинок
//preloadImages: false,
// lazy loading
// подгрузка картинок
lazy: {
	// подгружать на старте
	//переключение слайда
	loadOnTransitionStart: false,
	// подгрузить предыдущую
	// и следущую картинку
	loadPrevNext: true,
},
});

// Прокрутка при клике по якорям

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});