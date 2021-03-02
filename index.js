const { runBot } = require('./lib/bot');
async function start() {
    try {
        await runBot();
    } catch(error) {
        console.log('Oshibka: ', error);
    }
}
start();