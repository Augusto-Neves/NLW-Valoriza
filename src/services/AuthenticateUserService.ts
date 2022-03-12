import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne({
            email,
        });

        if (!user) {
            throw new Error('Email or password incorrect');
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error('Email or password incorrect');
        }

        return sign({ email: user.email }, '109f93e98323da22517f761cbb4fd886', {
            subject: user.id,
            expiresIn: '1d',
        });
    }
}

export { AuthenticateUserService };
