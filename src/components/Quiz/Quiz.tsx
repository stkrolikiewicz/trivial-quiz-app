import React, { useState, useCallback } from 'react'
import type Question from '~/types/question.type'
import Alert from '../Alert/Alert'
import QuizForm from '../QuizForm/QuizForm'
import QuizSummary from '../QuizSummary/QuizSummary'

interface QuizProps {
  quiz: Question[]
}

const Quiz: React.FC<QuizProps> = (props) => {
  const emptyAnswers: string[] = ['', '', '', '', '', '', '', '', '', '']
  const [answers, setAnswers] = useState<string[]>(emptyAnswers)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [alert, setAlert] = useState(false)

  const correctAnswers = props.quiz.map((question: Question) => {
    return question.correct_answer
  })

  const handleSubmit = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault()
      if (answers.includes('')) {
        setAlert(true)
      } else {
        setSubmitted(true)
        checkAnswers()
      }
    },
    [submitted, alert, answers]
  )

  const handleHardSubmit = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault()
      setAlert(false)
      setSubmitted(true)
      checkAnswers()
    },
    [submitted, alert]
  )

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
          theme="dark"
          message="You didn't select all answers!"
          cancelMessage="I want to select all answers"
          submitMessage="Submit anyway"
          setAlert={setAlert}
          handleSubmit={handleHardSubmit}
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

export default React.memo(Quiz)
