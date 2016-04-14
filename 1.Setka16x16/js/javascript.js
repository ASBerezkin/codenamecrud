$(document).ready(function(){
	var i = 0;
	for (i; i<256; i++) {
		$('.container').append('<div class="coub"></div>')//добавляем сетку квадратиков
	}
	$('.coub').click(function(){
		$(this).toggleClass('pic');//по кнопке мыши добавляем либо удаляем класс
	})
	$('button').click(function(){
		$('div').removeClass('pic');//очищаем сетку
	})
});