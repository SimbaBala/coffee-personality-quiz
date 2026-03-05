"use client";

import { useState } from 'react';
import Welcome from './components/Welcome';
import QuizQuestion from './components/QuizQuestion';
import QuizProgress from './components/QuizProgress';
import Results from './components/Results';
import { questions, PersonalityType } from './quizData';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(-1);
  const [userAnswers, setUserAnswers] = useState<PersonalityType[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleStart = () => {
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (personalityType: PersonalityType) => {
    const newAnswers = [...userAnswers, personalityType];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(-1);
    setUserAnswers([]);
    setIsComplete(false);
  };

  // Calculate personality counts for results
  const calculatePersonalityCounts = () => {
    const counts = new Map<PersonalityType, number>();
    userAnswers.forEach((answer) => {
      counts.set(answer, (counts.get(answer) || 0) + 1);
    });
    return counts;
  };

  // Render appropriate screen based on state
  if (isComplete) {
    return <Results personalityCounts={calculatePersonalityCounts()} onReset={handleReset} />;
  }

  if (currentQuestionIndex === -1) {
    return <Welcome onStart={handleStart} />;
  }

  return (
    <>
      <QuizProgress currentQuestion={currentQuestionIndex + 1} totalQuestions={questions.length} />
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </>
  );
}

