const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports =  run = async(user,pw,res) => {
   try {
    const result = await prisma.user.create({

        data:{
            username : user,
            password : pw
        }
        
    })
    res.json(result)
   } catch (error) {
    res.status(400).json(error)
   }
}

