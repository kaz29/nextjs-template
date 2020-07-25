import NextI18Next from 'next-i18next'

const languages = [
  'ja_jp',
  'en_us',
]

const i18nInstance = new NextI18Next({
  defaultLanguage: languages[0],
  otherLanguages: languages.slice(1),
  browserLanguageDetection: true,
  // serverLanguageDetection: true,
})

export function t(sentence: string, options: any = {}): string {
  return i18nInstance.i18n.t ? i18nInstance.i18n.t(sentence, options) : sentence
}

export default i18nInstance
