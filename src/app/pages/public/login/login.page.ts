import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/utils/user.service';
import { AuthService } from '../../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  formattedPhoneNumber: string;
  isReadOnly: boolean;
  constructor(private router: Router, private authService: AuthService, private userService: UserService) {}

  ngOnInit() {
    let phoneNumber = this.userService.getPhoneNumber();
    if (phoneNumber) {
      this.isReadOnly = true;
      this.formattedPhoneNumber =
        '* (***) *** ' + this.userService.getPhoneNumber().substring(this.userService.getPhoneNumber().length - 4);
    } else {
      this.isReadOnly = false;
    }
  }
  async login(form) {
    let phoneNumber = this.userService.getPhoneNumber();
    let password = form.value.password;
    const result = await this.authService.loginUser({ phoneNumber: phoneNumber, pin: password });
    if (result['internalMessage'] === 'LOGIN_SUCCESSFULL') {
      this.userService.setLoggedIn();
      this.router.navigate(['home']);
    }
  }
}
