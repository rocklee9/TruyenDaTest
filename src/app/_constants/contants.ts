import {HttpHeaders} from '@angular/common/http';

export const API_URL = 'http://localhost:62003';
export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
