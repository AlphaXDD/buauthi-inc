const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor(0x36393F)
  .setTitle("**Bana Oy Ver!**")
  .setDescription("[**Oy Ver**](https://top.gg/bot/188461479253639169/vote)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oy-ver","oy","oyver"],
  permLevel: 0
};

exports.help = {
  name: 'oy-ver',
  description: '',
  usage: ''
};