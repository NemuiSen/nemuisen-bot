const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')
const nl = require('nekos.life')
const { sfw } = new nl()

module.exports = {
	help: {
		name: "hug",
		desc: "Un abraso UwU"
	},

	async run(client, msg, args) {
		const reply = new MessageEmbed()
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL())
		.setImage((await sfw.hug()).url)
		.setColor(color)

		if (msg.mentions.users.first()) {
			const user = msg.mentions.users.first()
			reply.setTitle(`${msg.author.username} abrazo a ${user.username}`)
		}
		else
			reply.setTitle(`${msg.author.username} abrazo a nadie uwu`)

		msg.channel.send(reply)
	}
}
