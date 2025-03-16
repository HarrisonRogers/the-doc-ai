import ChatInterface from './components/ChatInterface';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI Doctor Consultation
      </h1>
      <p className="text-center mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        Chat with our AI medical assistant for general health information and
        guidance. Remember that this is not a replacement for professional
        medical advice.
      </p>

      <ChatInterface />

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>
          Disclaimer: This AI assistant provides general information only and is
          not a substitute for professional medical advice, diagnosis, or
          treatment. Always seek the advice of your physician or other qualified
          health provider with any questions you may have regarding a medical
          condition.
        </p>
      </footer>
    </div>
  );
}
