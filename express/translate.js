require('dotenv').config();
const { TranslationServiceClient } = require('@google-cloud/translate');

// Instantiates a client

const translationClient = new TranslationServiceClient({
    'projectId': process.env.GCP_PROJECT_ID,
    'credentials': {
        'client_email': process.env.GCP_EMAIL,
        'private_key': process.env.GCP_KEY
    }
});

const projectId = process.env.GCP_PROJECT_ID;
const location = 'global';

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
		return response.translations[0].translatedText;
	} catch (error) {
		console.error(error.details);
		return false;
	}
}

module.exports = translateToGerman;
