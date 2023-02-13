import React, { type ChangeEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '~/components'
import type Category from '~/types/category.type'
import RootPage from './root'

interface CategoriesPageProps {
  categories: Category[]
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ categories }) => {
  const navigate = useNavigate()
  const [category, setCategory] = useState('9')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    navigate(`/quiz/${category}`)
  }

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>): void => {
      setCategory(e.target.value)
    },
    [category]
  )

  return (
    <RootPage header="quiz">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {categories.length === 0 ? (
              <div className="container text-center">
                <Spinner />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-5 border">
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Select category:
                  </label>
                  <select
                    value={category}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {categories.map((category, index) => {
                      return (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Start quiz!
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </RootPage>
  )
}

export default React.memo(CategoriesPage)
