const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json')
const nl = require('nekos.life')
const { sfw } = new nl()


module.exports = {
	help: {
		name: 'action',
		desc: 'Pasa alguna accion como argumento, algunas acciones disponibles son: abrazo, abrazo_apacionado, idiota, ...'
	},

	async run(client, msg, args) {
		const user = msg.mentions.users.first() || msg.author
		let actions = new Map([
			['abrazo', 			  [sfw.hug,    `${msg.author.username} abrazo a ${user.username}`]],
			['abrazo_apacionado', [sfw.cuddle, `${msg.author.username} abrazo apacionadamente a ${user.username}`]],
			['idiota', 			  [sfw.baka,   `${msg.author.username} le dijo idiota a ${user.username}`]],
			['beso', 			  [sfw.kiss,   `${msg.author.username} beso a ${user.username}`]],
			['caricia', 		  [sfw.pat,    `${msg.author.username} le dio una caricia a ${user.username}`]],
		])

		if (!actions.has(args[0]))
		{
			msg.reply('Acción no reconosida')
			return
		}

		const reply = new MessageEmbed()
		.setTitle(actions.get(args[0])[1])
		.setImage((await actions.get(args[0])[0]()).url)
		.setFooter(`Comando usado por ${msg.author.username}`, msg.author.displayAvatarURL())
		.setColor(color)

		msg.channel.send(reply)
	}
}
