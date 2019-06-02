const discord = require("discord.js");
const token = require("./token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});
require("./functions")(bot);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

bot.login(NTgyMzI0OTEyOTA0MjA4Mzk3.XPOksw.0plxS9p3MGUqEfnxLanO_aRcyQI);
