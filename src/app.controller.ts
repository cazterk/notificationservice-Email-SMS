import { Controller, Get, Post, Body, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { ApiProperty } from '@nestjs/swagger';
import { FileInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';


export class IDetialsDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  filePath: string[];

  @ApiProperty()
  fileName: string;

  @ApiProperty()
  subject: string;



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


  //post registration email
  @Post('registration')
  async sendRegistrationEmail(@Body() details: IDetialsDTO, @Res() res: Response) {
    return await this.appService.sendRegistrationEmail(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });


  }


  //post approved email
  @Post('quotationapproved')

  @UseInterceptors(FileFieldsInterceptor([{ name: 'files', maxCount: 3 },]))
  async sendApprovedQuotation(@Body() details: IDetialsDTO, @UploadedFile() files, @Res() res: Response) {
    console.log(files);
    return await this.appService.sendApprovedQuotation(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });

  }


  //post draft email
  @Post('draftedquotation')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files', maxCount: 3 },]))
  async sendQuotationDraft(@Body() details: IDetialsDTO, @UploadedFile() files, @Res() res: Response) {
    console.log(files);
    return await this.appService.sendQuotationDraft(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });

  }


  //post policy email
  @Post('policy')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files', maxCount: 20 },]))
  async sendPolicyEmail(@Body() details: IDetialsDTO, @UploadedFile() files, @Res() res: Response) {
    console.log(files);
    return await this.appService.sendPolicyEmail(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });

  }


  //post receipt email
  @Post('receipt')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files', maxCount: 3 },]))
  async sendReceipts(@Body() details: IDetialsDTO, @UploadedFile() files, @Res() res: Response) {
    console.log(files);
    return await this.appService.sendReceipts(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });

  }
  @Post('paymenetplan')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files', maxCount: 3 },]))
  async sendPaymentPlan(@Body() details: IDetialsDTO, @UploadedFile() files, @Res() res: Response) {
    console.log(files);
    return await this.appService.sendPaymentPlan(details).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.send(err);
      });

  }


  // post sms
  @Post('sms')
  sendSMS() {
    console.log("Send SMS Function");
    return this.appService.sendSMS();

  }

}

