const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['guildedit', 'ge']
module.exports.run = (client, msg) => {
    if (!msg.member.hasPermission('MANAGE_GUILD')) {
        msg.reply('You have no permission!')
        return
    }
    const guild = stringhandler.argsParse('��� ����', command)[0]
    msg.guild.edit({
        name: guild
    })
}
