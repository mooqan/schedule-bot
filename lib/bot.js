const { Telegraf } = require('telegraf');

const token = "1507023620:AAFtZ0V21vtLaqQAHco46crCL7tAzaw1FuI";

const bot = new Telegraf(token);
exports.bot = bot;
exports.runBot = async function() {
    console.log('Zapuskayu Bota...');

    try {
        await bot.launch()
        
        
        console.log('Bot uspeshno zapushcen');
    }catch(error) {
        console.log('smert` nevernym: ', error);
    }

}
