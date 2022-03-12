import { Request, Response } from 'express';
import {
    IAuthenticateRequest,
    AuthenticateUserService,
} from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password }: IAuthenticateRequest = req.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password,
        });

        return res.json(token);
    }
}

export { AuthenticateUserController };
