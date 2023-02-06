import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type Question from '~/types/question.type'

interface QuizProps {
  quiz: Question[]
}

const Quiz = (props: QuizProps): JSX.Element => {
  const [answers, setAnswers] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ])
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  const [alert, setAlert] = useState(false)

  const navigate = useNavigate()

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
        <div className="myAlert">
          <div className="alert alert-danger" role="alert">
            <h4>You didn&apos;t select all answers!</h4>
            <button
              className="btn btn-dark"
              onClick={() => {
                setAlert(false)
              }}
            >
              I want to select all answers
            </button>
            <button
              className="btn btn-outline-light text-dark"
              onClick={handleHardSubmit}
            >
              I understand, submit
            </button>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-12">
          {!submitted && (
            <form onSubmit={handleSubmit} className="card p-3">
              <div>
                {props.quiz.map((question: Question, index: number) => (
                  <fieldset
                    key={index}
                    id={index.toString()}
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement
                      console.log(target.value)
                      const newAnswers = answers
                      newAnswers[index] = target.value
                      setAnswers(newAnswers)
                      console.log(answers)
                      console.log()
                    }}
                    className="card mb-3 question"
                  >
                    <h4 className="card-header">{question.question}</h4>
                    <div className="card-body">
                      {question.answers.map((answer: string, index: number) => (
                        <div key={answer} className="form-check my-1">
                          <label
                            htmlFor={`answer${index}${question.question}`}
                            className="form-label py-1"
                          >
                            <input
                              id={`answer${index}${question.question}`}
                              type="radio"
                              value={answer}
                              name={question.question}
                              className="form-check-input"
                            />
                            <span className="px-2">{answer}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
          {submitted && (
            <div className="card p-3">
              <div className="score mb-2">
                <h2>Quiz finished</h2>
                <h4 className="mt-2">
                  <span className="badge rounded-pill text-bg-light px-3">
                    Score: {score}/10
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
                      {answers[index] !== qeustion.correct_answer && (
                        <div className="card-body">
                          <p className="not-correct">
                            Your answer: {answers[index]}
                          </p>

                          <p className="answer">
                            Correct answer: {qeustion.correct_answer}
                          </p>
                          <h6 className="points p0">point(s): 0/1</h6>
                        </div>
                      )}
                      {answers[index] === qeustion.correct_answer && (
                        <div className="card-body">
                          <p className="correct">
                            Your answer: {answers[index]}
                          </p>
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
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
