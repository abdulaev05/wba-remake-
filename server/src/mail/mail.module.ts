import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: String(process.env.EMAIL_HOST),
          port: Number(process.env.EMAIL_PORT),
          secure: Boolean(process.env.EMAIL_SECURE),
          auth: {
            user: String(process.env.EMAIL_USER),
            pass: String(process.env.EMAIL_PASS),
          },
        },

        defaults: {
          to: 'abdulaev.01.upwork@gmail.com',
          from: 'WBA <abdurahman.abdulaev.01@mail.ru>',
        },
        // template: {
        //   dir: join(__dirname, './templates'),
        //   adapter: new EjsAdapter({ inlineCssEnabled: true }),
        //   options: {
        //     strict: false,
        //   },
        // },
      }),
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
