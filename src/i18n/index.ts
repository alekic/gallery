import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { de_DE, en_US } from './translations';

const i18n = new I18n({
  'en-US': en_US,
  'de-DE': de_DE
});

i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default i18n;
