const { PrismaClient } = require('../../prisma/generated/client')
const fs = require('fs')
const path = require('path')

export default async (req, res) => {
  const prisma = new PrismaClient()
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (e) {
    path.join(process.cwd(), 'prisma/generated/client/index.js')

    res.status(200).send(e.stack)
  }
}
