import {
	createElement, insertElement , showViewCard, renderBtn, renderCountBox
} from "./components.js";
export { arrCards };

const btnPrev = document.getElementById("btn-prev"),
	btnNext = document.getElementById("btn-next");
let arrCards = await fetch("./cards.json")
	.then(res => res.json());

/*****************************************/
/* Anonime function to show the first view
/*****************************************/
((id=0) => {
	let data = arrCards[id]; 
	let element = createElement(data);

	renderCountBox(0, arrCards.length - 1);
	insertElement(element);
})()

/*****************************************/
/* Implementing controllers (buttons)
/*****************************************/
let itr = 0;

btnNext.addEventListener("click", () => {
	let nextBoxId = 0;
	
	if (itr === arrCards.length - 1) {
		return null;
	}
	itr++;
	if (itr == arrCards.length - 1) {
		renderBtn();
	}
	nextBoxId = arrCards[itr].id;
	renderCountBox(itr);
	showViewCard(nextBoxId);
})

btnPrev.addEventListener("click", () => {
	let prevBoxId = 0;
	
	if (itr === 0) {
		return null;
	}
	itr--
	prevBoxId = arrCards[itr].id;
	renderCountBox(itr);
	showViewCard(prevBoxId);
})

/*========================*/
/* Logica
/*========================*/
