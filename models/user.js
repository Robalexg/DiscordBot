const db = require('../db.js')


module.exports = {
  isUser: (user) => {

    if(user in db){
      return true
    }
    return false
  },
  getID : (user) => {
    if(user in db){
      return db[user].id
    }
  } 
}