import { i18n } from '@/i18n/config'
import { getRequestConfig } from '@/i18n/server'
import { notFound } from 'next/navigation'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !i18n.locales.includes(locale)) {
    notFound()
  }

  return {
    messages: {
      ...(await import(`@/i18n/messages/${locale}.json`)).default
    },
    locale,
    timeZone: 'UTC'
  }
})