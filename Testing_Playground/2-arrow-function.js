// const square = function (x) {
// 	return x * x
// }

// const square = (x) => {
// 	return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

//Arrow functions on methods
const event = {
	name: "Jennifer's Birthday",
	printGuestListNB: () => {
		console.log('Guest list for ' + this.name) //undefined this (arrow function is non-binding)
		console.log(`Guest list for ${event.name}`)
	},
	printGuestList() {
		console.log('Guest list for ' + this.name)
	}
}
event.printGuestListNB()
event.printGuestList()

const event2 = {
	name: 'Johnson Reception',
	guestList: ['Mike', 'Steve', 'Joan'],
	printGuestList() {
		console.log('Guest list for ' + this.name)
		this.guestList.forEach(function (guest) {
			console.log(guest + ' is attending the ' + this.name)
		})

		this.guestList.forEach((guest) => {
			console.log(guest + ' is attending the ' + this.name)
		})
	}
}

event2.printGuestList()
