require('dotenv').config()

const { twiml } = require('twilio')
const express = require('express')
const PORT = process.env.PORT || 3000
const server = express()


server.post('/api', (request, response) => {
  const responseTwilio = new twiml.MessagingResponse()
  const t = responseTwilio.message('Voce acabou de enviar uma msg')
  console.log("teste");
  response.send(responseTwilio.toString())
})


server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})