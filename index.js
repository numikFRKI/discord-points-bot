const fs = require('fs');
const { Client, Intents, Intents } = require('discord.js');
const { token } = require('./config.json');
const { fieldInlinePredicate } = require('@discordjs/builders/dist/messages/embed/Assertions');
const { Routes } = require('discord-api-types/v9');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commads.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('ready!');
});

client.login(token);