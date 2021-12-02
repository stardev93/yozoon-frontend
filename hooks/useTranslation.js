import { useContext } from 'react';

import {
  LanguageContext,
  defaultLocale,
  locales,
} from '../contexts/LanguageContext';
import { LangStrings } from '../lib/strings';

export default function useTranslation() {

  // const ShippingForm = ({ checkoutInfo, newShipingInfo }) => {
  const [locale, setLocale] = useContext(LanguageContext);

  const t = (key) => {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }
    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || '';
  }

  return { t, locale, setLocale, locales };
}
