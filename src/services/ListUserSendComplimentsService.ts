import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { instanceToPlain } from 'class-transformer';
class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(
            ComplimentsRepositories
        );

        const complimentsSended = complimentRepositories.find({
            where: {
                user_sender: user_id,
            },
            relations: ['userSender', 'userReceiver', 'tag'],
        });

        return instanceToPlain(complimentsSended);
    }
}

export { ListUserSendComplimentsService };
