let split = {
	bill: 0,
	friends: 0,
	share: 0,
}

// home-page
let homePage = document.getElementById('home-page');


bill();


function bill(){
	homePage.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild = split.bill;
}