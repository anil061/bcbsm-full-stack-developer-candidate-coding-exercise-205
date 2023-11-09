import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  //public apiBaseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  sendEmail(email: Email, attachmentFile: File): Observable<any> {
    console.log("SendEmail method in EmailService");
    const formData = new FormData();
    formData.append('attachmentFile', attachmentFile);
    formData.append('email', JSON.stringify(email));
    return this.http.post("http://localhost:8080/api/sendEmail", formData);
  }
}