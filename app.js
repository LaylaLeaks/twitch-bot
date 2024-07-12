const Owner    = 'Your-Twitch-Channel-Name';
const Bot      = 'Your-Twitch-Bot-Channel-Name';
const BotOAuth = 'Your-Bot-Token-Here'
const Channels = [Owner];

var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: Bot,
		password: BotOAuth
	},
	channels: Channels
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(adress, port){
    console.log("Adresse: " + adress + " Port: " + port);
	client.say(Owner, "Bot Active!"); // What the bot outputs in chat when it is online.
});

var commands = require('./commands');
client.on('chat', function(channel, user, message, _self) { 
    if(_self) return;


    commands.run(client, channel, user, message, _self);
});

// If you have any issues please message me on Discord or Twitter and I will respond as quickly as possible!
// Twitter: @Real_Layla_
// Discord: layla.06