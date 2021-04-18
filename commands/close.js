const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'close',
    description: 'close the ticket',
    execute(message, args) {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Oops! You need `MANAGE_CHANNELS` permissions to run this command!')

        message.channel.delete();


    }
}