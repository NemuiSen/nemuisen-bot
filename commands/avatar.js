const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')


module.exports = {
	help: {
		name: "avatar",
		desc: "Muestra el avatar de la persona mencionada o el tuyo en caso de que no se mencione a alguien"
	},

	run(msg, args) {
		const user = msg.mentions.users.first() || msg.author
		const title = [
			"Este es el avatar de ",
			"Buena elección de avatar ",
			"Como se representa ",
		]

		const reply = new MessageEmbed()
		.setTitle(title[Math.floor(Math.random() * title.length)] + user.username)
		.setFooter(`Comando usado por ${user.username}`, msg.author.displayAvatarURL())
		.setImage(user.displayAvatarURL())
		.setColor(color)
	
		msg.channel.send(reply)
	}
}
