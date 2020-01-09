const manageTranslations = require('react-intl-translations-manager').default;
 
manageTranslations({
  messagesDirectory: 'src/locales/extractedMessages',
  translationsDirectory: 'src/locales/lang/',
  languages: ['en', 'es'], // any language you need
  singleMessagesFile: true
});