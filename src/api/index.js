require('dotenv').config()

const fastify = require('fastify')
const PORT = process.env.PORT || 3000
const server = fastify({
  logger: true
})

server.get('/api', (request, response) => {
  return 'Funcionando'
})


server.listen({ port: PORT }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server running on ${address}`)
})