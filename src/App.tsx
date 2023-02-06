import React, { Suspense } from 'react'
import './styles/_app.sass'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

import { Spinner } from 'react-bootstrap'

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/trivial-quiz-app">
      <Suspense fallback={<Spinner />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
