const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Bu komutu kullanabilmek için \Yönetici\ yetkisine sahip olmalısın.```")
      .setColor(0x36393F);
 
    message.channel.send(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen atılacak kişiyi etiketleyiniz!")
        .setColor(0x36393F)
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 
  const embed = new Discord.MessageEmbed()
    .setColor(0x36393F)
    .setDescription(`${u} Adlı şahsın sunucudan atılmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem onaylandı! ${u} adlı şahıs sunucudan atıldı!`
        );
 
        message.guild.member(u).kick();
      }
    });
  });
};
 
exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};