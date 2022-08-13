const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;

let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};

let reasonn;
if(!reason) reasonn = 'Sebep Belirtilmedi';
if(reason) reasonn = `${reason}`;
message.channel.send(`${channel} Adlı Kanal Kilitlendi.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.createOverwrite(everyone, { 'SEND_MESSAGES': false }, message.author.tag+' Tarafından Kilitlendi!');
channel.send(new Discord.MessageEmbed()
.setColor(0x36393F)
.setTitle(channel.name+' Kilitlendi')
.setDescription(`Bu Kanal **${reasonn}** Sebebinden Dolayı Yetkililer Tarafından Kilitlendi.`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kilitle", "kanal-kilitle","kanal-kapat"],
  permLevel: 0
};
 
exports.help = {
  name: 'kilitaç'
};