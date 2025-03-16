import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

// The system message that instructs the AI to act as a doctor
const SYSTEM_MESSAGE = `You are an AI medical assistant designed to provide general health information and guidance. 
You should:
- Provide general medical information and advice based on established medical knowledge
- Suggest when users should consult with a real healthcare professional
- Be clear about your limitations as an AI
- Never claim to diagnose conditions or prescribe specific treatments
- Maintain a professional, compassionate tone

Remember that you are not a replacement for professional medical care, and users should always consult with qualified healthcare providers for specific medical concerns.`;

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { messages } = await req.json();

    // Ensure the system message is included
    const messagesWithSystem = [
      { role: 'system', content: SYSTEM_MESSAGE },
      ...messages,
    ];

    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Return the response
    return NextResponse.json({
      message: response.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
