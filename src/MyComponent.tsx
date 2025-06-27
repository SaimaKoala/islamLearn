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

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 10
    },
    navContent: {
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#059669'
    },
    navButtons: {
      display: 'flex',
      gap: '0.25rem'
    },
    navButton: {
      padding: '0.75rem',
      borderRadius: '0.75rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    navButtonActive: {
      backgroundColor: '#dcfce7',
      color: '#059669'
    },
    navButtonInactive: {
      backgroundColor: 'transparent',
      color: '#6b7280'
    },
    homeContainer: {
      padding: '1.5rem',
      maxWidth: '64rem',
      margin: '0 auto'
    },
    headerStats: {
      marginBottom: '2rem',
      background: 'linear-gradient(to right, #059669, #047857)',
      borderRadius: '1rem',
      padding: '1.5rem',
      color: 'white'
    },
    headerStatsContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    headerSubtitle: {
      opacity: 0.9
    },
    xpDisplay: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem'
    },
    xpText: {
      fontSize: '1.25rem',
      fontWeight: 'bold'
    },
    levelText: {
      fontSize: '0.875rem',
      opacity: 0.9
    },
    statsRow: {
      marginTop: '1rem',
      display: 'flex',
      gap: '1rem'
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem'
    },
    lessonsGrid: {
      display: 'grid',
      gap: '1rem'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    lessonCard: {
      padding: '1rem',
      borderRadius: '0.75rem',
      border: '2px solid',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    lessonCardCompleted: {
      backgroundColor: '#f0fdf4',
      borderColor: '#bbf7d0'
    },
    lessonCardIncomplete: {
      backgroundColor: 'white',
      borderColor: '#e5e7eb'
    },
    lessonContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    lessonIcon: {
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    lessonIconCompleted: {
      backgroundColor: '#10b981',
      color: 'white'
    },
    lessonIconIncomplete: {
      backgroundColor: '#e5e7eb',
      color: '#6b7280'
    },
    lessonTitle: {
      fontWeight: '600',
      marginBottom: '0.25rem'
    },
    lessonDescription: {
      color: '#6b7280',
      fontSize: '0.875rem'
    },
    lessonMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    lessonXp: {
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    lessonContainer: {
      padding: '1.5rem',
      maxWidth: '32rem',
      margin: '0 auto'
    },
    progressSection: {
      marginBottom: '2rem'
    },
    progressInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.5rem'
    },
    progressBar: {
      width: '100%',
      backgroundColor: '#e5e7eb',
      borderRadius: '9999px',
      height: '0.5rem'
    },
    progressFill: {
      backgroundColor: '#059669',
      height: '0.5rem',
      borderRadius: '9999px',
      transition: 'width 0.3s'
    },
    questionSection: {
      marginBottom: '2rem'
    },
    questionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem'
    },
    optionsContainer: {
      display: 'grid',
      gap: '0.75rem'
    },
    optionButton: {
      width: '100%',
      padding: '1rem',
      textAlign: 'left',
      borderRadius: '0.75rem',
      border: '2px solid',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    optionButtonDefault: {
      backgroundColor: 'white',
      borderColor: '#e5e7eb'
    },
    optionButtonSelected: {
      backgroundColor: '#dbeafe',
      borderColor: '#3b82f6'
    },
    optionButtonCorrect: {
      backgroundColor: '#dcfce7',
      borderColor: '#10b981',
      color: '#065f46'
    },
    optionButtonIncorrect: {
      backgroundColor: '#fee2e2',
      borderColor: '#ef4444',
      color: '#991b1b'
    },
    optionButtonDisabled: {
      backgroundColor: '#f9fafb',
      borderColor: '#e5e7eb',
      color: '#9ca3af'
    },
    optionCircle: {
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: '50%',
      border: '2px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    optionCircleDefault: {
      borderColor: '#d1d5db'
    },
    optionCircleSelected: {
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6'
    },
    optionCircleCorrect: {
      backgroundColor: '#10b981',
      borderColor: '#10b981'
    },
    optionCircleIncorrect: {
      backgroundColor: '#ef4444',
      borderColor: '#ef4444'
    },
    optionText: {
      fontWeight: '500'
    },
    resultBox: {
      padding: '1rem',
      borderRadius: '0.75rem',
      marginBottom: '1.5rem'
    },
    resultBoxCorrect: {
      backgroundColor: '#dcfce7',
      color: '#065f46'
    },
    resultBoxIncorrect: {
      backgroundColor: '#fee2e2',
      color: '#991b1b'
    },
    resultHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem',
      fontWeight: '600'
    },
    resultExplanation: {
      fontSize: '0.875rem'
    },
    submitButton: {
      width: '100%',
      padding: '1rem',
      borderRadius: '0.75rem',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    submitButtonEnabled: {
      backgroundColor: '#059669',
      color: 'white'
    },
    submitButtonDisabled: {
      backgroundColor: '#d1d5db',
      color: '#9ca3af',
      cursor: 'not-allowed'
    },
    completeContainer: {
      padding: '1.5rem',
      maxWidth: '32rem',
      margin: '0 auto',
      textAlign: 'center' as const
    },
    completeIcon: {
      backgroundColor: '#dcfce7',
      borderRadius: '50%',
      width: '6rem',
      height: '6rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem'
    },
    completeTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#059669'
    },
    completeText: {
      color: '#6b7280',
      marginBottom: '1.5rem'
    },
    continueButton: {
      backgroundColor: '#059669',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.75rem',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    profileContainer: {
      padding: '1.5rem',
      maxWidth: '32rem',
      margin: '0 auto'
    },
    profileHeader: {
      textAlign: 'center' as const,
      marginBottom: '2rem'
    },
    profileAvatar: {
      width: '5rem',
      height: '5rem',
      backgroundColor: '#059669',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem'
    },
    profileTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    profileGrid: {
      display: 'grid',
      gap: '1.5rem'
    },
    profileCard: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      border: '1px solid #e5e7eb'
    },
    profileCardTitle: {
      fontWeight: '600',
      marginBottom: '1rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    statCard: {
      textAlign: 'center' as const
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    statValueGreen: { color: '#059669' },
    statValueBlue: { color: '#2563eb' },
    statValueOrange: { color: '#ea580c' },
    statValuePurple: { color: '#9333ea' },
    statLabel: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    achievementsList: {
      display: 'grid',
      gap: '0.75rem'
    },
    achievementItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      borderRadius: '0.5rem'
    },
    achievementItemActive: {
      backgroundColor: '#f0fdf4'
    },
    achievementItemInactive: {
      backgroundColor: '#f9fafb',
      opacity: 0.5
    },
    achievementTitle: {
      fontWeight: '500'
    },
    achievementDescription: {
      fontSize: '0.875rem',
      color: '#6b7280'
    }
  };

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
    <div style={styles.homeContainer}>
      <div style={styles.headerStats}>
        <div style={styles.headerStatsContent}>
          <div>
            <h2 style={styles.headerTitle}>Assalamu Alaikum!</h2>
            <p style={styles.headerSubtitle}>Continue your Islamic studies journey</p>
          </div>
          <div style={{textAlign: 'right'}}>
            <div style={styles.xpDisplay}>
              <Star size={20} />
              <span style={styles.xpText}>{userProgress.totalXP} XP</span>
            </div>
            <div style={styles.levelText}>Level {userProgress.level}</div>
          </div>
        </div>
        
        <div style={styles.statsRow}>
          <div style={styles.statItem}>
            <Trophy size={16} />
            <span>{userProgress.streak} day streak</span>
          </div>
          <div style={styles.statItem}>
            <BookOpen size={16} />
            <span>{userProgress.completedLessons} lessons completed</span>
          </div>
        </div>
      </div>

      <div style={styles.lessonsGrid}>
        <h3 style={styles.sectionTitle}>Your Learning Path</h3>
        {lessons.map((lesson, index) => (
          <div
            key={index}
            style={{
              ...styles.lessonCard,
              ...(lesson.completed ? styles.lessonCardCompleted : styles.lessonCardIncomplete)
            }}
            onClick={() => startLesson(index)}
          >
            <div style={styles.lessonContent}>
              <div style={{
                ...styles.lessonIcon,
                ...(lesson.completed ? styles.lessonIconCompleted : styles.lessonIconIncomplete)
              }}>
                {lesson.completed ? <CheckCircle size={24} /> : <Play size={24} />}
              </div>
              <div>
                <h4 style={styles.lessonTitle}>{lesson.title}</h4>
                <p style={styles.lessonDescription}>{lesson.description}</p>
              </div>
            </div>
            <div style={styles.lessonMeta}>
              <Star size={16} color="#eab308" />
              <span style={styles.lessonXp}>{lesson.xp} XP</span>
              <ArrowRight size={16} color="#9ca3af" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLesson = () => {
    if (lessonComplete) {
      return (
        <div style={styles.completeContainer}>
          <div style={styles.completeIcon}>
            <Trophy size={48} color="#059669" />
          </div>
          <h2 style={styles.completeTitle}>Lesson Complete!</h2>
          <p style={styles.completeText}>You've earned {lessons[currentLesson].xp} XP</p>
          <button
            onClick={continueLearning}
            style={styles.continueButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
          >
            Continue Learning
          </button>
        </div>
      );
    }

    const question = lessons[currentLesson].questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;

    return (
      <div style={styles.lessonContainer}>
        <div style={styles.progressSection}>
          <div style={styles.progressInfo}>
            <span>{lessons[currentLesson].title}</span>
            <span>{currentQuestion + 1} / {lessons[currentLesson].questions.length}</span>
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${((currentQuestion + 1) / lessons[currentLesson].questions.length) * 100}%`
              }}
            />
          </div>
        </div>

        <div style={styles.questionSection}>
          <h2 style={styles.questionTitle}>{question.question}</h2>
          
          <div style={styles.optionsContainer}>
            {question.options.map((option, index) => {
              let buttonStyle = {...styles.optionButton, ...styles.optionButtonDefault};
              let circleStyle = {...styles.optionCircle, ...styles.optionCircleDefault};
              
              if (showResult) {
                if (index === question.correct) {
                  buttonStyle = {...styles.optionButton, ...styles.optionButtonCorrect};
                  circleStyle = {...styles.optionCircle, ...styles.optionCircleCorrect};
                } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
                  buttonStyle = {...styles.optionButton, ...styles.optionButtonIncorrect};
                  circleStyle = {...styles.optionCircle, ...styles.optionCircleIncorrect};
                } else {
                  buttonStyle = {...styles.optionButton, ...styles.optionButtonDisabled};
                }
              } else if (selectedAnswer === index) {
                buttonStyle = {...styles.optionButton, ...styles.optionButtonSelected};
                circleStyle = {...styles.optionCircle, ...styles.optionCircleSelected};
              }
              
              return (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  style={buttonStyle}
                >
                  <div style={circleStyle}>
                    {showResult && index === question.correct && <CheckCircle size={16} color="white" />}
                    {showResult && index === selectedAnswer && selectedAnswer !== question.correct && <XCircle size={16} color="white" />}
                  </div>
                  <span style={styles.optionText}>{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {showResult && (
          <div style={{
            ...styles.resultBox,
            ...(isCorrect ? styles.resultBoxCorrect : styles.resultBoxIncorrect)
          }}>
            <div style={styles.resultHeader}>
              {isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
              <span>{isCorrect ? 'Correct!' : 'Not quite right'}</span>
            </div>
            <p style={styles.resultExplanation}>{question.explanation}</p>
          </div>
        )}

        {!showResult && (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            style={{
              ...styles.submitButton,
              ...(selectedAnswer !== null ? styles.submitButtonEnabled : styles.submitButtonDisabled)
            }}
            onMouseOver={(e) => {
              if (selectedAnswer !== null) {
                e.target.style.backgroundColor = '#047857';
              }
            }}
            onMouseOut={(e) => {
              if (selectedAnswer !== null) {
                e.target.style.backgroundColor = '#059669';
              }
            }}
          >
            Submit Answer
          </button>
        )}
      </div>
    );
  };

  const renderProfile = () => (
    <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <div style={styles.profileAvatar}>
          <User size={40} color="white" />
        </div>
        <h2 style={styles.profileTitle}>Your Progress</h2>
      </div>

      <div style={styles.profileGrid}>
        <div style={styles.profileCard}>
          <h3 style={styles.profileCardTitle}>Statistics</h3>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, ...styles.statValueGreen}}>{userProgress.totalXP}</div>
              <div style={styles.statLabel}>Total XP</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, ...styles.statValueBlue}}>{userProgress.level}</div>
              <div style={styles.statLabel}>Current Level</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, ...styles.statValueOrange}}>{userProgress.streak}</div>
              <div style={styles.statLabel}>Day Streak</div>
            </div>
            <div style={styles.statCard}>
              <div style={{...styles.statValue, ...styles.statValuePurple}}>{userProgress.completedLessons}</div>
              <div style={styles.statLabel}>Lessons Done</div>
            </div>
          </div>
        </div>

        <div style={styles.profileCard}>
          <h3 style={styles.profileCardTitle}>Achievements</h3>
          <div style={styles.achievementsList}>
            <div style={{...styles.achievementItem, ...styles.achievementItemActive}}>
              <Award size={24} color="#059669" />
              <div>
                <div style={styles.achievementTitle}>First Steps</div>
                <div style={styles.achievementDescription}>Complete your first lesson</div>
              </div>
            </div>
            <div style={{...styles.achievementItem, ...styles.achievementItemInactive}}>
              <Award size={24} color="#9ca3af" />
              <div>
                <div style={styles.achievementTitle}>Knowledge Seeker</div>
                <div style={styles.achievementDescription}>Complete 5 lessons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <h1 style={styles.logo}>IslamLearn</h1>
          <div style={styles.navButtons}>
            <button
              onClick={() => setCurrentView('home')}
              style={{
                ...styles.navButton,
                ...(currentView === 'home' ? styles.navButtonActive : styles.navButtonInactive)
              }}
              onMouseOver={(e) => {
                if (currentView !== 'home') {
                  e.target.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseOut={(e) => {
                if (currentView !== 'home') {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              <Home size={20} />
            </button>
            <button
              onClick={() => setCurrentView('profile')}
              style={{
                ...styles.navButton,
                ...(currentView === 'profile' ? styles.navButtonActive : styles.navButtonInactive)
              }}
              onMouseOver={(e) => {
                if (currentView !== 'profile') {
                  e.target.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseOut={(e) => {
                if (currentView !== 'profile') {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </nav>

      {currentView === 'home' && renderHome()}
      {currentView === 'lesson' && renderLesson()}
      {currentView === 'profile' && renderProfile()}
    </div>
  );
};

export default IslamicLearningApp;