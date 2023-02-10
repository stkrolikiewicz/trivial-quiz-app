import React from 'react'
import RootPage from './root'
import { LinearProgress } from '@mui/material'

const LoadingPage: React.FC = () => {
  return (
    <RootPage header="loading">
      <LinearProgress color="secondary" />
    </RootPage>
  )
}

export default LoadingPage
