import { Model, DataType } from "sequelize";
import { sequelize } from "../instaces/mysql";
export interface UserInstaces extends Model{
    id: number,
    name: string,
    age: number
}