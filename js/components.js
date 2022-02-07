import { arrCards } from "./main.js";
export  { 
	createElement, insertElement , showViewCard , renderBtn, renderCountBox
};

function createElement(elementData)
{
	let {
		id,
		question,
		response
	} = elementData;

	let component = document.createElement("div");
	let elmBoxQuestion = document.createElement("div");
	let elmBoxResponse = document.createElement("div");
	let elmQuestion = document.createElement("div");

	component.classList.add("box", `box-${id}`);
	component.setAttribute("id", id);

	/* Part - create question box element */
	elmBoxQuestion.classList.add("box-question");
	elmBoxQuestion.setAttribute("id", `box-question_${id}`);
	elmQuestion.classList.add("que", `que-${id}`);
	elmQuestion.setAttribute("id", `que-${id}`);
	elmQuestion.innerText = question;
	elmBoxQuestion.appendChild(elmQuestion);

	/* Part - create response box element */
	let arrKey = Object.keys(response);
	elmBoxResponse.classList.add("box-response");
	elmBoxResponse.setAttribute("id", `box-response_${id}`);
	for (let i in arrKey) {
		let elmResponse = document.createElement("a");

		elmResponse.classList.add("res", `res-${i}`);
		elmResponse.setAttribute("id", `res-${i}`);
		elmResponse.setAttribute("tabindex", parseInt(i) + 1) /*Added to use focus pseudo-class*/
		elmResponse.innerText = response[arrKey[i]];
		elmBoxResponse.appendChild(elmResponse);
	}

	component.appendChild(elmBoxQuestion);
	component.appendChild(elmBoxResponse);

	return component;
}

function insertElement(element) {
	const ctnBox = document.getElementById("ctn-box")

	try {
		ctnBox.removeChild(ctnBox.querySelector(".box"));
	}
	catch (e) {
		console.error("Error: The first card was loaded");
	}
	finally {
		ctnBox.appendChild(element);
		let currentBox = document.getElementById(`${element.getAttribute("id")}`);
		let responseBox = currentBox.querySelector(".box-response");
		responseBox.classList.add("show");
	}
}

function showViewCard(id=0) {
	let data = arrCards[id]; 
	let element = createElement(data);
	
	insertElement(element);
}

function renderBtn() {
	const ctnHandler = document.querySelector(".handler");
	const btnNext = ctnHandler.querySelector(".btn-next");
	const btnPrev = ctnHandler.querySelector(".btn-prev");
	const btnFinish = btnNext.cloneNode();
	
	btnFinish.innerText = "Finish";
	btnFinish.classList.add("btn-finish");
	btnFinish.classList.remove("btn-next");

	ctnHandler.removeChild(btnNext);
	ctnHandler.removeChild(btnPrev);
	ctnHandler.appendChild(btnFinish);
}

function renderCountBox(specifie, total=arrCards.length - 1)
{
	const countBox = document.querySelector(".count-box");

	countBox.innerText = `${specifie} / ${total}`;
}
