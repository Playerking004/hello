const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = 't!';
const TOKEN = 'ODcyNDAzNDA3MzIxODQ5ODY4.YQpW_A.errd_5bj_FX5yIrY78jZrksEvZk';

var vision = '1.0.1';

bot.on('ready', () => {
    console.log('Der Bot ist nun Einsatzbereit!')

    bot.user.setActivity('t!help', { type: 'PLAYING'}).catch(console.error)
})

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){

        case 'help':
            message.channel.send('**Hier sind meine Befehle**!\nMit **t!help** kannst du schauen ob ich Aktiv, oder Inaktiv bin!\nMit **t!clear** kannst du Nachrichten von 2-100 **löschen**!')
        break;

        case 'ping':
            message.channel.send('Pong!')
        break;

        case 'Ping':
            message.channel.send('Pong!')
        break;

        case 'clear':
            if(!args[1]) return message.channel.send('**Fehler, bitte versuchen sie es erneut!**')
            message.channel.bulkDelete(args[1])
        break;

        case 'Clear':
            if(!args[1]) return message.channel.send('**Fehler, bitte versuchen sie es erneut!**')
            message.channel.bulkDelete(args[1])
        break;
    }
})

bot.login(TOKEN)