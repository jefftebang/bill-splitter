const  btnSplit = document.getElementById('split-btn');
const quotnt = document.getElementById('quotient');

let bill = {
	amount: 0,
	friends: 0,
}


btnSplit.addEventListener('click', function(){
	bill.amount = btnSplit.previousElementSibling.previousElementSibling.previousElementSibling.value;

	bill.friends = btnSplit.previousElementSibling.value;

	totalBill = parseInt(bill.amount);
	split = parseInt(bill.friends);
	
	division = totalBill/split;
	quotnt.textContent = division;
})	


