import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

class ListTagsService {
    async execute() {
        const tagRepositories = getCustomRepository(TagsRepositories);

        return tagRepositories.find();
    }
}

export { ListTagsService };
