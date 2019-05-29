import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static BASE_URL = '/api';

  constructor() {
  }
}
