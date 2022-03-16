import { Request, Response } from 'express';
import {
    CreateComplimentService,
    IComplimentRequest,
} from '../services/CreateComplimentService';

class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const { message, tag_id, user_receiver }: IComplimentRequest = req.body;
        const { user_id } = req;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            message,
            tag_id,
            user_receiver,
            user_sender: user_id,
        });

        return res.json(compliment);
    }
}

export { CreateComplimentController };
