const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("rol-log")
    .setDescription("Bir kullanıcı rol silerse belirtilen loga atar!")
    .setDefaultMemberPermissions(Discord.PermissionFlagsBits.Administrator)
    .addChannelOption(o=> o.setName("kanal").setDescription("Hangi kanalı ayarlamak istiyorsun?").setRequired(true)),
    run: async (client, interaction) => {
const channel = interaction.options.getChannel("kanal")
db.set(`rollog_${interaction.guild.id}`, channel.id)
return interaction.reply("Kanal başarıyla <#"+channel.id+"> olarak ayarlandı.")
}
 };
