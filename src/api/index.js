require('dotenv').config()

const { twiml } = require('twilio')
const express = require('express')
const PORT = process.env.PORT || 3000
const server = express()


server.post('/api', (request, response) => {
  const responseTwilio = twiml.MessagingResponse
  console.log(responseTwilio.prototype)
  response.send(`Você acabou de enviar a mensagem`)
})


server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})