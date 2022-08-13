const GweepDiscord = require('discord.js');
const GweepClient = new GweepDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const GweepEmbed = new GweepDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(` <a:parilti:1003701403501465721> ${prefix}sil \n ** <:tire:1003701402008293396> Yazdığınız miktarda mesajı siler**
 <a:parilti:1003701403501465721>  ${prefix}yavaşmod \n ** <:tire:1003701402008293396> Yavaş modu ayarlarsınız**
 <a:parilti:1003701403501465721>  ${prefix}snipe \n ** <:tire:1003701402008293396> Silinen son mesajı gösterir**
  <a:parilti:1003701403501465721> ${prefix}kanal-kapat \n ** <:tire:1003701402008293396> Komutun kullanıldığı kanal mesaj yazmaya kapatılır**
  <a:parilti:1003701403501465721> ${prefix}kanal-aç \n ** <:tire:1003701402008293396> Komutun kullanıldığı kanal mesaj yazmaya açılır**
  <a:parilti:1003701403501465721> ${prefix}çek \n ** <:tire:1003701402008293396> Etiketlediğiniz kişiyi seste yanınıza çekersiniz**
  <a:parilti:1003701403501465721> ${prefix}say \n ** <:tire:1003701402008293396> Sunucudaki Üyelerin Aktiflik Durumunu Atar**
  <a:parilti:1003701403501465721> ${prefix}sa-as <aç<kapat> \n ** <:tire:1003701402008293396> Ayarlanabilir selam alma**
    <a:parilti:1003701403501465721> ${prefix}nuke \n ** <:tire:1003701402008293396> Kullandığınız kanalda kanalı silip yeniden oluşturur**





`)
.setImage("https://share.creavite.co/VOHGNdY9KAe3FTbg.gif")
 .setTimestamp()
 message.channel.send(GweepEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};