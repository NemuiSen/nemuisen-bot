const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')


module.exports = {
	help: {
		name: 'base',
		desc: 'base'
	},

	run(client, msg, args) {
		const reply = new MessageEmbed()
		.setTitle('Base')
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL())
		.setColor(color)

		msg.channel.send(reply)
	}
}
