const user = require("../models/user.js")


module.exports = {
  isUser : name => user.isUser(name),
  getName : name => user.getName(name),
  isMessage: message => user.isMessage(message),
  getMessage: message => user.getMessage(message)
}