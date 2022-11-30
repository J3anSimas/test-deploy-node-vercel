require('dotenv').config()

const { twiml } = require('twilio')
const fastify = require('fastify')
const PORT = process.env.PORT || 3000
const server = fastify({
  logger: true
})

server.post('/api', (request, _) => {
  const response = twiml.MessagingResponse
  console.log(response.message())

})


server.listen({ port: PORT }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server running on ${address}`)
})