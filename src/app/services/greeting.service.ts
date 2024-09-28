import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
userName: string = 'Matias';
pass: string = '123456';
email: string = 'email@email.com';
  constructor() { }
}
