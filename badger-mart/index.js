// !!! STOP !!!
// You should not need to modify anything below.
// See Step 9 for using your Badger ID to get today's feature,
// there is no code for you to do beyond here!
// !!! 停止 !!!
// 下面的内容你不需要修改。
// 请查看第9步，使用你的Badger ID获取今天的功能，
// 之后没有需要你编写的代码！

fetch("https://cs571.org/api/s24/hw1/featured-sale-item", {
	headers: {
		"X-CS571-ID": "bid_fa_40ffbe0960438191ef3afa3467180abb22b11c99cf8b12f48cf18ac3bef8807b",
	}
})
.then(res => {
	if (res.status === 200 || res.status === 304) {
		return res.json()
	} else {
		throw new Error();
	}
})
.then(data => {
	document.getElementById("feature").innerText = `Today's sale is ${data.name} for \$${data.price}, which can only be asked for at the service desk!`
})
.catch(err => {
	console.error("Could not get the featured item.")
})