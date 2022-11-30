require('dotenv').config()
const bodyParser = require('body-parser')
const { twiml } = require('twilio')
const express = require('express')
const PORT = process.env.PORT || 3000
const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.post('/api', (request, response) => {
  const data = JSON.stringify(request.body)

  // fs.writeFileSync('request.txt', request.body.toString())
  console.log(request.body);
  const responseTwilio = new twiml.MessagingResponse()
  const t = responseTwilio.message('Voce acabou de enviar uma msg')
  console.log("teste");
  response.send(responseTwilio.toString())
})


server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})