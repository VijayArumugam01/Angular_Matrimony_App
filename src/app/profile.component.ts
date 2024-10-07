import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  //styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profiles: any[] = [];
  currentIndex = 0;

  constructor(
    private profileService: ProfileService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

  nextProfile() {
    this.currentIndex = (this.currentIndex + 1) % this.profiles.length;
  }

  markInterested() {
    this.snackBar.open('Interested', '', { duration: 2000 });
    this.nextProfile();
  }

  markNotInterested() {
    this.snackBar.open('Not Interested', '', { duration: 2000 });
    this.nextProfile();
  }

  shortlist() {
    this.snackBar.open('Shortlisted', '', { duration: 2000 });
    this.nextProfile();
  }
}
