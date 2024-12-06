import { Controller, Body, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailDto } from './dto/sendmail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  sendMail(@Body() body: SendMailDto) {
    const data = {
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      phone: body.phone,
      address: body.address,
      description: body.description,
    };

    return this.mailService.sendMail(data);
  }
}
