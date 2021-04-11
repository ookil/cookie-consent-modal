import './styles/main.scss';

import * as CookieConsent from './models/index';

window.onload = () => {
  CookieConsent.init(window);
};
