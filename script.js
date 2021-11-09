const images = document.querySelector('.image-container');
const img = document.querySelectorAll('img');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let idx = 0;
let interval = setInterval(run, 3000);

function run() {
	idx++;
	changeImage();
}

function changeImage() {
	if (idx > img.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = img.length - 1;
	}
	images.style.transform = `translateX(${-idx * 450}px)`;
	
	//* ~~~~~ for screens < 450px ~~~~~
	if (window.innerWidth < 450) {
		images.style.transform = `translateX(${-idx * 350}px)`;
	}
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 3000);
}

nextBtn.addEventListener('click', () => {
	idx++;

	changeImage();
	resetInterval();
});

prevBtn.addEventListener('click', () => {
	idx--;

	changeImage();
	resetInterval();
});
