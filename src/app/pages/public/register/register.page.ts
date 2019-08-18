import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/utils/user.service';
import { ToastService } from '../../../services/utils/toast.service';
import { AuthService } from '../../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  formattedPhoneNumber: string;
  constructor(
    private userService: UserService,
    private toastService: ToastService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formattedPhoneNumber =
      '*-***-*** ' + this.userService.getPhoneNumber().substring(this.userService.getPhoneNumber().length - 4);
  }
  async register(form) {
    let phoneNumber = this.userService.getPhoneNumber();
    let password = form.value.password;
    let confirm = form.value.confirm;
    if (password !== confirm) {
      return this.toastService.presentToast('Passwords does not match. Please renter again.');
    }
    const result = await this.authService.registerUser({ phoneNumber: phoneNumber, pin: password });
    if (result['internalMessage'] === 'USER_REGISTRATION_SUCCESSFUL') {
      this.userService.setRegistered();
      this.router.navigate(['login']);
    }
  }
}
