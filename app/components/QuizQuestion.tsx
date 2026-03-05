import { Question } from '../quizData';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (personalityType: string) => void;
}

export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold" style={{ color: '#6b4423' }}>
          {question.question}
        </h2>

        <div className="flex flex-col gap-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswer(answer.personalityType)}
              className="rounded-2xl p-6 text-left transition-all hover:scale-102 hover:shadow-lg"
              style={{
                backgroundColor: '#f5e6d3',
                border: '2px solid #d4a574',
                color: '#6b4423',
              }}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{answer.emoji}</span>
                <span className="text-lg">{answer.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
