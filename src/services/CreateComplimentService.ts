import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';

export interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({
        message,
        tag_id,
        user_receiver,
        user_sender,
    }: IComplimentRequest) {
        const complimentRepository = getCustomRepository(
            ComplimentsRepositories
        );
        const usersRepositories = getCustomRepository(UsersRepositories);

        const userReceiverExists = await usersRepositories.findOne(
            user_receiver
        );

        if (user_sender === user_receiver) {
            throw new Error('You cannot send a compliment to yourself');
        }

        if (!userReceiverExists) {
            throw new Error('User receiver does not exists');
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message,
        });

        await complimentRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };
