import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuiz } from '~/services/opentdb.service'
import type Question from '~/types/question.type'
import { Quiz, Spinner } from '~/components'
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
        <div id="quiz-container" className="row mx-lg-3  my-3 mx-sm-0">
          <div className="col-12 mb-3 mx-sm-0" id="quiz-category">
            {!loading && quiz.length > 0 && (
              <h2 className="category">
                <span className="em">
                  <em>{quiz[0].category}</em>
                </span>
              </h2>
            )}
          </div>
          <div className="col-12 mx-sm-0">
            {loading && <Spinner />}
            {quiz.length > 0 && <Quiz quiz={quiz} />}
          </div>
        </div>
      </div>
    </RootPage>
  )
}

export default React.memo(QuizPage)
