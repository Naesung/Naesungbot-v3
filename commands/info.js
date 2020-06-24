const { MessageEmbed } = require('discord.js')
module.exports.aliases = ['info', 'i']
module.exports.run = (client, msg) => {
	let infoembed = new MessageEmbed()
		.setTitle(`Information of Naesungbot`)
		.setColor(`#1e90ff`)
		.addField("Date", "20200630", true)
		.addField("User", `${client.users.cache.size}`, true)
		.addField("Server", `${client.guilds.cache.size}`, true)
		.addField("Number of User", `${client.users.cache.filter(a => a.bot === false).size}`, true)
		.addField("Number of Bot", `${client.users.cache.filter(a => a.bot === true).size}`, true)
		.setTimestamp();
	msg.channel.send(infoembed);
}
