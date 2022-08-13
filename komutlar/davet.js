const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor(0x36393F)
  .setTitle("**Beni Sunucuna Ekle! \nDestek Sunucuma Katıl!**")
  .setDescription("[**Davet Et**](https://discord.com/api/oauth2/authorize?client_id=188461435188150273&permissions=8&scope=bot) \n [**Bot Destek Sunucu**](https://discord.gg/Tc4Ep4GJFf)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};