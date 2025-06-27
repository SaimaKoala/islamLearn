import React, { useState, useEffect } from 'react';
import { BookOpen, Star, Trophy, CheckCircle, XCircle, ArrowRight, Home, User, Award, Play } from 'lucide-react';

const IslamicLearningApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [userProgress, setUserProgress] = useState({
    totalXP: 0,
    streak: 3,
    completedLessons: 0,
    level: 1
  });
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [lessonComplete, setLessonComplete] = useState(false);

  const lessons = [
    {
      title: "Five Pillars of Islam",
      description: "Learn about the fundamental practices",
      xp: 50,
      completed: true,
      questions: [
        {
          type: "multiple-choice",
          question: "What is the first pillar of Islam?",
          options: ["Shahada (Declaration of Faith)", "Salah (Prayer)", "Zakat (Charity)", "Hajj (Pilgrimage)"],
          correct: 0,
          explanation: "Shahada is the declaration of faith and the first pillar of Islam."
        },
        {
          type: "multiple-choice",
          question: "How many times do Muslims pray daily?",
          options: ["3 times", "4 times", "5 times", "6 times"],
          correct: 2,
          explanation: "Muslims perform Salah (prayer) five times daily at prescribed times."
        },
        {
          type: "true-false",
          question: "Zakat is giving charity to those in need",
          options: ["True", "False"],
          correct: 0,
          explanation: "Zakat is indeed the pillar of Islam involving charitable giving to help those in need."
        }
      ]
    },
    {
      title: "Prophets in Islam",
      description: "Understanding the messengers of Allah",
      xp: 60,
      completed: false,
      questions: [
        {
          type: "multiple-choice",
          question: "Who is considered the final messenger in Islam?",
          options: ["Moses (Musa)", "Jesus (Isa)", "Muhammad", "Abraham (Ibrahim)"],
          correct: 2,
          explanation: "Prophet Muhammad is considered the final messenger in Islam."
        },
        {
          type: "multiple-choice",
          question: "Which prophet is known for building the Kaaba?",
          options: ["Abraham (Ibrahim)", "Moses (Musa)", "Noah (Nuh)", "David (Dawud)"],
          correct: 0,
          explanation: "Prophet Abraham (Ibrahim) along with his son Ishmael built the Kaaba."
        }
      ]
    },
    {
      title: "Islamic Calendar & Festivals",
      description: "Learn about important Islamic dates",
      xp: 45,
      completed: false,
      questions: [
        {
          type: "multiple-choice",
          question: "What is the holy month of fasting called?",
          options: ["Shawwal", "Ramadan", "Dhul-Hijjah", "Muharram"],
          correct: 1,
          explanation: "Ramadan is the ninth month of the Islamic calendar and the month of fasting."
        },
        {
          type: "true-false",
          question: "Eid al-Fitr celebrates the end of Ramadan",
          options: ["True", "False"],
          correct: 0,
          explanation: "Eid al-Fitr is indeed the celebration marking the end of the fasting month of Ramadan."
        }
      ]
    },
    {
      title: "Holy Quran",
      description: "Understanding Islam's holy book",
      xp: 55,
      completed: false,
      questions: [
        {
          type: "multiple-choice",
          question: "In which language was the Quran originally revealed?",
          options: ["Hebrew", "Aramaic", "Arabic", "Persian"],
          correct: 2,
          explanation: "The Quran was revealed in Arabic to Prophet Muhammad."
        }
      ]
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < lessons[currentLesson].questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setLessonComplete(true);
        setUserProgress(prev => ({
          ...prev,
          totalXP: prev.totalXP + lessons[currentLesson].xp,
          completedLessons: prev.completedLessons + 1,
          level: Math.floor((prev.totalXP + lessons[currentLesson].xp) / 100) + 1
        }));
      }
    }, 2000);
  };

  const startLesson = (lessonIndex) => {
    setCurrentLesson(lessonIndex);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setLessonComplete(false);
    setCurrentView('lesson');
  };

  const continueLearning = () => {
    setLessonComplete(false);
    setCurrentView('home');
  };

  const renderHome = () => (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header Stats */}
      <div className="mb-8 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Assalamu Alaikum!</h2>
            <p className="opacity-90">Continue your Islamic studies journey</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5" />
              <span className="text-xl font-bold">{userProgress.totalXP} XP</span>
            </div>
            <div className="text-sm opacity-90">Level {userProgress.level}</div>
          </div>
        </div>
        
        <div className="mt-4 flex gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">{userProgress.streak} day streak</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">{userProgress.completedLessons} lessons completed</span>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid gap-4">
        <h3 className="text-xl font-bold mb-4">Your Learning Path</h3>
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              lesson.completed
                ? 'bg-green-50 border-green-200 hover:bg-green-100'
                : 'bg-white border-gray-200 hover:border-green-300 hover:shadow-md'
            }`}
            onClick={() => startLesson(index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  lesson.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {lesson.completed ? <CheckCircle className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className="font-semibold">{lesson.title}</h4>
                  <p className="text-gray-600 text-sm">{lesson.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">{lesson.xp} XP</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLesson = () => {
    if (lessonComplete) {
      return (
        <div className="p-6 max-w-2xl mx-auto text-center">
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-green-600">Lesson Complete!</h2>
          <p className="text-gray-600 mb-6">You've earned {lessons[currentLesson].xp} XP</p>
          <button
            onClick={continueLearning}
            className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Continue Learning
          </button>
        </div>
      );
    }

    const question = lessons[currentLesson].questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;

    return (
      <div className="p-6 max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{lessons[currentLesson].title}</span>
            <span>{currentQuestion + 1} / {lessons[currentLesson].questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / lessons[currentLesson].questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  showResult
                    ? index === question.correct
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : index === selectedAnswer && selectedAnswer !== question.correct
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-gray-50 border-gray-200 text-gray-500'
                    : selectedAnswer === index
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    showResult && index === question.correct
                      ? 'bg-green-500 border-green-500'
                      : showResult && index === selectedAnswer && selectedAnswer !== question.correct
                      ? 'bg-red-500 border-red-500'
                      : selectedAnswer === index
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {showResult && index === question.correct && <CheckCircle className="w-4 h-4 text-white" />}
                    {showResult && index === selectedAnswer && selectedAnswer !== question.correct && <XCircle className="w-4 h-4 text-white" />}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Result Explanation */}
        {showResult && (
          <div className={`p-4 rounded-xl mb-6 ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              <span className="font-semibold">{isCorrect ? 'Correct!' : 'Not quite right'}</span>
            </div>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}

        {/* Submit Button */}
        {!showResult && (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className={`w-full py-4 rounded-xl font-semibold transition-colors ${
              selectedAnswer !== null
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Answer
          </button>
        )}
      </div>
    );
  };

  const renderProfile = () => (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold">Your Progress</h2>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold mb-4">Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{userProgress.totalXP}</div>
              <div className="text-sm text-gray-600">Total XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{userProgress.level}</div>
              <div className="text-sm text-gray-600">Current Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{userProgress.streak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{userProgress.completedLessons}</div>
              <div className="text-sm text-gray-600">Lessons Done</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-medium">First Steps</div>
                <div className="text-sm text-gray-600">Complete your first lesson</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg opacity-50">
              <Award className="w-6 h-6 text-gray-400" />
              <div>
                <div className="font-medium">Knowledge Seeker</div>
                <div className="text-sm text-gray-600">Complete 5 lessons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-600">IslamLearn</h1>
            <div className="flex gap-1">
              <button
                onClick={() => setCurrentView('home')}
                className={`p-3 rounded-xl transition-colors ${
                  currentView === 'home' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Home className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentView('profile')}
                className={`p-3 rounded-xl transition-colors ${
                  currentView === 'profile' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {currentView === 'home' && renderHome()}
      {currentView === 'lesson' && renderLesson()}
      {currentView === 'profile' && renderProfile()}
    </div>
  );
};

export default IslamicLearningApp;