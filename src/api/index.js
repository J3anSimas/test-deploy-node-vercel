require('dotenv').config()

const { twiml } = require('twilio')
const express = require('express')
const PORT = process.env.PORT || 3000
const server = express()


server.post('/api', (request, response) => {
  const responseTwilio = twiml.MessagingResponse
  const msg = responseTwilio.message()
  msg.body = 'Voce acabou de enviar uma mensagem'
  console.log(msg.prototype);
})


server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})