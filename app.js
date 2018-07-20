var tmi = require('tmi.js');

// Set up options
var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "mytesttwitchbot",
		password: "oauth:cc1oajy2z8dlnuwz41v7vdu8k3q6yl"
	},
	channels: ["AysianPersuasion"] // long story
};

// Connect to IRC
var client = new tmi.client(options);
client.connect();


// Events

client.on('chat', function(channel, user, message, self) {
	if (message === "hey") {
		client.action("AysianPersuasion", "hi, how are you today?");
	}

	client.action("AysianPersuasion", user['display-name'] + " welcome!");
});

client.on('connected', function(address, port) {
	console.log('address: ' + address + " Port " + port);
	//client.action("AysianPersuasion", "heller?");
})