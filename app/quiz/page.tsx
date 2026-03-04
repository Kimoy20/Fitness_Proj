"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  X,
  Sparkles,
  Flame,
} from "lucide-react";
import quizQuestions from "../../data/quiz-questions.json";

interface QuizAnswers {
  [key: string]: string;
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questions = quizQuestions.questions;

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const getRecommendations = () => {
    return [
      {
        name: "Swimming",
        reason:
          "Perfect for your preference for individual, moderate-intensity indoor activities",
        match: 95,
        icon: "🏊‍♂️",
        caloriesPerHour: 440,
      },
      {
        name: "Rock Climbing",
        reason: "Great for solo sessions with flexible indoor/outdoor options",
        match: 88,
        icon: "🧗‍♀️",
        caloriesPerHour: 560,
      },
      {
        name: "Yoga",
        reason: "Ideal for low-intensity, mindful practice in any environment",
        match: 82,
        icon: "🧘‍♀️",
        caloriesPerHour: 180,
      },
    ];
  };

  if (showResults) {
    const recommendations = getRecommendations();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Your Perfect Sports Match!
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Based on your preferences, here are your top recommendations:
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{rec.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {rec.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${rec.match}%` }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-semibold text-green-600">
                              {rec.match}% Match
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {rec.reason}
                  </p>

                  <div className="bg-orange-50 rounded-lg p-3 mb-4 border border-orange-200">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-semibold text-orange-700">
                        {rec.caloriesPerHour} calories per hour
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/sports/${rec.name.toLowerCase().replace(" ", "-")}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:gap-3"
                  >
                    Learn more about {rec.name}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="group bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Retake Quiz
              </button>
              <Link
                href="/sports"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Browse All Sports
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              Personalized Matching
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Find Your Perfect Sport
          </h1>
          <p className="text-lg text-gray-600">
            Answer a few questions to get personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </Link>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div
            className={`transition-all duration-300 ${isTransitioning ? "opacity-0 transform translate-x-4" : "opacity-100 transform translate-x-0"}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className={`group w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                    currentAnswer === option.value
                      ? "border-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-sm hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                        currentAnswer === option.value
                          ? "border-blue-600 bg-blue-600"
                          : "border-gray-300 group-hover:border-gray-400"
                      }`}
                    >
                      {currentAnswer === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-gray-900 font-medium text-lg">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentQuestion === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-md"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <button
              onClick={nextQuestion}
              disabled={!currentAnswer}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !currentAnswer
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
              }`}
            >
              {currentQuestion === questions.length - 1
                ? "See Results"
                : "Next"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
