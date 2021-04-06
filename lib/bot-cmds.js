const { bot } = require('./bot');
const { getTodaySchedule, getWeekSchedule } = require('./schedule');
const { giveAJoke } = require('./jokes');

bot.start((ctx) =>
  ctx.reply(
    `Приветствую, ${ctx.from.first_name ? ctx.from.first_name : "хороший человек"
    }! Набери /help и увидишь, что я могу.`
  )
);

bot.help((ctx) => ctx.reply(`Список доступных команд:
/schedule - расписание текущего дня
/weekschedule - расписание недели
/givejoke - случайная шутка
/whoami - кто ты в телеграмме`));

// bot.on("text", (ctx) => {
//   return ctx.reply(ctx.message.text);
// });

bot.command("whoami", (ctx) => {
  const { id, username, first_name, last_name } = ctx.from;
  return ctx.replyWithMarkdown(`Кто ты в телеграмме:
*id* : ${id}
*username* : ${username}
*Имя* : ${first_name}
*Фамилия* : ${last_name}
*chatId* : ${ctx.chat.id}`);
});

exports.setCommands = function () {
  bot.command('givejoke', (ctx) => {
    const givejoke  = giveAJoke();
    ctx.reply(givejoke);
  });
}

exports.setCommands = function () {
  bot.command('schedule', (ctx) => {
    const schedule = getTodaySchedule();
    ctx.reply(schedule);
  });
  bot.command('weekschedule', (ctx) => {
    const weekschedule = getWeekSchedule();
    ctx.reply(weekschedule);
  });
}