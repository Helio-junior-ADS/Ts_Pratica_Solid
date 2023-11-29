import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailtrapMailProvider implements IMailProvider {
  private transport: Mail;

  constructor(){
    this.transport = nodemailer.createTransport({
      host:'sandbox.smtp.mailtrap.io',
      port:2525,
      auth:{
        user:'8cd2703b1e1815',
        pass: '3d3907345cf0bc'
      }
    });
  }
  async sendMail(message: IMessage):Promise<void> {
    await this.transport.sendMail({
      to:{
        name:message.to.name,
        address:message.to.email
      },
      from:{
        name:message.from.name,
        address:message.from.email
      },
      subject:message.subject,
      html:message.body
    });
  }
}