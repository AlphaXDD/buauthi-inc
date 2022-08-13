const GweepDiscord = require('discord.js');
const GweepClient = new GweepDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const GweepEmbed = new GweepDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Güvenlik Yardım Menüsü`)
 .setDescription(` <a:parilti:1003701403501465721> ${prefix}reklam-engel \n ** <:tire:1003701402008293396> Sistemi açtığınızda yapılan reklamları engeller**
 <a:parilti:1003701403501465721> ${prefix}reklam-log #kanal \n ** <:tire:1003701402008293396> Seçtiğinz kanalda yapılan reklamların logunu tutar**
 <a:parilti:1003701403501465721> ${prefix}küfür-engel \n ** <:tire:1003701402008293396> Sistemi açtığınızda edilen küfürleri engeller**
 <a:parilti:1003701403501465721> ${prefix}küfür-log #kanal \n ** <:tire:1003701402008293396> Seçtiğinz kanalda edilen küfürlerin logunu tutar**
 <a:parilti:1003701403501465721>  ${prefix}ban \n ** <:tire:1003701402008293396> Etiketlediğiniz kişiyi banlarsınız**
  <a:parilti:1003701403501465721>  ${prefix}ban-sorgu \n ** <:tire:1003701402008293396> Banlanan kişinin ban sebebini sorgularsınız**
  <a:parilti:1003701403501465721> ${prefix}ban-say \n ** <:tire:1003701402008293396> Toplam Ban Sayısını Gösterir**
  <a:parilti:1003701403501465721> ${prefix}unban \n ** <:tire:1003701402008293396> Birisinin banını açarsınız**
 <a:parilti:1003701403501465721>  ${prefix}kick \n ** <:tire:1003701402008293396> Etiketlediğiniz kişiyi sunucudan atarsınız**
  <a:parilti:1003701403501465721> ${prefix}uyarı \n ** <:tire:1003701402008293396> Etiketlediğiniz kişiye uyarı verirsiniz**
    <a:parilti:1003701403501465721> ${prefix}mod-log #kanal \n ** <:tire:1003701402008293396> Mod-log kanalı ayarladığınızda sunucudaki tüm işlemlerin logunu tutar**
    <a:parilti:1003701403501465721> ${prefix}mod-log sıfırla \n ** <:tire:1003701402008293396> Mod-log kanalını sıfırlar**




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
  name: 'güvenlik',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};