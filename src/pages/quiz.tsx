import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuiz } from '~/services/opentdb.service'
import type Question from '~/types/question.type'
import { Quiz } from '~/components'
import RootPage from './root'

const QuizPage: React.FC = () => {
  const { category } = useParams()
  const [loading, setLoading] = useState(true)
  const [quiz, setQuiz] = useState<Question[]>([])

  useEffect(() => {
    showQuiz()
  }, [])

  const showQuiz = (): void => {
    setLoading(true)
    getQuiz(category as string)
      .then((res) => {
        setQuiz(res)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  return (
    <RootPage header="quiz">
      <div className="container-fluid">
        <div className="row mx-lg-3  my-3 mx-sm-0">
          <div className="col-12 mb-3 mx-sm-0">
            {!loading && quiz.length > 0 && (
              <h2 className="category">
                Category: <em>{quiz[0].category}</em>
              </h2>
            )}
          </div>
          <div className="col-12 mx-sm-0">
            {loading && (
              <div className="spinner-grow text-primary" role="status"></div>
            )}
            {quiz.length > 0 && <Quiz quiz={quiz} />}
          </div>
        </div>
      </div>
    </RootPage>
  )
}

export default QuizPage
