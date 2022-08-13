const GweepDiscord = require('discord.js');
const GweepClient = new GweepDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const GweepEmbed = new GweepDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Menüsü`)
 .setDescription(` <a:parilti:1003701403501465721> ${prefix}avatar \n ** <:tire:1003701402008293396> Avatarınıza bakarsınız**
 <a:parilti:1003701403501465721>  ${prefix}yetkilerim \n ** <:tire:1003701402008293396> Yetkilerini görürsün**
 <a:parilti:1003701403501465721>  ${prefix}profil \n ** <:tire:1003701402008293396> Profilini görürsün**
 <a:parilti:1003701403501465721>  ${prefix}sunucuresmi \n ** <:tire:1003701402008293396> Sunucu resmini gösterir**
  <a:parilti:1003701403501465721> ${prefix}sunucu-bilgi \n ** <:tire:1003701402008293396> Sunucu Bilgilerini gösterir**
 <a:parilti:1003701403501465721>  ${prefix}ping \n ** <:tire:1003701402008293396> Botun Pingine Bakarsın**
 <a:parilti:1003701403501465721>  ${prefix}id \n ** <:tire:1003701402008293396> Birisinin id'sine Bakarsın**
 <a:parilti:1003701403501465721>  ${prefix}davet \n ** <:tire:1003701402008293396> Beni Sunucuna Eklersin**
 <a:parilti:1003701403501465721>  ${prefix}istatistik \n ** <:tire:1003701402008293396> Bot istatistiklerini görürsünüz**
 <a:parilti:1003701403501465721>  ${prefix}boost-bilgi \n ** <:tire:1003701402008293396> Sunucunun Boost Sayısını Ve Boost Levelini Gösterir**
  <a:parilti:1003701403501465721> ${prefix}bug-bildir <öneri<şikayet> \n ** <:tire:1003701402008293396> Bot için olan şikayet ve önerilerinizi bildirebilirsiniz**
  <a:parilti:1003701403501465721> ${prefix}oy-ver <öneri<şikayet> \n ** <:tire:1003701402008293396> Bota bu linkten oy verebilirsiniz**
    <a:parilti:1003701403501465721> ${prefix}rozet-list \n ** <:tire:1003701402008293396> Sunucudaki tüm üyelerde olan değerli rozetleri gösterir.**
    




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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};