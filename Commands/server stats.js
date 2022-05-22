const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats-server')
        .setDescription('Server Statistics'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('000001')
        .setTitle('Server Stats')
        .setThumbnail('https://media.discordapp.net/attachments/901292419352514621/957836213023289404/Static_big.png')
        .setDescription(`**${interaction.guild.name}**:\n\n> Server Creation Date: \`${interaction.guild.createdAt}\`\n\n> Member Count: \`${interaction.guild.memberCount}\`\n> Emoji Count: \`${interaction.guild.emojis.cache.size}\`\n> Role Count: \`${interaction.guild.roles.cache.size}\``)
        .setFooter('Static ● By CVXSL#3921')
        interaction.reply({ embeds: [embed] })
    }
};