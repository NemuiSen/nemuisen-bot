require('dotenv').config()
const fs = require('fs')
const { Client, Collection } = require('discord.js')
const { prefix } = require('./config.json')

const client = new Client()
client.commands = new Collection()


//Searching for commands (files)
fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err)

	//Only .js files
	const commandFiles = files.filter(file => file.endsWith('js'))
	if (commandFiles.length <= 0) return console.log('No se encontro ningun comando')

	//shows what commands are available
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
	if (!msg.content.toLocaleLowerCase().startsWith(prefix) || msg.author.bot) return

	const args = msg.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLocaleLowerCase();

	if (!client.commands.get(command)) return

	//console.log(command)
	//msg.delete().catch(_=>{})

	try {
		client.commands.get(command).run(client, msg, args)
	} catch (error) {
		console.error(error)
		msg.reply('there was an error trying to execute that command!')
	}
})


client.login(
	process.env.token
)
