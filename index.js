const update = "Beta 2.0.0"
//const client.shard.id = shard
global.update = update;
//const updateInfo = "• use .inbox for change logs!"

const fs = require('fs');
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');
// Require the necessary discord.js classes
const {
    Client,
    Intents,
    Collection
} = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

// Loading commands from the commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Loading the token from .env file
const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env['TOKEN'];

const TEST_GUILD_ID = process.env['TEST_GUILD_ID'];

const commands = [];

// Creating a collection for commands in client
client.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

// When the client is ready, this only runs once
client.once('ready', () => {
    console.log('Ready!');
    // Registering the commands in the client
    const CLIENT_ID = client.user.id;
    const rest = new REST({
        version: '9'
    }).setToken(TOKEN);
    (async () => {
        try {
            if (!TEST_GUILD_ID) {
                await rest.put(
                    Routes.applicationCommands(CLIENT_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands globally!');
            } else {
                await rest.put(
                    Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands for development guild!');
            }
        } catch (error) {
            if (error) console.error(error);
        }
    })();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

//const updateInfo = " "
// THIS IS THE STATUS
client.on("ready", () => {
console.log(`Logged in as ${client.user.tag} :)\nUpdated to ${update}`);
})
client.on("ready", () => {
   // Status list
   const activities = [
    ` `,
    `In ${client.guilds.cache.size} Servers!`,
    `With ${client.users.cache.size} Users!`,
    `${update}`
//    `SHARD: ${data.shardId}`
];
    
  // run every 10 seconds    
  setInterval(() => {
    // generate random number between 1 and list length.
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];
    client.user.setActivity(newActivity);
  }, 10000);
});

// Login to Discord with your bot's token
//client.login(TOKEN);
client.login(process.env.token);