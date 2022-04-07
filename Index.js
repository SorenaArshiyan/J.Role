const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const path = require('path');
const dotenv = require('dotenv');
const {Intents} = require("discord.js");
dotenv.config()

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on('ready', () => {
    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'Commands'),
        mongoUri: process.env.mongoUri,
        typeScript: false,
    })
        .setDefaultPrefix('')
});

client.login(process.env.TOKEN).then(r => {});