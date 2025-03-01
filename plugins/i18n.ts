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
  },
  allowComposition: true,
  preserveDirectiveContent: true,
  fallbackRoot: true,
  missingWarn: false,
  fallbackWarn: false,
  inheritLocale: true,
  compositionOnlyLocale: false,
  preprocessMessageToString: false,
  silentFallbackWarn: true,
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      },
      decimal: {
        style: 'decimal'
      },
      percent: {
        style: 'percent'
      }
    },
    hi: {
      currency: {
        style: 'currency',
        currency: 'INR'
      },
      decimal: {
        style: 'decimal'
      },
      percent: {
        style: 'percent'
      }
    },
    as: {
      currency: {
        style: 'currency',
        currency: 'INR'
      },
      decimal: {
        style: 'decimal'
      },
      percent: {
        style: 'percent'
      }
    }
  }
}))