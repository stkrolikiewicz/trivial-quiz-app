import React from 'react'
import { Spinner } from '~/components'
import RootPage from './root'

const LoadingPage: React.FC = () => {
  return (
    <RootPage header="loading">
      <div className="container-fluid">
        <div className="row mx-lg-3  my-3 mx-sm-0">
          <div className="col-12 mx-sm-0">
            <Spinner />
          </div>
        </div>
      </div>
    </RootPage>
  )
}

export default LoadingPage
