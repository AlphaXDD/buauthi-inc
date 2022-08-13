const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.guild)
    return message.author.send(
      "Bu Komutu Sadece Sunucularda Kulanabilirsiniz!"
    );
  let güvenlik = ["Zayıf","Orta","Yüsek"]

  const say = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setImage(
      "https://share.creavite.co/l13aJpiahqDTjyCC.gif"
    )
    .setTitle(message.guild.name)
    .addField(
      " <a:parilti:1003701403501465721>  **__Sunucumuzdaki Üye Sayısı__**",
      `\`\`\`${message.guild.memberCount}\`\`\``
    )
    .addField(
      `<a:parilti:1003701403501465721> **__Sunucumuzdaki Toplam Kanal Ve Kategori Sayısı__**`,
      `  \`\`\`${message.guild.channels.cache.size}\`\`\``
    )
    .addField(
      "<a:parilti:1003701403501465721> **__Çevrimiçi üye sayısı__**",
      `» ${
        message.guild.members.cache.filter(
          m => m.user.presence.status !== "offline"
        ).size
      }`
    )
    .addField(
      "<a:parilti:1003701403501465721> **__Sunucumuzdaki Toplam Çevrimdışı üye sayısı__**",
      `» ${
        message.guild.members.cache.filter(
          m => m.user.presence.status == "offline"
        ).size
      }`
    )
    .addField(
      "<a:parilti:1003701403501465721> **__Sunucumuzdaki Toplam Bot Sayısı__**",
      `» ${message.guild.members.cache.filter(m => m.user.bot).size}`
    )
    .addField(
      `<a:parilti:1003701403501465721> **__Sunucumuzdaki Toplam Emoji Sayısı__**`,
      `» **${message.guild.emojis.cache.size}**`
    )
    .addField(
      `<a:parilti:1003701403501465721> **__Sunucumuzdaki Toplam Rol Sayısı__**`,
      `» **${message.guild.roles.cache.size}**`
    )
    .addField(`<a:parilti:1003701403501465721> **__Sunucumuzdaki Toplam Boost Seviyesi__**`,`**${message.guild.premiumTier}/3**`)
    .addField(
      `<a:parilti:1003701403501465721> **__Sunucumuzdaki Toplam Boost Sayısı__**`,
      `» **${message.guild.premiumSubscriptionCount}**`
    )

  message.channel.send(say);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "gelişmiş-say",
  description: "Say"
};