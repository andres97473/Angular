import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { IMAGES_ROUTES } from '../routes/images.routes';
import { IField } from '../../interfaces/forms/ifield.metadata';
import { ValidationsService } from '../../../shared/services/validations/validations.service';

export const LOGIN_CONST = {
  ICONS: [faFacebookSquare, faTwitterSquare, faInstagramSquare],
  LOGO: IMAGES_ROUTES.LOGO,
  BACKGROUND_STYLE: {
    backgroundImage: `url(${IMAGES_ROUTES.BACKGROUND_LOGIN})`,
  },
};
