import './styles/main.scss';

import * as CookieConsent from './models/index';

const url = 'https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json';

window.onload = () => {
  CookieConsent.init(window, url);
};
