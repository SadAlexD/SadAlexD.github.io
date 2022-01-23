 
 "use strict"


/*
let siteType = prompt ("Выберите желаемый тип сайта: Сайт-визитка - 1 Интернет магазин - 2 Корпоративный - 3");
console.log(siteType);
let cost1;
let time1;

if (siteType == 1){
	 cost1 = 1000
	 time1 = 7
}

else {
	cost1 = 2000
	time1 = 20
}

console.log("Цена выбранного типа: "+cost1+" $")



let siteDecoration = prompt ("Выберите желаемое оформление сайта: Шаблонное - 1 Индивидуальное - 2");
console.log(siteDecoration);
let cost2;
let time2;

if (siteDecoration == 1){
	cost2 = 1000
	time2 = 3
}

else {
	cost2 = 2000
	time2 = 7
}

console.log("Цена за оформление: "+cost2+" $")



let siteAdaptability = prompt ("Нужна ли сайту адаптивность?: Y/N");
console.log(siteAdaptability);
let cost3;
let time3;

if (siteAdaptability == "Y"){
	cost3 = 1000
	time3 = 7
}

else {
	cost3 = 0
	time3 = 1
}

console.log("Цена за адаптивность: "+cost3+" $")


let costTotal = cost1 + cost2 + cost3;
console.log("Общая стоимость работы составляет: "+costTotal+" $");
let timeTotal = time1 + time2 + time3;
console.log("Примерное время выполнения работы: "+timeTotal+" дня(ей)");


*/


$(window).scroll(() => {
	let scrollDIstance = $(window).scrollTop();

	$(".section").each((i, el) => {

		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
			$("nav a").each((e, el) => {
				if ($(el).hasClass("active")){
					$(el).removeClass("active");
				}
			};
			$('nav li:eq('+ i +')').find('a').addClass('active');
		}
	}
}


$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});

});











































alert ("Общая стоимость работы составляет: "+costTotal+" $")