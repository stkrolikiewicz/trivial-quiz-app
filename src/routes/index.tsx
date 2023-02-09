import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  type ComponentType,
} from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from '~/pages/loading'
import { getCategories } from '~/services/opentdb.service'
import type Category from '~/types/category.type'

const HomePage = lazy(async (): Promise<{ default: ComponentType<any> }> => {
  return await import('~/pages/home')
})
const QuizPage = lazy(async (): Promise<{ default: ComponentType<any> }> => {
  return await import('~/pages/quiz')
})
const CategoriesPage = lazy(
  async (): Promise<{ default: ComponentType<any> }> => {
    return await import('~/pages/categories')
  }
)
const NotFound = lazy(async (): Promise<{ default: ComponentType<any> }> => {
  return await import('~/pages/notFound')
})

const AppRoutes: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    getCategories()
      .then((res: Category[]) => {
        setCategories(res)
      })
      .catch((error) => new Error(error))
  }, [])

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/quiz"
          element={<CategoriesPage categories={categories} />}
        />
        <Route path="/quiz/:category" element={<QuizPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
