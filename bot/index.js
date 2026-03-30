const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('YOUR-telegram-bot-token');

bot.start((ctx) => {
    ctx.reply(
        "🚀 Open Earning App",
        Markup.inlineKeyboard([
            Markup.button.webApp("💰 Start Earning", "https://your-vercel-url.vercel.app")
        ])
    );
});

bot.launch();
