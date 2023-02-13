import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type Question from '~/types/question.type'

interface QuizSummaryProps {
  quiz: Question[]
  answers: string[]
  score: number
}

const QuizSummary: React.FC<QuizSummaryProps> = (props) => {
  const navigate = useNavigate()
  const [showAnswers, setShowAnswers] = useState(false)
  return (
    <div className="card p-3 p-sm-5 bordered summary">
      <div className="score mb-2">
        <h2>Quiz finished</h2>
        <h4 className="mt-2">
          <span className="badge rounded-pill text-bg-light px-3">
            Score: {props.score}/10
          </span>
        </h4>
      </div>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShowAnswers(!showAnswers)
        }}
      >
        {!showAnswers ? 'Show answers' : 'Hide answers'}
      </button>
      {showAnswers && (
        <div>
          {props.quiz.map((qeustion: Question, index: number) => (
            <div key={index} className="card mt-3 question">
              <h4 className="card-header">{qeustion.question}</h4>
              {props.answers[index] !== qeustion.correct_answer && (
                <div className="card-body">
                  <p className="not-correct">
                    Your answer: {props.answers[index]}
                  </p>

                  <p className="answer">
                    Correct answer: {qeustion.correct_answer}
                  </p>
                  <h6 className="points p0">point(s): 0/1</h6>
                </div>
              )}
              {props.answers[index] === qeustion.correct_answer && (
                <div className="card-body">
                  <p className="correct">Your answer: {props.answers[index]}</p>
                  <h6 className="points p1">point(s): 1/1</h6>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          navigate('/quiz')
        }}
      >
        Start new quiz!
      </button>
    </div>
  )
}

export default React.memo(QuizSummary)
