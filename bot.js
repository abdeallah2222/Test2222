const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("669618334127358014")
setInterval(function() {
channel.send(`abde abde abde abde abde`);
}, 30)
})

client.login(process.env.BOT_TOKEN);