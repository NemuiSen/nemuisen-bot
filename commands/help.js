const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')
const fs = require('fs')

module.exports = {
	help: {
		name: 'help',
		desc: 'Muestra una lista con los comandos disponibles'
	},

	run(client, msg, args) {

		let content = ''
		client.commands.each(commad => content += `\`${commad.help.name}\`: ${commad.help.desc}\n`)

		const reply = new MessageEmbed()
		.setTitle('Help')
		.setDescription(content)
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL())
		.setColor(color)

		msg.channel.send(reply)
	}
}
