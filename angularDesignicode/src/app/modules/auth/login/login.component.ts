import { Component } from '@angular/core';
import { IMAGES_ROUTES } from '@data/constants/routes/images.routes';
import { CONST_LOGIN_PAGE } from '../../../data/constants/pages/login/login-validate.const';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public $imagesRoutes = IMAGES_ROUTES;
  public backgroundStyle;
  public socialIcons = [faFacebookSquare, faTwitterSquare, faInstagramSquare];

  constructor() {
    this.backgroundStyle = {
      backgroundImage: `url(${this.$imagesRoutes.BACKGROUND_LOGIN})`,
    };
  }
}
