import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from './email.service';
import { Email  } from './email';
import { File } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  attachmentFile: File | undefined;

  email: Email = new Email();
  constructor(private emailService: EmailService, private router: Router) {
  }

  onFileSelected(event: any) {
    const file = event.target.files[0]; 
    this.attachmentFile = file;
  }
  sendEmail() {
    this.email.fromEmail = 'kumar724.tech@gmail.com';
    this.email.recipientEmail = 'anilsai061@gmail.com';
    this.email.attachmentFileName = 'Sample Subject';
    this.email.message = 'Hello, this is a sample email message.';
    this.attachmentFile = this.attachmentFile;
    
      this.emailService.sendEmail(this.email, this.attachmentFile).subscribe(result => {
        if (result) {
          // Show a success message
          this.router.navigate(['/email-list']); // Navigate to the email list page
        } else {
          // Show an error message
        }
      });
    }

  
}