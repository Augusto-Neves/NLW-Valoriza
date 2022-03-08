import { Request, Response } from 'express';
import { CreateUserService, IUserRequest } from '../services/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, admin }: IUserRequest = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            admin,
        });

        return res.json(user);
    }
}

export { CreateUserController };
