const ITEMS = ["apple", "bagel", "coconut", "donut", "egg"]

const SALES_TAX = {
	AL:	0.040,
	AK:	0.000,
	AZ:	0.056,
	AR:	0.065,
	CA:	0.073,
	CO:	0.029,
	CT:	0.064,
	DE:	0.000,
	DC:	0.060,
	FL:	0.060,
	GA:	0.040,
	HI:	0.040,
	ID:	0.060,
	IL:	0.063,
	IN:	0.070,
	IA:	0.060,
	KS:	0.065,
	KY:	0.060,
	LA:	0.045,
	ME:	0.055,
	MD:	0.060,
	MA:	0.063,
	MI:	0.060,
	MN:	0.069,
	MS:	0.070,
	MO:	0.042,
	MT:	0.000,
	NE:	0.055,
	NV:	0.069,
	NH:	0.000,
	NJ:	0.066,
	NM:	0.051,
	NY:	0.040,
	NC:	0.048,
	ND:	0.050,
	OH:	0.058,
	OK:	0.045,
	OR:	0.000,
	PA:	0.060,
	RI:	0.070,
	SC:	0.060,
	SD:	0.045,
	TN:	0.070,
	TX:	0.063,
	UT:	0.061,
	VT:	0.060,
	VA:	0.053,
	WA:	0.065,
	WV:	0.060,
	WI:	0.050,
	WY:	0.040,
}

function roundMoney(num) {
	return Math.round(num * 100) / 100;
}

function calculateSubtotal() {
	let total = 0;

	// 获取表格元素
	let table = document.getElementById("item-table");

	// 遍历表格的所有行（从第二行开始），将第二列和第三列相乘并添加到total中
	for (let i = 1; i < table.rows.length; i++) {
		// 获取行元素
		let row = table.rows[i];

		// 获取Price和Quantity Needed并转换为数字
		let price = parseFloat(row.cells[1].innerHTML);
		let quantity = parseFloat(row.cells[2].querySelector('input').value);

		// 仅当 price 和 quantity 都是有效数字时才进行累加
		if (!isNaN(price) && !isNaN(quantity)) {
			total += price * quantity;
		}
	}

	return total;
}

function calculateSalesTax() {
	// 获取州选项
	let state = document.getElementById("state-tax").value;

	// 税 = 总价 * 税率
	let tax = calculateSubtotal() * getSalesTaxRateForState(state);

	return roundMoney(tax);
}

function getSalesTaxRateForState(state) {
	return SALES_TAX[state];
}

document.getElementById("btn-what-is-my-sales-tax").addEventListener("click", () => {
	const state = document.getElementById("state-tax").value;
	alert("The sales tax rate for " + state + " is " + (getSalesTaxRateForState(state) * 100).toFixed(2) + "%");
})

document.getElementById("btn-subtotal").addEventListener("click", () => {
	alert("Your subtotal is: $" + calculateSubtotal().toFixed(2));
});

document.getElementById("btn-sales-tax").addEventListener("click", () => {
	alert("Your sales tax is: $" + calculateSalesTax().toFixed(2));
});

document.getElementById("btn-checkout").addEventListener("click", () =>{
	alert("Your total is: $" + (calculateSubtotal() + calculateSalesTax()).toFixed(2))});

//
