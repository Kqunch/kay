const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function (user, userID, channelID, message, evt) {
    if(message.content (0, 1) == '!') {
    	 args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
