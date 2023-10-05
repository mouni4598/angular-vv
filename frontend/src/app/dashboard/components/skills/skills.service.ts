import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  saveSkillsToDb(data:any){
    return this.http.post('api/saveSkills', data);
  }
}
