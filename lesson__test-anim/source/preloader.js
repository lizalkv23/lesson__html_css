// Модуь работы с preloader =======================================================================================================================================================================================================================
/*
	!Инструкция (Не использовать вместе с addLoadedClass() функцией с шаблона)
	data-preloader добавить атрибут для wrapper или любого тега внутри которого вся страница,
	data-preloader-progress="" добавить атрибут для тега куда нужно вывести прогресс (значение line добавляет стиль width для тега который соответствует % загрузки страницы)
*/
export function preloader() {
	const
		preloaderImages = document.querySelectorAll('[data-preloader] img'),
		showPecentLoad = document.querySelector('[data-preloader-progress]'),
		htmlDucument = document.documentElement;

	let imagesLoadedCount = 0,
		counter = 0;

	if (preloaderImages.length) {
		htmlDucument.style.position = 'fixed';
		htmlDucument.classList.add('lock');

		for (let i = 0; i < preloaderImages.length; i++) {
			const imgClone = document.createElement('img'),
				img = preloaderImages[i];
			if (imgClone) {
				imgClone.onload = imageLoaded;
				imgClone.onerror = imageLoaded;
				img.dataset.src ? imgClone.src = img.dataset.src : imgClone.src = img.src;
			}
		}

		function setValueProgress(counter) {
			if (showPecentLoad.dataset.preloaderProgress == 'line') {
				showPecentLoad.style.width = counter + '%';
			} else {
				showPecentLoad.innerText = counter + '%';
			}
		}

		showPecentLoad ? setValueProgress(counter) : '';

		function imageLoaded() {
			imagesLoadedCount++;
			const progress = Math.round((100 / preloaderImages.length) * imagesLoadedCount);

			imagesLoadedCount == preloaderImages.length ? addLoadedClass() : '';
			if (showPecentLoad) {
				const intervalId = setInterval(() => {
					if (counter >= progress) {
						clearInterval(intervalId);
					} else {
						counter++;
						setValueProgress(counter);
					}
				}, 40);
			}
		}


		function addLoadedClass() {
			setTimeout(() => {
				htmlDucument.classList.add('loaded');
				if (htmlDucument.closest('.loaded')) {
					htmlDucument.classList.remove('lock');
					htmlDucument.style.removeProperty('position');
				}
			}, 1500);
		}
	}
}