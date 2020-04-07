require('dotenv').config()
const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

const projectId = 'nomad-1586159363676'
const location = 'global'




async function translateToGerman(word) {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [word],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode: 'en',
    targetLanguageCode: 'de',
  };

  try {
    // Run request
    const [response] = await translationClient.translateText(request);
    console.log(`inside translation function: ${response.translations[0].translatedText}`)
	return response.translations[0].translatedText
  } catch (error) {
    console.error(error.details);
  }
}

module.exports = translateToGerman