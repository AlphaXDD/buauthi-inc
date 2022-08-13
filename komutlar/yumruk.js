const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();


    if (message.mentions.users.size < 1) return message.reply('**Kimi Yumruklayacam Reis Etiketlede Vurayım Ağzının Ortasına **').catch(console.error);

    const zerocode =new Discord.MessageEmbed()
    .setColor(0x36393F)
    .setDescription(message.author.username + ` ${user}` + '**Adlı Kişiyi Yumrukladı**')
    .setImage('https://c.tenor.com/hQagaijBntUAAAAM/cat-punch.gif')
    .setFooter(`${message.author.username} Tarafından Yumruk Atıldı`, message.author.avatarURL())
    return message.channel.send(zerocode);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yumruk-at',
  description: 'Belirtilen kişiyi, Yumruklar',
  usage: ''
};