//requires
const { Client, MessageEmbed } = require('discord.js');
var auth = require('./auth.json');
var getInsult = require('insults');
var quote = require('inspirational-quotes')
var user = require("./controllers/user.js")

//Vars
var bot = new Client()

bot.on('ready', () => {
  console.log("Connected");
})
	

bot.on('message', message => {
  //@ a user
    if(user.isUser(message.content.toLowerCase())){
      message.channel.send(user.getID(message.content))
    }
});


bot.login(auth.token)


















															