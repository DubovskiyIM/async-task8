const Timer = require('timerpromise');

const timer = async () => {
	console.time('All timers')
	console.time('3 Sec Timer');
	await new Timer(3).start.then(() => console.log('3 sec'));
	console.timeEnd('3 Sec Timer');
	console.time('2 Sec Timer');
	await new Timer(2).start.then(() => console.log('2 sec'));
	console.timeEnd('2 Sec Timer');
	console.timeEnd('All timers');
}

void timer();
