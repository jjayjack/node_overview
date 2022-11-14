console.log('Start of program: Synchronous')

setTimeout(() => {
	console.log('2 second timer: Asynchronous')
}, 2000)

setTimeout(() => {
	console.log('0 second timer: Asynchronous')
}, 0)

console.log('Stopping of program: Synchronous')
