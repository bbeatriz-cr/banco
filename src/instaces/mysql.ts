import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

//importando uma constante que será nossa conexão
export const sequelize = new Sequelize(
    /*Aqui vamos receber os parametros para o nosso banco de dados,
    precisamos falar para o typescript que vamos receber uma string*/
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }
)