const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats-user')
        .setDescription('User Statistics'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('000001')
        .setTitle('User Stats')
        .setDescription(`Server Join Date: ${moment.utc(member.joinedAt).format('DD/MM/YY')}`)
        interaction.reply({ embeds: [embed] })
    }
};