import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class SMTPmailService implements MailService {
  sendEmail(): string {
    return 'SMTP mail!';
  }
}
