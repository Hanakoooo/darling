const Discord = require('discord.js');
const client = new Discord.Client();
const { ReactionPages } = require('reconlx');

module.exports = {
    name: 'help',
    description: 'Shows bot commands and stats!',
    execute(message, args) {

        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const embed4 = new Discord.MessageEmbed()
        .setTitle('₊ 𓂃 ##Table of Contents!')
        .setDescription('To move pages, either react to this embed or type the number! The message expires 30 seconds.')
        .addField('**Page 1:**', 'Table of Contents')
        .addField('**Page 2:**', 'Commands')
        .addField('**Page 5:**', 'Bot Stats')
        .setThumbnail(client.displayAvatarURL)
        .setColor('#2f3136')

        const embed = new Discord.MessageEmbed()
        .setTitle('₊ 𓂃 ##Commands!')
        .setDescription('Misc. Commands!')
        .addField('d!setup', 'Set up the ticket system!')
        .addField('d!rename', "Rename a ticket!")
        .addField('d!close', "Close a ticket!")
        .setThumbnail(client.displayAvatarURL)
        .setColor('#2f3136')

        const embed3 = new Discord.MessageEmbed()
        .setTitle('₊ 𓂃 ##Stats!')
        .addField('- Ping', `${Date.now() - message.createdTimestamp}ms`, true)
        .addField('- Uptime', `${days}d ${hours}h ${minutes}m ${seconds}s`, true)
        .addField('- Developer', 'Hanako#0007')
        .setThumbnail(client.displayAvatarURL)
        .setColor('#2f3136')


const pages = [embed4, embed, embed3];
const textPageChange = true;
const emojis = ["⏪", "⏩"];
const time = 60000;
ReactionPages(message, pages, textPageChange, emojis, time);





    }
}