const prisma = require("../../database/Prisma");

async function createSession(userId, profileName) {

  prisma.chatbotSession.create({
    data: {
      clientNum: userId,
      profileName
    }
  })
}
module.exports = createSession