import React from 'react'
import { useNavigate } from 'react-router-dom'
import RootPage from './root'

const NotFound: React.FC = (props) => {
  const navigate = useNavigate()
  return (
    <RootPage header="not-found">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 lost">
            <h1>404</h1>
            <h2>Oops! You seem to be lost.</h2>
            <button
              className="nav-item btn btn-primary"
              onClick={() => {
                navigate('/')
              }}
            >
              Back to home page
            </button>
          </div>
        </div>
      </div>
    </RootPage>
  )
}

export default NotFound
