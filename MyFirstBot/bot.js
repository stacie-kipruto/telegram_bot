const Telegraf = require("telegraf");
const bot = new Telegraf("1040119540:AAHqt9AjRyVkb_eQOAB1Z3lThNBUQ31tAWo");

// /start
bot.use((ctx, next) => {
    ctx.state.apple = 5
    console.log(ctx);
  ctx.reply("Bot is used");
  next(ctx);
});

bot.start((ctx) => {
  ctx.reply(
    ctx.from.first_name +
      " has entered the start command and it is a " +
      ctx.updateSubTypes[0]
  );
ctx.reply(ctx.state.apple)
});

// bot.help((ctx)=>{
//     ctx.reply("Hi Stacee, I need your help")

// })
// bot.settings((ctx)=>{
//     ctx.reply("Hi Stacee, these are settings")
// })

// bot.command(["test" , "stacey" , "cook"] , (ctx)=>{
//     ctx.reply ("hello world")
// })

bot.hears("cat", (ctx) => {
  ctx.reply("Meeoooooowww");
});

bot.on("ext", (ctx) => {
  ctx.reply["this is a text message"];
});
bot.on("new_chat_members", (ctx) => {
  ctx.reply("Hi" + ctx.from.first_name + " Welcome to the group");
});
bot.mention("football", (ctx) => {
  ctx.reply("Manchester is RED");
});

bot.hashtag("my_team", (ctx) => {
  ctx.reply("GGMU");
});

bot.launch();
