const Discord = require('discord.js');
const client = new Discord.Client();
const enmap = require('enmap');

module.exports = {
    name: 'setup',
    description: 'set up the ticket system',
    async execute(message, args) {


        let channel = message.mentions.channels.first();
        if(!channel) return message.reply("Please mention the channel where you want the panel to be sent!")

        const embed = await channel.send (new Discord.MessageEmbed()
        .setTitle("Open a ticket!")
        .setDescription("Hi open a ticket to mass with me and follow the intructions in it")
        .setFooter("React below!")
        .setColor("#2f3136"))

        embed.react('⛩️')
        message.delete()
  }
}