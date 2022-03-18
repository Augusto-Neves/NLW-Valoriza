import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(
            ComplimentsRepositories
        );

        return complimentRepositories.find({
            where: {
                user_receiver: user_id,
            },
            relations: ['userSender', 'userReceiver', 'tag'],
        });
    }
}

export { ListUserReceiveComplimentsService };
