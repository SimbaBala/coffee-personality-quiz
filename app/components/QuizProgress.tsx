interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgress({ currentQuestion, totalQuestions }: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 p-4" style={{ backgroundColor: '#fff8e7' }}>
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-center text-sm font-semibold" style={{ color: '#8b6f47' }}>
          Question {currentQuestion} of {totalQuestions}
        </p>
        <div className="h-2 w-full overflow-hidden rounded-full" style={{ backgroundColor: '#f5e6d3' }}>
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundColor: '#d4a574',
            }}
          />
        </div>
      </div>
    </div>
  );
}
