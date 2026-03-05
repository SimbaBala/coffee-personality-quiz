import { PersonalityType, coffeePairings } from '../quizData';

interface ResultsProps {
  personalityCounts: Map<PersonalityType, number>;
  onReset: () => void;
}

export default function Results({ personalityCounts, onReset }: ResultsProps) {
  // Calculate percentages and sort by highest first
  const totalAnswers = 6;
  const personalityResults = Array.from(personalityCounts.entries())
    .map(([personality, count]) => ({
      personality,
      count,
      percentage: Math.round((count / totalAnswers) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // Add personalities with 0% if they weren't selected
  const allPersonalities: PersonalityType[] = [
    "Bold Adventurer",
    "Sweet Enthusiast",
    "Social Butterfly",
    "Night Owl",
    "Indulgent Treat",
  ];

  const completeResults = allPersonalities.map((personality) => {
    const existing = personalityResults.find((r) => r.personality === personality);
    return existing || { personality, count: 0, percentage: 0 };
  }).sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="min-h-screen p-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-center text-4xl font-bold" style={{ color: '#6b4423' }}>
          Your Coffee Personality
        </h1>
        <p className="mb-8 text-center text-xl" style={{ color: '#8b6f47' }}>
          Here's your unique blend of coffee personalities
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {completeResults.map(({ personality, percentage }) => (
            <div
              key={personality}
              className="rounded-xl px-4 py-2"
              style={{
                backgroundColor: percentage > 0 ? '#d4a574' : '#f5e6d3',
                color: '#6b4423',
              }}
            >
              <span className="font-semibold">{personality}:</span> {percentage}%
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          {completeResults
            .filter((r) => r.percentage > 0)
            .map(({ personality, percentage }) => {
              const pairing = coffeePairings.find((p) => p.personality === personality);
              if (!pairing) return null;

              return (
                <div
                  key={personality}
                  className="rounded-2xl p-6 shadow-lg"
                  style={{
                    backgroundColor: '#f5e6d3',
                    border: '2px solid #d4a574',
                  }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-2xl font-bold" style={{ color: '#6b4423' }}>
                      {personality} ({percentage}%)
                    </h3>
                  </div>
                  <h4 className="mb-2 text-xl font-semibold" style={{ color: '#8b6f47' }}>
                    ☕ {pairing.drink}
                  </h4>
                  <p className="mb-2 italic" style={{ color: '#8b6f47' }}>
                    "{pairing.tagline}"
                  </p>
                  <p style={{ color: '#6b4423' }}>{pairing.description}</p>
                </div>
              );
            })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onReset}
            className="rounded-2xl px-8 py-3 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#d4a574',
              color: '#6b4423',
            }}
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
}
