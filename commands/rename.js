const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'rename',
    description: 'Rename a ticket',
    execute(message, args) {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Oops! You need `MANAGE_CHANNELS` permissions to run this command!')

        const newName = args.join(" ")

        message.channel.setName(newName)
  .catch(console.error);


    }
}