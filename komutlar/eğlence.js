const GweepDiscord = require('discord.js');
const GweepClient = new GweepDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const GweepEmbed = new GweepDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Eğlence Menüsü`)
 .setDescription(`  <a:parilti:1003701403501465721>  ${prefix}türk \n ** <:tire:1003701402008293396> Bayrak Gif Atar**
 <a:parilti:1003701403501465721>  ${prefix}mcskin \n ** <:tire:1003701402008293396> Yazdığınız ismin minecraft görünüşünü atar**
 <a:parilti:1003701403501465721>  ${prefix}fbi \n ** <:tire:1003701402008293396> Bot FBi Gif Atar**
 <a:parilti:1003701403501465721>  ${prefix}düello \n ** <:tire:1003701402008293396> Düello Atarsın**
 <a:parilti:1003701403501465721>  ${prefix}wasted \n ** <:tire:1003701402008293396> Polis tarafından yakalanırsın**
 <a:parilti:1003701403501465721>  ${prefix}aşkölçer \n ** <:tire:1003701402008293396> Etiketlediğiniz kişiyle aşk derecenizi gösterir**
 <a:parilti:1003701403501465721>  ${prefix}atasözü \n ** <:tire:1003701402008293396> Ata Sözü Atar**
 <a:parilti:1003701403501465721>  ${prefix}tkm \n ** <:tire:1003701402008293396>  Botla Taş,Kağıt,Makas Oynarsınız**
 <a:parilti:1003701403501465721>  ${prefix}kaçcm \n ** <:tire:1003701402008293396> Emanet Kaçcm Ölçer**
 <a:parilti:1003701403501465721>  ${prefix}yumruk-at \n ** <:tire:1003701402008293396> Etiketlenen Kişiye Yumruk Atar**
 <a:parilti:1003701403501465721>  ${prefix}sor \n ** <:tire:1003701402008293396> Bota Soru Sorarsınız **
 <a:parilti:1003701403501465721>  ${prefix}sarıl \n ** <:tire:1003701402008293396> Etiketlenen Kişiye Sarılırsınız **
 <a:parilti:1003701403501465721>  ${prefix}öp \n ** <:tire:1003701402008293396> Etiketlenen Kişiyi Öpersiniz **


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
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};