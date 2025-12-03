import openai from './openaiClient';

// KritiBodh Solutions knowledge base
const KRITIBODH_CONTEXT = `
You are an AI assistant for KritiBodh Solutions, a leading technology company specializing in AI, IoT, and Data Analytics solutions.

Company Information:
- Name: KritiBodh Solutions
- Services: AI Solutions, IoT Solutions, Data Analytics
- Focus: Innovation, Quality, and Customer Success
- Certifications: SOC 2, ISO 27001, GDPR Compliant

AI Solutions:
- Custom AI Model Development
- Machine Learning Integration
- Natural Language Processing
- Computer Vision Systems
- Predictive Analytics
- AI-Powered Automation
- Chatbot Development

IoT Solutions:
- Smart Device Integration
- Industrial IoT Systems
- Real-time Monitoring
- Predictive Maintenance
- Edge Computing
- Cloud IoT Platform Development
- Sensor Network Design

Data Analytics:
- Big Data Processing
- Business Intelligence Dashboards
- Real-time Analytics
- Data Visualization
- Custom Reporting Systems
- Data Pipeline Development

Contact Information:
- Users can reach out through the Contact page for consultations
- Multiple office locations available
- 24/7 support for enterprise clients

Your role:
1. Answer questions about KritiBodh's services professionally
2. Provide technical insights when appropriate
3. Guide users to relevant services based on their needs
4. Encourage users to contact the team for custom solutions
5. Be helpful, friendly, and knowledgeable

If asked about pricing, capabilities, or specific implementations, provide general information and encourage users to contact the sales team for detailed discussions.
`;

/**
 * Sends a message to the chatbot and gets a streaming response
 * @param {string} userMessage - The user's input message
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @param {Function} onChunk - Callback for each streamed chunk
 */
export async function sendChatMessage(userMessage, conversationHistory = [], onChunk) {
  try {
    const messages = [
      { role: 'system', content: KRITIBODH_CONTEXT },
      ...conversationHistory,
      { role: 'user', content: userMessage }
    ];

    const stream = await openai?.chat?.completions?.create({
      model: 'gpt-4o-mini', // Fast and cost-effective for chatbot
      messages,
      stream: true,
      reasoning_effort: 'minimal', // Fast responses for chatbot
      verbosity: 'medium', // Balanced detail
      max_completion_tokens: 500 // Reasonable length for chat responses
    });

    let fullResponse = '';
    for await (const chunk of stream) {
      const content = chunk?.choices?.[0]?.delta?.content || '';
      if (content) {
        fullResponse += content;
        if (onChunk) {
          onChunk(content);
        }
      }
    }

    return fullResponse;
  } catch (error) {
    console.error('Error in chatbot service:', error);
    throw error;
  }
}

/**
 * Get suggested questions based on current conversation
 * @returns {Array} Array of suggested questions
 */
export function getSuggestedQuestions() {
  return [
    "What AI solutions do you offer?",
    "Tell me about your IoT services",
    "How can I get started with KritiBodh?",
    "What industries do you serve?",
    "Do you offer custom development?"
  ];
}