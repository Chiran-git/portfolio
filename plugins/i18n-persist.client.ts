import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ $i18n }) => {
  // Get stored locale from cookie
  const savedLocale = useCookie('i18n_redirected').value

  if (savedLocale && savedLocale !== $i18n.locale.value) {
    // Set the locale from cookie
    $i18n.setLocale(savedLocale)
  }
})