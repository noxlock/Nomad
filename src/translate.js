require('dotenv').config()
const projectId = 'nomad-1586159363676'
const location = 'global'

const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

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

    for (const translation of response.translations) {
      console.log(`Translation: ${translation.translatedText}`);
    }
  } catch (error) {
    console.error(error.details);
  }
}

translateToGerman('me');

