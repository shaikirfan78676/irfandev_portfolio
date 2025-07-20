import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillAssessment = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizzes = [
    {
      id: 'react',
      title: 'React.js Fundamentals',
      description: 'Test your knowledge of React concepts and best practices',
      icon: 'Code2',
      gradient: 'from-blue-500 to-cyan-400',
      difficulty: 'Intermediate',
      questions: [
        {
          question: "What is the purpose of React\'s Virtual DOM?",
          options: [
            "To directly manipulate the browser DOM",
            "To optimize rendering performance by batching updates",
            "To store component state",
            "To handle routing in React applications"
          ],
          correct: 1,
          explanation: "The Virtual DOM is a JavaScript representation of the actual DOM that React uses to optimize rendering by batching updates and minimizing direct DOM manipulation."
        },
        {
          question: "Which hook is used for side effects in functional components?",
          options: [
            "useState",
            "useContext",
            "useEffect",
            "useReducer"
          ],
          correct: 2,
          explanation: "useEffect is the hook used for performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
        },
        {
          question: "What is the correct way to update state in React?",
          options: [
            "Directly mutating the state object",
            "Using setState or state setter function",
            "Modifying state properties directly",
            "Using global variables"
          ],
          correct: 1,
          explanation: "State should always be updated using setState (class components) or the state setter function returned by useState (functional components) to ensure React re-renders the component."
        }
      ]
    },
    {
      id: 'javascript',
      title: 'JavaScript ES6+',
      description: 'Modern JavaScript features and concepts',
      icon: 'Zap',
      gradient: 'from-yellow-500 to-orange-400',
      difficulty: 'Advanced',
      questions: [
        {
          question: "What does the spread operator (...) do?",
          options: [
            "Creates a new array or object",
            "Expands iterables into individual elements",
            "Combines multiple arrays",
            "All of the above"
          ],
          correct: 3,
          explanation: "The spread operator can expand iterables, create shallow copies of arrays/objects, and combine multiple arrays or objects."
        },
        {
          question: "What is the difference between let and const?",
          options: [
            "let is block-scoped, const is function-scoped",
            "let can be reassigned, const cannot",
            "const is faster than let",
            "There is no difference"
          ],
          correct: 1,
          explanation: "Both let and const are block-scoped, but let allows reassignment while const creates a read-only reference to a value."
        },
        {
          question: "What is a Promise in JavaScript?",
          options: [
            "A synchronous operation",
            "An object representing eventual completion of an async operation",
            "A type of callback function",
            "A method for handling errors"
          ],
          correct: 1,
          explanation: "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value."
        }
      ]
    },
    {
      id: 'nodejs',
      title: 'Node.js Backend',
      description: 'Server-side JavaScript and backend concepts',
      icon: 'Server',
      gradient: 'from-green-500 to-teal-400',
      difficulty: 'Intermediate',
      questions: [
        {
          question: "What is the event loop in Node.js?",
          options: [
            "A loop that handles HTTP requests",
            "A mechanism that handles asynchronous operations",
            "A database connection pool",
            "A file system watcher"
          ],
          correct: 1,
          explanation: "The event loop is Node.js's mechanism for handling asynchronous operations, allowing non-blocking I/O operations."
        },
        {
          question: "What is middleware in Express.js?",
          options: [
            "Database connection logic",
            "Functions that execute during request-response cycle",
            "Frontend routing logic",
            "Error handling only"
          ],
          correct: 1,
          explanation: "Middleware functions are functions that have access to the request and response objects and can execute code during the request-response cycle."
        },
        {
          question: "How do you handle errors in Node.js?",
          options: [
            "Using try-catch blocks only",
            "Using error-first callbacks and try-catch",
            "Ignoring errors",
            "Using console.log"
          ],
          correct: 1,
          explanation: "Node.js uses error-first callbacks for asynchronous operations and try-catch blocks for synchronous operations to handle errors properly."
        }
      ]
    }
  ];

  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const showAnswer = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreMessage = (percentage) => {
    if (percentage >= 80) return 'Excellent! You have strong knowledge in this area.';
    if (percentage >= 60) return 'Good job! Consider reviewing some concepts.';
    return 'Keep learning! Practice makes perfect.';
  };

  if (!currentQuiz) {
    return (
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
            <Icon name="Brain" size={24} color="white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Skill Assessment</h2>
            <p className="text-muted-foreground">Test your technical knowledge with interactive quizzes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizzes.map((quiz, index) => (
            <div
              key={quiz.id}
              className="group bg-background border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${quiz.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={quiz.icon} size={24} color="white" strokeWidth={2} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {quiz.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{quiz.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  quiz.difficulty === 'Advanced' ?'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                }`}>
                  {quiz.difficulty}
                </span>
                <span className="text-sm text-muted-foreground">{quiz.questions.length} questions</span>
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={() => startQuiz(quiz)}
                className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90"
                iconName="Play"
                iconPosition="left"
              >
                Start Quiz
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-muted/20 border border-muted rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-accent" />
            <span className="text-sm font-medium text-foreground">Assessment Guidelines</span>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Each quiz contains 3 carefully crafted questions</li>
            <li>• Questions test both theoretical knowledge and practical understanding</li>
            <li>• Detailed explanations provided for each answer</li>
            <li>• Score 80%+ to demonstrate proficiency in the topic</li>
          </ul>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    
    return (
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="text-center">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${currentQuiz.gradient} flex items-center justify-center mx-auto mb-4`}>
            <Icon name="Trophy" size={32} color="white" strokeWidth={2} />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">Quiz Completed!</h2>
          <h3 className="text-lg text-muted-foreground mb-6">{currentQuiz.title}</h3>
          
          <div className="bg-background border border-border rounded-xl p-6 mb-6">
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
              {score}/{currentQuiz.questions.length}
            </div>
            <div className={`text-2xl font-semibold mb-2 ${getScoreColor(percentage)}`}>
              {percentage}%
            </div>
            <p className="text-muted-foreground">{getScoreMessage(percentage)}</p>
          </div>

          <div className="flex space-x-4 justify-center">
            <Button
              variant="outline"
              onClick={() => startQuiz(currentQuiz)}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Retake Quiz
            </Button>
            <Button
              variant="default"
              onClick={resetQuiz}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Quizzes
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const question = currentQuiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      {/* Quiz Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${currentQuiz.gradient} shadow-lg`}>
            <Icon name={currentQuiz.icon} size={24} color="white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{currentQuiz.title}</h2>
            <p className="text-muted-foreground">Question {currentQuestion + 1} of {currentQuiz.questions.length}</p>
          </div>
        </div>
        <button
          onClick={resetQuiz}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Icon name="X" size={20} className="text-muted-foreground" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-electric-blue transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">{question.question}</h3>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedAnswer === index
                  ? showResult
                    ? index === question.correct
                      ? 'border-green-500 bg-green-500/10 text-green-400' :'border-red-500 bg-red-500/10 text-red-400' :'border-accent bg-accent/10 text-accent'
                  : showResult && index === question.correct
                    ? 'border-green-500 bg-green-500/10 text-green-400' :'border-border bg-background hover:border-accent/30 text-foreground'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index
                    ? showResult
                      ? index === question.correct
                        ? 'border-green-500 bg-green-500' :'border-red-500 bg-red-500' :'border-accent bg-accent'
                    : showResult && index === question.correct
                      ? 'border-green-500 bg-green-500' :'border-muted'
                }`}>
                  {showResult && index === question.correct && (
                    <Icon name="Check" size={14} color="white" strokeWidth={2} />
                  )}
                  {showResult && selectedAnswer === index && index !== question.correct && (
                    <Icon name="X" size={14} color="white" strokeWidth={2} />
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showResult && (
        <div className="mb-6 bg-muted/20 border border-muted rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Icon name="Lightbulb" size={16} className="text-yellow-400 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">Explanation</h4>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
        </div>
        <div className="space-x-3">
          {!showResult && selectedAnswer !== null && (
            <Button
              variant="outline"
              onClick={showAnswer}
              iconName="Eye"
              iconPosition="left"
            >
              Show Answer
            </Button>
          )}
          {showResult && (
            <Button
              variant="default"
              onClick={handleNextQuestion}
              iconName={currentQuestion < currentQuiz.questions.length - 1 ? "ArrowRight" : "Flag"}
              iconPosition="right"
            >
              {currentQuestion < currentQuiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;