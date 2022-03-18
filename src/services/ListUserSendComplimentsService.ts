import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(
            ComplimentsRepositories
        );

        return complimentRepositories.find({
            where: {
                user_sender: user_id,
            },
            relations: ['userSender', 'userReceiver', 'tag'],
        });
    }
}

export { ListUserSendComplimentsService };
