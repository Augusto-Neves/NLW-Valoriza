import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';
import { instanceToPlain } from 'class-transformer';

class ListTagsService {
    async execute() {
        const tagRepositories = getCustomRepository(TagsRepositories);

        const tags = tagRepositories.find();

        return instanceToPlain(tags);
    }
}

export { ListTagsService };
