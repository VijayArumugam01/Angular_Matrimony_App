import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilesUrl = 'assets/profiles.json'; // Adjust the path as needed

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<any> {
    return this.http.get<any>(this.profilesUrl);
  }
}
