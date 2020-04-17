const db = require('../db.js')


module.exports = {
  isUser: (message) => {
    if(message.content.includes(' ')){
      const firstWord = message.content.slice(0,message.content.indexOf(' ')).toLowerCase()
      if(firstWord in db){
        return true
      }
      return false
    }
    else if(!message.content.includes(' ')){
      const name = message.content.toLowerCase()
      if(name in db){
        return true
      }
      return false
    } 
  },
  getName : (message) => {
    const name = message.content.toLowerCase()
    if(!message.content.includes(' ')){
      if(name in db){
        return db[name].id
      }
    }else if(message.content.includes(' ')){
      const firstWord = message.content.slice(0,message.content.indexOf(' ')).toLowerCase()
      if(firstWord in db){
        return db[firstWord].id
      }
    }
  },
  isMessage: (message) => {
    if(message.content.includes(' ')){
      return true
    }
    return false
  },
  getMessage: (message) => {
    return message.content.slice(message.content.indexOf(' '),message.content.length)
  }
}