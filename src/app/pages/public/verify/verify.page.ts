import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../../services/api/api.service';
import { ToastService } from '../../../services/utils/toast.service';
import { UserService } from '../../../services/utils/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss']
})
export class VerifyPage implements OnInit {
  private refToken: string;
  private refCode: string;
  helper = new JwtHelperService();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: AuthService,
    private toastService: ToastService,
    private cookieService: CookieService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.refToken = params['refToken'];
      const decodedToken = this.helper.decodeToken(this.refToken);
      this.cookieService.set('token', this.refToken);
      this.userService.setPhoneNumber(decodedToken.phoneNumber);
    });
  }

  async onSubmit(form) {
    console.log(form.value.refCode);
    const result = await this.api.validateReferenceCode({
      referenceCode: form.value.refCode,
      referenceToken: this.refToken
    });
    if (result['internalMessage'] === 'REFERENCE_CODE_VALIDATED_SUCCESSFULLY') {
      this.userService.setVerified();
      this.router.navigate(['register']);
    } else {
      this.toastService.presentToast(result['userMessage']);
    }
  }
}
