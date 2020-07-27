const Discord = require('discord.js')
const { color } = require('../config.json')
const nl = require('nekos.life')
const { sfw, nsfw } = new nl()


module.exports = {
	help: {
		name: "kitsune",
		desc: "Este comando retorna una imagen de una Kitsunemimi"
	},

	async run (client, msg, args) {
		const reply = new Discord.MessageEmbed()
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL())
		.setImage((await (msg.channel.nsfw ? nsfw.eroKitsune() : sfw.foxGirl())).url)
		.setTitle("Kitsune Owo")
		.setColor(color)
		msg.channel.send(reply)
	}
}
