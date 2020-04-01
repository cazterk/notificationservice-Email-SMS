import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';


export interface IDetialsDTO {
  name: string;
  phone: string;
  email: string;
  company: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  sendMail() {
    console.log("Send mail Function");
    return this.appService.sendMail();
  }

  @Post('registration')
  async sendRegistrationMessage(@Body() details: IDetialsDTO, @Res() res: Response) {
    return await this.appService.sendRegistrationMessage(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });

  }

  @Post('quotation-approved')
  async QoutationApprovedEmail(@Body() details: IDetialsDTO, @Res() res: Response) {
    return await this.appService.sendQuotationApprovedMessage(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });
  }

  @Post('SMS')
  sendSMS(){
  console.log("Send SMS Function");
  return this.appService.sendSMS();
}

}

