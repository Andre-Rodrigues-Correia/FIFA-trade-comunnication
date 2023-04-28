import {Schema, model} from 'mongoose';
import userInterface from "@src/interfaces/user";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        mail: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        plan: {
            type: Array,
            required: true,
            unique: true,
            trim: true,
        },
        address: {
            street: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            neighborhood: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            number: {
                type: Number,
                required: true,
                unique: true,
                trim: true,
            },
            city: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            state: { type: String,
                required: true,
                unique: true,
                trim: true,
            },
            country: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            },
            cep: {
                type: String,
                required: true,
                unique: true,
                trim: true,
            }
        },
    },
    { timestamps: true },
);
export default model<userInterface>('User', UserSchema);