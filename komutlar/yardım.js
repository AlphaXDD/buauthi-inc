const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
 .setColor(0x36393F)
.setTitle("<a:pariltilar:1003701403501465721> Alpha+'nın Yardım Menüsüne Hoşgeldin!")
 .setTimestamp()
.setDescription("```!moderasyon```  ** <:tire:1003701402008293396> Moderasyon komutlarını görüntülersiniz.** \n ```!güvenlik```  ** <:tire:1003701402008293396> Güvenlik komutlarını görüntülersiniz.** \n ```!eğlence```  ** <:tire:1003701402008293396> Eğlence komutlarını görüntülersiniz.** \n ```!kullanıcı```  ** <:tire:1003701402008293396> Kullanıcı komutlarını görüntülersiniz.** \n <a:pariltilar:1003701403501465721> [Bot Destek Sunucu](https://discord.gg/Tc4Ep4GJFf) <a:pariltilar:1003701403501465721>  \n <a:pariltilar:1003701403501465721> [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=188461435188150273&permissions=8&scope=bot) <a:pariltilar:1003701403501465721> ")
.setImage("https://share.creavite.co/VOHGNdY9KAe3FTbg.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'.yardım'
}