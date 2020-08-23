require('dotenv').config()
const fs = require('fs')
const { Client, Collection } = require('discord.js')
const { prefix } = require('./config.json')

const client = new Client()
client.commands = new Collection()


//Buscando los comandos (archivos)
let dir = './commands/'
fs.readdir(dir, (err, files) => {
	if (err) console.log(err)

	//Solo archivos .js
	const commandFiles = files.filter(file => file.endsWith('js'))
	if (commandFiles.length <= 0) return console.log('No se encontro ningun comando')

	//Mostrar cuales comandos estan disponibles
	console.log(`Comandos disponibles: ${commandFiles.length}`)
	commandFiles.forEach((f, i) => {
		const command = require(`${dir}${f}`)
		console.log(`${i+1}: ${command.help.name} (${f}) Cargado!`)
		client.commands.set(command.help.name, command)
	})
})


client.on("ready", () => {
	client.user.setActivity('Nothing', { type: 'LISTENING' })
	console.log(`\n${client.user.username} esta escuchando por algun comando\n`)
})


client.on('message', msg => {
	if (!msg.content.toLocaleLowerCase().startsWith(prefix) || msg.author.bot) return

	const args = msg.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLocaleLowerCase();

	if (!client.commands.get(command))
	{
		msg.reply('Este comando no existe');
		return
	}

	//console.log(command)
	//msg.delete().catch(_=>{})

	try {
		client.commands.get(command).run(client, msg, args)
	} catch (error) {
		console.error(error)
		msg.reply('there was an error trying to execute that command!')
	}
})

client.login(process.env.token)
