import React from 'react'
import './styles/_app.sass'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/trivial-quiz-app">
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
