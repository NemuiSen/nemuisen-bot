const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')
const nekos = require('nekos.life')
const nekosClient = new nekos()


module.exports = {
	help: {
		name: "waifus",
		desc: "Una waifu, ¿por que no?"
	},	

	async run (client, msg, args) {
		const sfw = [
			nekosClient.sfw.foxGirl(),
			nekosClient.sfw.kemonomimi(),
			nekosClient.sfw.nekoGif(),
			nekosClient.sfw.neko(),
		]
	
		const nsfw = [
			nekosClient.nsfw.eroKemonomimi(),
			nekosClient.nsfw.kemonomimi(),
			nekosClient.nsfw.eroNeko(),
			nekosClient.nsfw.eroKitsune(),
		]

		const image = (
			await (msg.channel.nsfw ?
				nsfw[Math.floor(Math.random() * nsfw.length)]:
				sfw[Math.floor(Math.random() * sfw.length)]
			)
		).url

		const reply = new MessageEmbed()
		.setTitle('Monas Shinas')
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL())
		.setImage(image)
		.setColor(color)

		msg.channel.send(reply)
	}
}
