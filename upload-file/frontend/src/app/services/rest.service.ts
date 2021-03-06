import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileCategoryI } from '../models/file.interface';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  sendPost(body: FormData): Observable<any> {
    return this.http.post('http://localhost:4000/files', body);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:4000/api/uploads');
  }

  getFilesCategories(): Observable<any> {
    return this.http.get('http://localhost:4000/api/uploads/category');
  }

  sendPostFiles(body: any): Observable<any> {
    return this.http.post('http://localhost:4000/api/uploads', body);
  }
}
