import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}
export function ensureAuthenticate(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //receber o token
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    //verificar se o token é valido
    const [, token] = authToken.split(' ');

    try {
        const { sub } = verify(
            token,
            '109f93e98323da22517f761cbb4fd886'
        ) as IPayload;

        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).end();
    }

    //Recuperar informações do usuário pelo token
}
