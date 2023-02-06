import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '~/pages/home'
import QuizPage from '~/pages/quiz'
import CategoriesPage from '~/pages/categories'
import NotFound from '~/pages/notFound'

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
