import {
  ConflictException,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { User } from 'src/users/entities/user.entity';
import { AuthenticationService } from '../authentication.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;

  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthenticationService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  onModuleInit() {
    const clientId = this.configService.get('GOOGLE_CLIENT_ID');
    const clientSecret = this.configService.get('GOOGLE_CLIENT_SECRET');
    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  async authenticate(token: string) {
    try {
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: token,
      });
      const { email, sub: googleId } = loginTicket.getPayload();
      const user = await this.userModel.findOne({ googleId }).exec();
      if (user) {
        return this.authService.generateTokens(user);
      } else {
        const newUser = new this.userModel({ email, googleId });
        newUser.save();
        return this.authService.generateTokens(newUser);
      }
    } catch (err) {
      const pgUniqueViolationErrorCode = '23505';
      if (err.code === pgUniqueViolationErrorCode) {
        throw new ConflictException();
      }
      throw new UnauthorizedException();
    }
  }
}
