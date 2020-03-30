import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [MailerModule.forRoot({
    transport: {
        host: 'smtp.office365.com',
        port: 587,
        tls: {
          rejectUnauthorized: false
        },
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'flosure-insurance@outlook.com', // generated ethereal user
          pass: '12345678qwerty' // generated ethereal password
        },
      },
    defaults: {
      from:'"nest-modules" <modules@nestjs.com>',
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
