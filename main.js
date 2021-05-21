/*  
Задание 1
Реализовать следующий функционал:  при клике на элемент верхнего списка1 , он должен сворачиваться или разворачиваться со своим содержимым в виде вложенного списка;
▪ при наведении на элемент верхнего списка, его шрифт должен подсвечиваться; при этом наведение на элементы вложенного списка не должны приводить к подсвечиванию
элементов верхнего списка.
Элементы верхнего списка с текстом Local Disk 
Для функционала сворачивания/ разворачивания элементов необходимо применить делегирование и использовать только один обработчик событий.
Для функционала подсветки при наведении необходимо использовать только средства и возможности JS (не CSS).
*/

let diskC = document.getElementById('local_disk_c');

let diskD = document.getElementById('local_disk_d');

let diskE = document.getElementById('local_disk_e');

/*<---- Функция курсора на элемент списка с текстом Local Disk ----> */

function cursor() {
	this.style.cursor = 'pointer';
}

/*<---- Конец функции ----> */

/* <----- Функция скрытия вложенных элементов списка Local Disk -----> */

function hideItems(event) {
	let id = event.target.dataset.toggle;
	if (!id) return;

	this.nextElementSibling.hidden = !this.nextElementSibling.hidden;
};

/*<---- Конец функции ----> */

/*<---- Функция жирного текста при наведении на заголовок Local Disk ----> */

function boldWeight() {
	if (this) {
		this.style.fontWeight = 'bold';
	}
	return;
}

/*<---- Конец функции ----> */

/*<---- Функция возврата к обычной жирности текста после наведения курсора в место, отличное от заголовка Local Disk ----> */
function normalWeight() {
	if (this) {
		this.style.fontWeight = '300';
	}
	return;
}

/*<---- Конец функции ----> */

/* < ---- Обработчики событий на каждую функцию ----> */

/* < --- Local Disk C ---- > */
diskC.addEventListener('click', hideItems);
diskC.addEventListener('mouseover', cursor);
diskC.addEventListener('mouseover', boldWeight);
diskC.addEventListener('mouseout', normalWeight);

/* < --- Local Disk D ---- > */
diskD.addEventListener('click', hideItems);
diskD.addEventListener('mouseover', cursor);
diskD.addEventListener('mouseover', boldWeight);
diskD.addEventListener('mouseout', normalWeight);

/* < --- Local Disk E ---- > */
diskE.addEventListener('click', hideItems);
diskE.addEventListener('mouseover', cursor);
diskE.addEventListener('mouseover', boldWeight);
diskE.addEventListener('mouseout', normalWeight);

/*<---- Конец блока обработчиков ----> */

/*
Задание 2
Реализовать следующий функционал:
▪ при нажатии клавиш стрелочек Вверх и Вниз на клавиатуре подсветка текущего элемента1 переключается соответственно вверх и вниз от одного элемента к другому;
▪ при нажатии клавиши Enter выделенный элемент1 сворачивается или разворачивается со своим содержимым.Для использования клавиатурных событий на элементах
верхнего списка необходимо установить им атрибут tabindex со значением 0, который сделает любой элемент доступным для взаимодействия с пользователем.
*/

const pc_folders = document.getElementById('pc_folders');
const myCollection = pc_folders.lastElementChild.getElementsByTagName('li'); // коллекция из всех элементов li, находящиеся в родительском ul 'pc_folders'. 1-й элемент - лишка This PC, второй(lastElementChild) - сам список 'pc_folders'.

pc_folders.addEventListener('keydown', function(event) {

	if (event.code == 'ArrowUp') {
		console.log('стрелка вверх'); // сообщение для себя, чтобы понять, нажимается ли кнопка
		for (let i = 0; i < myCollection.length; i++) {
			if (event.target == myCollection[i]) {
				event.target.onkeydown = myCollection[i - 1].style.fontWeight = 'bold'; // смена жирности текса (уже текущему) элементу
				myCollection[i - 1].focus();	// фокус на (уже текущем) элементе
				event.target.onkeydown = myCollection[i].style.fontWeight = '300'; // возвращение (уже предыдущему) элементу текста обычной жирности
			}
		}
	}
	else if (event.code == 'ArrowDown') {
		console.log('Стрелка вниз'); // сообщение для себя, чтобы понять, нажимается ли кнопка
		for (let j = 0; j < myCollection.length; j++) {
			if (event.target == myCollection[j]) {
				event.target.onkeydown = myCollection[j + 1].style.fontWeight = 'bold'; // смена жирности текса (уже текущему) элементу
				myCollection[j + 1].focus(); // фокус на (уже текущем) элементе
				event.target.onkeydown = myCollection[j].style.fontWeight = '300'; // возвращение (уже предыдущему) элементу текста обычной жирности
			}
		}
	}
	else if (event.code == 'Enter') {
		let id = event.target.dataset.toggle;  // проверка на наличие data-атрибута

		console.log('Нажат Enter'); // сообщение для себя, чтобы понять, нажимается ли кнопка

		if (!id) return; // если элемент не имеет дата атрибута, то дальнейшие действия не выполняются
		event.target.nextElementSibling.hidden = !event.target.nextElementSibling.hidden; // если же атрибут имеется и имеет дочерние элементы, скрываем
	}
});


