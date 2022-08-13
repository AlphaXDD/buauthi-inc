
const Discord = require('discord.js');
const db = require('quick.db');
const emoji = {
   'brigade': '<:staff:1007411170765971606>',
   'partner': '<:partner:1007411222586601613> ',
   'events': '<:hypesquad:1007414853364883628>',
   'brillance': '<:brilliance:1007413689420353606>',
   'bravery': '<:bravery:1007411340312322098>',
   'balance': '<:balance:1007413016893075599>',
   'hunter_gold': '<:Bughunter_lvl2:1007412620686528532>',
   'hunter': '<:BugHunter:1007412595847856129>',
   'support': '<:Early_Supporter:1007411271500582912>',
   'developers': '<:botdev:1007411250558402723>',
   'nitro': '<:nitro:1007411434860327074>',
   'boost': '<:boost1:1007415833888309409>',
   'bot': '<:bot:1007412269975617616> ',
   'onaylıbot':'<:verifiedbot:1007414044589822132> '
};

   exports.run =  async (client ,message, args) => {
    let brigade = [];
    let partner = [];
    let events = [];
    let brillance = [];
    let bravery = [];
    let balance = [];
    let hunter_gold = [];
    let hunter = [];
    let support = [];
    let developers = [];
    let nitro = [];
    let onaylı =[];
    message.guild.members.cache.forEach(async(m) => {
        const flags = m.user.flags || await m.user.fetchFlags();
        if(flags.toArray().includes('DISCORD_EMPLOYEE')) brigade.push(m.id);
        if(flags.toArray().includes('DISCORD_PARTNER')) partner.push(m.id);
        if(flags.toArray().includes('HYPESQUAD_EVENTS')) events.push(m.id);
        if(flags.toArray().includes('HOUSE_BRILLIANCE')) brillance.push(m.id);
        if(flags.toArray().includes('HOUSE_BRAVERY')) bravery.push(m.id);
        if(flags.toArray().includes('VERIFIED_BOT')) onaylı.push(m.id);
        if(flags.toArray().includes('HOUSE_BALANCE')) balance.push(m.id);
        if(flags.toArray().includes('BUGHUNTER_LEVEL_2')) hunter_gold.push(m.id);
        if(flags.toArray().includes('BUGHUNTER_LEVEL_1')) hunter.push(m.id);
        if(flags.toArray().includes('EARLY_SUPPORTER')) support.push(m.id);
        if(flags.toArray().includes('VERIFIED_DEVELOPER')) developers.push(m.id);
        let xxx = m.user.avatarURL({ dynamic: true });
        if(xxx.includes('gif')) nitro.push(m.id);
    });
//Elminstêr#0007
    let description = `
     > ${emoji.brigade} Discord Staff **${brigade.length}**
   > ${emoji.partner} Discord Partner **${partner.length}**
   > ${emoji.events} Hypesquad Events **${events.length}**
   > ${emoji.brillance} Brillance **${brillance.length}**
   > ${emoji.bravery} Bravery **${bravery.length}**
   > ${emoji.balance} Balance **${balance.length}**
   > ${emoji.hunter_gold} BugHunter Gold **${hunter_gold.length}**
   > ${emoji.hunter} BugHunter **${hunter.length}**
   > ${emoji.support} Early Supporter **${support.length}**
   > ${emoji.developers} Verified Developer **${developers.length}**
   > ${emoji.nitro} Nitro **${nitro.length}** (Tam Olarak Göstermez)
   > ${emoji.boost} Server Booster **${message.guild.members.cache.filter(m => m.premiumSinceTimestamp).size}** (Tam Olarak Göstermez)
   > ${emoji.bot} Bot **${message.guild.members.cache.filter(m => m.user.bot).size}**
   > ${emoji.onaylıbot} Verified Bot **${onaylı.length}**`;
//Elminstêr#0007
    const embed = new Discord.MessageEmbed()
    .setColor('#E70000')
    .setDescription(description);
    message.channel.send(embed);
    //Elminstêr#0007
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rozetler","rozet-list"], 
    permLevel: 0,
};
// Elminstêr#0007
exports.help = {
    name: 'rozet-say',
    usage: 'kullanımı',
    description: 'açıklama',
};
//Elminstêr#0007