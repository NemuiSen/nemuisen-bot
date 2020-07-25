const fs = require('fs')
const { Client, Collection } = require('discord.js')
const { prefix, token } = require('./config.json')

const client = new Client()
client.commands = new Collection()


fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err)

	const commandFiles = files.filter(file => file.endsWith('js'))
	if (commandFiles.length <= 0) return console.log('No se encontro ningun comando')
	console.log(`Comandos disponibles: ${commandFiles.length}`)

	commandFiles.forEach((f, i) => {
		const command = require(`./commands/${f}`)
		console.log(`${i+1}: ${command.help.name} (${f}) Cargado!`)
		client.commands.set(command.help.name, command)
	})
})


client.on("ready", () => {
	client.user.setActivity('Nothing', { type: 'STREAMING' })
	console.log(`\n${client.user.username} probable esta despierto`)
})


client.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return

	const args = msg.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLocaleLowerCase();


	if (!client.commands.get(command)) return

	//console.log(command)
	//msg.delete().catch(_=>{})

	try {
		client.commands.get(command).run(msg, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
})

client.login(token)
