const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (!message.guild) return
const sa = new Discord.MessageEmbed ()
.addField(`Boost Seviyesi:` , message.guild.premiumSubscriptionCount)
.addField(`Boost Sayısı:` , message.guild.premiumTier)
message.channel.send(sa)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'boost-bilgi',
  usage: 'boostbilgi'
};