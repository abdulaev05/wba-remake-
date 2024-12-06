import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto, AddressDto } from './dto/sendmail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail({
    firstname,
    lastname,
    email,
    phone,
    address,
    description,
  }: SendMailDto) {
    const username = `Имя: ${firstname || ''}; Фамилия: ${lastname || ''}`;
    const { city, street, home } = address;

    const sendText = `
    ${username},\n
    Email: ${email},\n
    Телефон: ${phone || ''},\n

      Адрес:
    Город: ${city || ''},\n
    Улица: ${street || ''}, \n
    Дом: ${home || ''}, \n

    Описание: ${description || ''}
    
    
    `;

    await this.mailerService.sendMail({
      subject: 'Заказ',
      text: sendText,

      // template: './orderCall',
      // context: {
      //   username,
      //   email,
      //   phoneNumber,
      //   address,
      // },
    });
  }
}
