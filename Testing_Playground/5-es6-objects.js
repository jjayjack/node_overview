//object property shorthand
const name = 'Jocelyn'
const userAge = 29
const originalUser = {
	name: name,
	age: userAge,
	location: 'Chicago'
}
//using shorthand syntax can use variable
const user = {
	name,
	age: userAge,
	location: 'Chicago'
}

// console.log(user)

//object destructuring - goal: extract properties & their values from within an object into individual variables
const product = {
	label: 'Red notebook',
	price: 3.0,
	stock: 200,
	lastPurchased: new Date().toDateString()
}
console.log(product.lastPurchased)

// const label = product.label
// const stock = product.stock

// const { label: productLabel, lastPurchased, stock } = product

// console.log(productLabel)
// console.log(stock)
// console.log(lastPurchased)

const transaction = (type, { label, stock, lastPurchased: time }) => {
	console.log(type, label, stock, time)
}

transaction('order', product)
