import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenResponse } from 'src/models/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class TwilioService {

  BASE_URL = 'http://localhost:3001/api/conversation/'

  constructor(private http: HttpClient) { }

  generateToken(identity: string) {
    console.log(identity);
    return this.http.post<TokenResponse>(`${this.BASE_URL}`, {identity})
  }
}
