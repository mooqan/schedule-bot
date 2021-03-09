const { bot } = require('./bot');
const { getTodaySchedule, getWeekSchedule } = require('./schedule');

exports.setCommands = function() {
    bot.command('schedule', (ctx) => {

      const schedule =  getTodaySchedule();

        ctx.reply(schedule);
    });
    bot.command('weekschedule', (ctx) => {
      const weekschedule = getWeekSchedule();
      ctx.reply(weekschedule);
    });
}