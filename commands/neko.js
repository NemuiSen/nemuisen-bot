const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')
const nl = require('nekos.life')
const { sfw, nsfw } = new nl()

module.exports = {
	help: {
		name: 'neko',
		desc: 'Este comando retorna una imagen de una Nekomimi'
	},

	async run (msg, args) {
		const reply = new MessageEmbed()
		.setTitle('Neko!!!! ^w^')
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL)
		.setImage((await (msg.channel.nsfw ? nsfw.eroNeko() : sfw.neko())).url)
		.setColor(color)
		msg.channel.send(reply)
	}
}
