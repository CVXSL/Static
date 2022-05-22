const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const bot = ("889720019049660479");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats-bot')
        .setDescription('Bot Statistics'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('000001')
        .setTitle('Bot Stats')
        .setThumbnail('https://media.discordapp.net/attachments/901292419352514621/957836213023289404/Static_big.png')
        .setDescription(`**Static**:\n\n> Bot Owner: \`CVXSL#3291\`\n> Bot Version: \`1.0.0\`\n\n> Member Count: \`${bot.users.cache.size}\`\n> Server Count: \`${bot.guilds.cache.size}\``)
        .setFooter('Static ● By CVXSL#3921')
        interaction.reply({ embeds: [embed] })
    }
};