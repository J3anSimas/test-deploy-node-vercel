require('dotenv').config()
const fs = require('fs')
const { twiml } = require('twilio')
const express = require('express')
const PORT = process.env.PORT || 3000
const server = express()


server.post('/api', (request, response) => {
  const data = JSON.stringify(request.body)

  // fs.writeFileSync('request.txt', request.body.toString())
  console.log(request.params);
  const responseTwilio = new twiml.MessagingResponse()
  const t = responseTwilio.message('Voce acabou de enviar uma msg')
  console.log("teste");
  response.send(responseTwilio.toString())
})


server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})