import { NestMiddleware } from '@nestjs/common';
import { Request , Response } from 'express';
import { JwtService } from '@nestjs/jwt';

export class AuthenticationMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        // request cookies
        const cookies = req.cookies;
        // check if the cookies has the token
        if (!cookies.access_token) {
            // if not return unauthorized
            res.status(401).send('Unauthorized');
            return;
        }
        // if the token is present continue to the next middleware
        const access_token = cookies.access_token;
        const jwtService = new JwtService();
        const payload = jwtService.verify(access_token, {secret: 'secret'});
        if (!payload) {
            res.status(401).send('Unauthorized');
            return;
        }
        // if the token is valid add to request object
        //@ignoreTypescript
        req.body.user = payload;
        next();
    }
    }