const user = require("../models/user.js")


module.exports = {
  isUser : name => user.isUser(name),
  getID : name => user.getID(name)
}