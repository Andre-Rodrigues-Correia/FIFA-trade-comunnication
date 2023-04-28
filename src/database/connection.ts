import * as mongoose from "mongoose";
import { logger } from "../../src/utils/logger";

const getDatabaseUrl = (): string =>{

    if (process.env.ENVIRONMENT == 'DEV'){
        return process.env.DATABASE_DEV || ''
    }

    return process.env.DATABASE_PROD || ''
}

const connectDB = async () => {

    const DATABASE_URL = getDatabaseUrl()

    try {
        const connect = await mongoose.connect(DATABASE_URL);
        logger.info(`conexão com o banco de dados em ${process.env.ENVIRONMENT} realizada com sucesso!`)

    } catch (error: any) {
        logger.error(`Erro na aplicação: ${error.message}`)
    }

};

export {connectDB};