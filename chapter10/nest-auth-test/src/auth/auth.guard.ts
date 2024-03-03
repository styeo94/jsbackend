import { CanActivate, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LoginGaurd implements CanActivate {
    constructor(private authService: AuthService) { }

    async canActivate(context: any): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        console.log('가드 첫 진입');
        if (request.cookies['login']) {
            console.log('쿠카가 있다???');
            return true;
        }
        console.log('쿠키가 없다는 겄!');
        if (!request.body.email || !request.body.password) {
            console.log('아이디 패스 없음!');
            return false;
        }
        console.log('아이디 패스가 있으니, Valid 체크');
        const user = await this.authService.validateUser(
            request.body.email,
            request.body.password,
        );

        if (!user) {
            console.log('사용자 정보가 없으면, 바로 아웃');
            return false;
        }

        console.log('사용자 정보가 있으면, 통과');
        request.user = user;
        return true;
    }
}