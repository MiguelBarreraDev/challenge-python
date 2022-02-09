export { $id , $slc };

let $id = (id) => document.getElementById(id);
let $slc = (slc, flag=null) => {
	return (!flag) ? document.querySelector(slc) : document.querySelectorAll(slc);
}
