import OpenAI from 'openai';
import 'dotenv/config';

/**
 * Initializes the OpenAI client with the API key from environment variables.
 * @returns {OpenAI} Configured OpenAI client instance.
 */
const openai = new OpenAI({
  api_key: process.env['OPENAI_API_KEY'],
  dangerouslyAllowBrowser: true, // Required for client-side usage in React
});

export default openai;