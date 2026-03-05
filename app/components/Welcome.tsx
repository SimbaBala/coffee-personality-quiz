interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="mb-6 text-5xl font-bold" style={{ color: '#6b4423' }}>
          ☕ What's Your Coffee Personality?
        </h1>
        <p className="mb-8 text-xl" style={{ color: '#8b6f47' }}>
          Discover your coffee personality and find your perfect drink at Basecamp Coffee
        </p>
        <button
          onClick={onStart}
          className="rounded-2xl px-10 py-4 text-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: '#d4a574',
            color: '#6b4423',
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
