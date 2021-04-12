import { getJSON } from '../utils/utils';
import { CookieConsentModal } from './modal';

export const cookieStorage = {
  setItem: (name: string, value: string, daysToExpire: number = 1) => {
    const d = new Date();
    d.setTime(d.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires;
  },

  getItem: (key: string) => {
    const cookies: { [key: string]: any } = document.cookie
      .split(';')
      .map((cookie) => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

    return cookies[key];
  },
};

const getVendors = async (url: string) => {
  const res = await getJSON(url);
  return res.vendors;
};

export const init = async (window: Window & typeof globalThis, url: string) => {
  const consentName = 'gdpr_consent';

  const vendors = await getVendors(url);

  const cookieConsentController = new CookieConsentModal(
    window,
    window.document.body,
    vendors,
    {
      cName: consentName,
      cExpire: 1,
    }
  );

  if (!cookieStorage.getItem(consentName)) {
    getVendors(url);
    cookieConsentController.openModal();
  }
};
