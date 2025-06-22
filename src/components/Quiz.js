import React from "react";
import { useState, useEffect } from 'react';

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const QuizForm = () => {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('/game_quiz_questions.json')
            .then(res => res.json())
            .then(data => {
                const shuffled = shuffleArray(data).slice(0, 10);
                setQuizQuestions(shuffled);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (quizQuestions.length > 0 && currentIndex < quizQuestions.length) {
            const answersShuffled = shuffleArray([...quizQuestions[currentIndex].answers]);
            setShuffledAnswers(answersShuffled);
        }
    }, [quizQuestions, currentIndex]);

    const handleSelect = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedAnswer) {
            setSubmitted(true);
            if (selectedAnswer === quizQuestions[currentIndex].correct_answer) {
                setScore(prevScore => prevScore + 1);
            }
        }
    };

    const handleNext = () => {
        setSelectedAnswer('');
        setSubmitted(false);
        setCurrentIndex((prev) => prev + 1);
    };

    if (quizQuestions.length === 0) return null;

    if (currentIndex >= quizQuestions.length) {
        return (
            <div className="container mt-5">
                <h3>Quiz Complete!</h3>
                <div className="alert alert-info mt-3">
                    Your score: <strong>{score} out of {quizQuestions.length}</strong>
                </div>
                <p className="mt-3">
                    {score === quizQuestions.length ? "Perfect! 🎉" :
                        score >= quizQuestions.length / 2 ? "Good job!" : "Keep practicing!"}
                </p>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentIndex];

    return (
        <div className="container mt-5">
            <h4>Question {currentIndex + 1} of {quizQuestions.length}</h4>
            <p className="mt-3">{currentQuestion.question}</p>

            <form onSubmit={handleSubmit}>
                <div className="list-group">
                    {shuffledAnswers.map((answer, index) => (
                        <label key={index} className={`quiz-item list-group-item ${selectedAnswer === answer ? 'active' : ''}`}>
                            <input
                                type="radio"
                                name="answer"
                                value={answer}
                                checked={selectedAnswer === answer}
                                onChange={handleSelect}
                                disabled={submitted}
                                className="form-check-input me-2"
                            />
                            {answer}
                        </label>
                    ))}
                </div>

                {!submitted && (
                    <button
                        type="submit"
                        className="btn btn-primary mt-3 transform"
                        style={{marginLeft: "1px"}}
                        disabled={!selectedAnswer}
                    >
                        Submit
                    </button>
                )}
            </form>

            {submitted && (
                <div className="mt-3">
                    {selectedAnswer === currentQuestion.correct_answer ? (
                        <div className="alert alert-success">Correct!</div>
                    ) : (
                        <div className="alert alert-danger">
                            Incorrect. The correct answer was: <strong>{currentQuestion.correct_answer}</strong>
                        </div>
                    )}
                    <button className="btn btn-secondary mt-2 transform" onClick={handleNext} style={{marginLeft: "1px"}}>
                        Next Question
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizForm;