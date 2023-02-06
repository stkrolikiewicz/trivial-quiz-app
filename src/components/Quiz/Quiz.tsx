import React, { useState } from 'react'
import type Question from '~/types/question.type'
import Alert from '../Alert/Alert'
import { answers as emptyAnswers } from '~/models/answers.model'
import QuizForm from '../QuizForm/QuizForm'
import QuizSummary from '../QuizSummary/QuizSummary'

interface QuizProps {
  quiz: Question[]
}

const Quiz: React.FC<QuizProps> = (props) => {
  const [answers, setAnswers] = useState<string[]>(emptyAnswers)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [alert, setAlert] = useState(false)

  const correctAnswers = props.quiz.map((question: Question) => {
    return question.correct_answer
  })

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (answers.includes('')) {
      setAlert(true)
    } else {
      setSubmitted(true)
      checkAnswers()
    }
  }

  const handleHardSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    setAlert(false)
    setSubmitted(true)
    checkAnswers()
  }

  const checkAnswers = (): void => {
    let score = 0
    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score++
      }
    })
    setScore(score)
  }

  return (
    <div className="container-fluid">
      {alert && (
        <Alert
          message="You didn't select all answers!"
          setAlert={setAlert}
          handleHardSubmit={handleHardSubmit}
        />
      )}
      <div className="row">
        <div className="col-12">
          {!submitted ? (
            <QuizForm
              handleSubmit={handleSubmit}
              quiz={props.quiz}
              setAnswers={setAnswers}
            />
          ) : (
            <QuizSummary quiz={props.quiz} answers={answers} score={score} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
