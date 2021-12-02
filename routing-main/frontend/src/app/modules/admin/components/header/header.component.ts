import { AuthService } from './../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  emailLogin!: string | null;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.emailLogin = this.auth.getEmail();
    // console.log(this.emailLogin);
  }
  logout(): void {
    this.auth.logout();
  }
}
