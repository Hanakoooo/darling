const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});

const fs = require('fs');

const prefix = 'd!'

require('dotenv').config();
var token = process.env.token;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
const command = require(`./commands/${file}`);
client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Made by Hanako#0007 <3", {
    type: "PLAYING"
  });
  
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if(command === 'setup') {
        client.commands.get('setup').execute(message, args)
    } else if(command === 'close') {
        client.commands.get('close').execute(message, args)
    } else if(command === 'rename') {
        client.commands.get('rename').execute(message, args)
    } else if(command === 'help') {
        client.commands.get('help').execute(message, args)
    } 

});

//---- TICKETS :D ------

client.on('messageReactionAdd', (reaction, user) => {


    if(reaction.emoji.name === '⛩️') { 

        user.send('Hi please follow intructions and remember: no nsfw or toxic servers')

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL']
                }
            ],
            type : 'text' 
        }).then(async channel => {
            channel.send(`<@${user.id}> Welcome!`, new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Welcome To Your Ticket!')
            .setDescription('To close this ticket, say `d!close`')
            .setTimestamp()
            .setFooter(`Ticket for ${user.username}#${user.discriminator}`)
            )
        })
    }
});


 
//---- WELCOME DM ------

client.on('guildMemberAdd', member => {
    member.send("Hi, welcome to the server, please read rules, be nice, be kind, no slurs and dont be toxic");
 });





client.login(token);