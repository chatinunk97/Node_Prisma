const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports =  run = async(id,res) => {
   try {
    const result = await prisma.user.findUnique({
        where:{
            id: +id
        }
    })
    res.json(result)
   } catch (error) {
    res.status(400).json(error)
   }
}

