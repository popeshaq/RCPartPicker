const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  hashPassword: {
    password: String,
    salt: String
  },
  builds: Array,
  isLoggedIn: Boolean
})

const partSchema = new mongoose.Schema({
  name: String,
  type: String,
  data: Object,
  photoUrl: String,
  prices: {
    type: [{
    host: String,
    url: String,
    price: String
   }],
   required: true
  }
})

const buildSchema = new mongoose.Schema({
  name: String,
  owner: String,
  components: Array
})

module.exports = {
  User: mongoose.model('User', userSchema),
  Part: mongoose.model('Part', partSchema),
  Build: mongoose.model('Build', buildSchema)

}