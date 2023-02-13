import React from 'react'
import type Question from '~/types/question.type'
import { answers } from '~/models/answers.model'

interface QuizFormProps {
  handleSubmit: (e: React.FormEvent) => void
  quiz: Question[]
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>
}

const QuizForm: React.FC<QuizFormProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="card p-3 p-sm-5 bordered">
      <div>
        {props.quiz.map((question: Question, index: number) => (
          <fieldset
            key={index}
            id={index.toString()}
            onChange={(e) => {
              const target = e.target as HTMLInputElement
              const newAnswers = answers
              newAnswers[index] = target.value
              props.setAnswers(newAnswers)
            }}
            className="card mb-3 mb-sm-4 question"
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
  )
}

export default React.memo(QuizForm)
