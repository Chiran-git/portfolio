import { defineI18nConfig } from '#imports'
import en from '../i18n/locales/en.json'
import hi from '../i18n/locales/hi.json'
import as from '../i18n/locales/as.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en,
    hi,
    as
  }
}))