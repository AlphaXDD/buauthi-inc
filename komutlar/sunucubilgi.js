const Discord = require("discord.js");

exports.run = (client, message) => {
  let sunucu = new Discord.MessageEmbed()
    .setAuthor("Sunucu Bilgi", message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
  .setColor(0x36393F)
    .addField(" <a:parilti:1003701403501465721> Sunucu İsmi", message.guild.name)
    .addField(" <a:parilti:1003701403501465721> Sunucu İdsi", message.guild.id)
    .addField(" <a:parilti:1003701403501465721> Sunucu Bölgesi", message.guild.region)
    .addField(
      " <a:parilti:1003701403501465721> Roller",
      message.guild.roles.cache.map(role => role.name).join(", "),
      true
    )
    .addField(" <a:parilti:1003701403501465721> AFK kanalı:", `${message.guild.afkChannel}`, true)
    .addField(" <a:parilti:1003701403501465721> AFK zaman aşımı:", message.guild.afkTimeout, true)
    .addField(" <a:parilti:1003701403501465721> Oluşturma tarihi:", message.guild.createdAt, true)
    .setTimestamp()
    .setFooter("Sunucu Bilgi", message.guild.iconURL());
  return message.channel.send(sunucu);
};

exports.conf = {
  aliases: ["sunucubilgi"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

exports.help = {
  name: "sunucu-bilgi",
  description: "",
  usage: "sunucu-bilgi"
};
