import React from 'react'
import { useNavigate } from 'react-router-dom'
import RootPage from './root'

const HomePage: React.FC = (props) => {
  const navigate = useNavigate()
  return (
    <RootPage header="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-home"
              onClick={() => {
                navigate('/quiz')
              }}
            >
              Start a quiz!
            </button>
          </div>
        </div>
      </div>
    </RootPage>
  )
}

export default HomePage
