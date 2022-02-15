import { Strategy } from 'passport-42';
import { PassportSerializer, PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService)
  {
    super({
        clientID: '42',
    clientSecret: '42',
    callbackURL: "http://127.0.0.1:3000/auth/42/callback",
    // profileFields: {
    //     'username': 'login',
    //     'displayName': 'displayname',
    //     'name.familyName': 'last_name',
    //     'name.givenName': 'first_name',
    //   },
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any) {
    // const user = await this.authService.validateUser(profile);
    return profile;
  }

}
