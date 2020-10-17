const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['roleinfo', 'ri']
module.exports.run = (client, msg) => {
  const args = msg.content.split(' ')
  let role = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]) || msg.guild.roles.cache.find(role => role.name === args[0])
  if (!role) role = msg.member.roles.highest
  const embed = new MessageEmbed()
    .setColor(role.hexColor)
    .setTitle(`Information about ${role.name}`)
    .addField('Members', role.members.size)
    .addField('Color', role.hexColor)
    .addField('Creation Date', role.createdAt.toDateString())
    .addField('Modifiablity', role.editable.toString())
    .addField('Manage Access', role.managed.toString())
    .addField('ID', role.id)
  msg.channel.send(embed)
}
