const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')
const nekos = require('nekos.life')
const { sfw } = new nekos()


module.exports = {
	help: {
		name: 'pat',
		desc: 'pat pat pat'
	},

	async run(client, msg, args) {
		const user = msg.mentions.users.first() || msg.author
		const reply = new MessageEmbed()
		.setImage((await sfw.pat()).url)
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL())
		.setColor(color)

		if (msg.mentions.users.first()) {
			const user = msg.mentions.users.first()
			reply.setTitle(`${msg.author.username} acaricio a ${user.username}`)
		}
		else
			reply.setTitle(`${msg.author.username} acaricio a nadie uwu`)

		msg.channel.send(reply)
	}
}
