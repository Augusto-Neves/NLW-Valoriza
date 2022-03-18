import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { instanceToPlain } from 'class-transformer';
class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(
            ComplimentsRepositories
        );

        const complimentsReceived = complimentRepositories.find({
            where: {
                user_receiver: user_id,
            },
            relations: ['userSender', 'userReceiver', 'tag'],
        });

        return instanceToPlain(complimentsReceived);
    }
}

export { ListUserReceiveComplimentsService };
