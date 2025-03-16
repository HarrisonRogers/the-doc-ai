# AI Doctor Consultation

A Next.js application that uses OpenAI's GPT-4o model to simulate a medical assistant that can provide general health information and guidance.

## Features

- Chat interface for interacting with the AI medical assistant
- Real-time responses using OpenAI's GPT-4o model
- Responsive design that works on desktop and mobile
- Dark mode support

## Getting Started

### Prerequisites

- Node.js 18.x or later
- An OpenAI API key

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd doctor-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your OpenAI API key:

   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Type your health-related question in the input field at the bottom of the chat interface.
2. Press "Send" or hit Enter to submit your question.
3. The AI will respond with relevant medical information and guidance.

## Important Disclaimer

This AI assistant provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
