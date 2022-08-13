const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<a:red:1003707773038628934>"
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:red:1003707773038628934>"
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<a:red:1003707773038628934>"
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<a:red:1003707773038628934>"
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<a:red:1003707773038628934>"
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<a:red:1003707773038628934>"
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<a:red:1003707773038628934>"
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<a:red:1003707773038628934>"
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:red:1003707773038628934>"
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<a:red:1003707773038628934>"
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:onay:1003707774842191923>"
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:red:1003707773038628934>"
     const embed = new Discord.MessageEmbed()
  .setColor(0x36393F)
    .setDescription(` ${x} Yönetici \n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet \n${x5} Kanalları Yönet \n${x6} Üyeleri At \n${x7} Üyeleri Yasakla \n${x8} Mesajları Yönet \n${x9} Kullanıcı Adlarını Yönet \n${x10} Emojileri Yönet \n${x11} Webhook'ları Yönet`);
 msg.channel.send(embed);

  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};