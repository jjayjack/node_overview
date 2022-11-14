console.log('Start of program: Synchronous')

setTimeout(() => {
	console.log('2 second timer')
}, 2000)

setTimeout(() => {
	console.log('0 second timer')
}, 0)

console.log('Stopping of program')
