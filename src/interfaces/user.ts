import { Schema, Document } from "mongoose"

export default interface userInterface extends Document {
    name: string,
    lastName: string,
    mail: string,
    password: string,
    plan: Array<Schema.Types.ObjectId>,
    address: {
        street: string,
        neighborhood: string,
        number: number,
        city: string,
        state: string,
        country: string,
        cep: string
    },
}

