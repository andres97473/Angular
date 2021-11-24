import { Component, OnInit } from '@angular/core';
import { IMAGES_ROUTES } from '@data/constants/routes/images.routes';
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
export class LoginComponent implements OnInit {
  public $imagesRoutes = IMAGES_ROUTES;
  public backgroundStyle;
  public socialIcons = [faFacebookSquare, faTwitterSquare, faInstagramSquare];

  constructor() {
    this.backgroundStyle = {
      backgroundImage: `url(${this.$imagesRoutes.BACKGROUND_LOGIN})`,
    };
  }

  ngOnInit(): void {}
}
