const prisma = require("../../database/Prisma")
const createSession = require("../createSession/createSession")

async function getOpenSession(userId, userProfile) {
  const session = await prisma.chatbotSession.findFirst({ where: { clientNum: userId } })
  if (!session) {
    return await createSession(userId, userProfile)
  }
  return session
}

module.exports = geOpenSession