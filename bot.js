//requires
const { Client, MessageEmbed } = require('discord.js')
const user = require('./controllers/user.js')
// const auth = require('./auth.json')

//Vars
const bot = new Client()


bot.on('ready', () => {
  console.log('Connected')
})
	

bot.on('message', message => {
  //console.log('bot : ' + message.content.toLowerCase())
  //check if a user is type
    if(user.isUser(message)){
      if(!user.isMessage(message)){
        // const msgEmbed = new MessageEmbed()
        //   .setTitle('')
        //   .setColor('RANDOM')
        //   .setDescription(user.getName(message))
        message.channel.send(user.getName(message))
        // message.channel.send(msgEmbed)
      }
      else if(user.isMessage(message)){
        // const msgEmbed = new MessageEmbed()
        //   .setTitle(user.getMessage(message))
        //   .setColor('RANDOM')
        //   .setDescription(user.getName(message))

        message.channel.send(user.getName(message) + ' ' + user.getMessage(message))
        // message.channel.send(msgEmbed)
      }
    }

})


// bot.login(auth.token)
bot.login(process.env.BOT_TOKEN)















															