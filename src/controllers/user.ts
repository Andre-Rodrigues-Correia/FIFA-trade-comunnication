import { Router, Request, Response } from 'express';


const findAll =  (request: Request, response: Response) => {
    return response.status(200).json({ 'message': 'ok' });
}

export { findAll };