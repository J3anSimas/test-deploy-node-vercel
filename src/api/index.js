require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const autToken = process.env.TWILIO_AUTH_TOKEN
const bodyParser = require('body-parser')
const twilioClient = require('twilio')(accountSid, authToken)
const express = require('express')
const createSession = require('../services/createSession/createSession')
const getOpenSession = require('../services/getOpenSession/getOpenSession')

const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/api', (request, response) => {
  const userId = request.body.WaId
  const profileName = request.body.ProfileName
  const session = getOpenSession(userId)
  console.log(request.body);
  const responseTwilio = new twiml.MessagingResponse()
  const t = responseTwilio.message('Voce acabou de enviar uma msg')
  console.log("teste");
  response.send(responseTwilio.toString())
})

server.listen(PORT, () => {
  console.log('Listening')
})
