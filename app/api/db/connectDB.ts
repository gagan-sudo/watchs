import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB as string)
        console.log(`Mongo connected: ${conn.connection.host}`)

    }catch(error: any){
        console.log('error connection to mongoDB',error.message)
        process.exit(1)
    }
}

