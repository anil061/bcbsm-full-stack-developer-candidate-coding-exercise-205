import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmailListService {
  constructor(private http: HttpClient) {}

  getEmails(): Observable<any> {
    return this.http.get('/api/get-emails');
  }
}