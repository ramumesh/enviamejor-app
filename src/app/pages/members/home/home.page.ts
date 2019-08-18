import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/utils/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  pages = [
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/home/profile',
      icon: 'contact'
    },
    {
      title: 'Transactions',
      url: '/home/transactions',
      icon: 'analytics'
    },
    {
      title: 'Settings',
      url: '/home/settings',
      icon: 'settings'
    },
    {
      title: 'About Us',
      url: '/home/about',
      icon: 'information-circle'
    },
    {
      title: 'Logout',
      icon: 'log-out'
    }
  ];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  onLogout() {
    alert('Are you sure you want to log out');
    this.userService.setLoggedOut();
    this.router.navigate(['login']);
  }
}
