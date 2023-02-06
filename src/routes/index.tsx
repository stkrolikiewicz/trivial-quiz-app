import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(async () => await import('~/pages/home'))
const QuizPage = lazy(async () => await import('~/pages/quiz'))
const CategoriesPage = lazy(async () => await import('~/pages/categories'))
const NotFound = lazy(async () => await import('~/pages/notFound'))

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<CategoriesPage />} />
      <Route path="/quiz/:category" element={<QuizPage />} />
    </Routes>
  )
}

export default AppRoutes
