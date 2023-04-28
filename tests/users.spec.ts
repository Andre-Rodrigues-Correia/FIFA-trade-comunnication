// @ts-ignore
import request from 'supertest'

import app from '../src/server';
import { connectDB } from '../src/database/connection';


beforeAll(async () =>{
    await connectDB();
})

describe('test route /users', () => {

    test('should create country in database with sucess', async () => {
        return request(app).get('/users').then((res) => {
            expect(res.status).toEqual(200)
            expect(res.body.message).toEqual('ok');
        })
    })
})