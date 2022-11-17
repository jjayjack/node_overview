setTimeout(() => {
	console.log('2 seconds!')
}, 2000)

const names = ['JEN', 'JESS', 'DREW']
const shortnames = names.filter((name) => {
	return name.length <= 3
})

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			latitude: 0,
			longitude: 0
		}
		callback(data)
	}, 2000)
}

geocode('Philadelphia', (dataTransferred) => {
	console.log(dataTransferred)
})

const add = (x, y, callback) => {
	setTimeout(() => {
		callback(x + y)
	}, 2000)
}

add(1, 4, (sum) => {
	console.log(sum)
})
