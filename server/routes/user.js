async function user(fastify,options){
    const { prisma, httpErrors, isDemiAuth } = fastify;
    fastify.route({
        method:"GET",
        path:"/api/v1/userInfo",
        onRequest:isDemiAuth,
        handler:getUserInfo
    })

    async function getUserInfo(req,res){
        const { uid } = req.user || { };
        console.log("this is the uid ",uid);
        try {
            if(!uid) return {isAuth:false,user:{}}
            const user = await prisma.user.findFirst({
                where:{
                    id:uid
                }
            })
            console.log("this is the user ",user);
            if(!user) return {isAuth:false,user:{}}
            return {isAuth:true,user}
        } catch (error) {
            console.log(error);
            return httpErrors.unauthorized()
        } 
    }

}

module.exports = user;