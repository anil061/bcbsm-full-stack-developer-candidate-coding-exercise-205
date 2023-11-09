import { Component } from '@angular/core';
import { EmailListService } from '../emaillist/emailList.service';

@Component({
  selector: 'app-emaillist',
  templateUrl: './emaillist.component.html',
  styleUrls: ['./emaillist.component.css']
})
export class EmaillistComponent {
  emails: any[] = [];
  columns: any[] = [
    { name: 'From Email' },
    { name: 'Recipient Email' },
    { name: 'Attachment File Name' },
    { name: 'Upload User' },
    { name: 'Upload Date' },
  ];

  constructor(private emailListService: EmailListService) {}

  ngOnInit() {
    this.emailListService.getEmails()
      .subscribe((data: any) => {
        this.emails = data;
      });
  }
}
