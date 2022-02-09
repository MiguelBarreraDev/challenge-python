import { $id, $slc } from './tricks.js';
import {
	createElement, insertElement , showViewCard, renderBtn, renderCountBox
} from "./components.js";
export { arrCards };

const btnPrev = $id("btn-prev"),
	btnNext = $id("btn-next");
let request = await fetch("http://172.21.213.228:3001/cards");
let arrCards = await request.json();

/* console.log(arrCards); */

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
