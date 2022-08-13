const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json") 

exports.run = async (bot, message, args) => {
   if(message.author.id !== "937405099951669248") if(message.author.id !== "323168431887089665") return message.channel.send("bu komutu sadece Bot Sahibi kullanabilir!");    
    message.channel.send(`Yeniden başlatılıyor...`).then(msg => {
    console.log(`Konsol: Yeniden başlatılıyor...`);
    process.exit(0);
  })
    
          
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Şşş!',
  usage: 'reboot'
};