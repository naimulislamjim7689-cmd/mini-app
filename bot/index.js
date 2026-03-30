const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('8253819317:AAEp4e5ZxcdQg92YA9-WjfcI4xzgxtXHpHg');

bot.start((ctx) => {
    ctx.reply(
        "🚀 Open Earning App",
        Markup.inlineKeyboard([
            Markup.button.webApp("💰 Start Earning", "https://your-vercel-url.vercel.app")
        ])
    );
});

bot.launch();