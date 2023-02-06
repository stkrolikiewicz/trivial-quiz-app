import React from 'react'

interface AlertProps {
  message: string
  setAlert: React.Dispatch<React.SetStateAction<boolean>>
  handleHardSubmit: (e: React.FormEvent) => void
}

const Alert: React.FC<AlertProps> = (props) => {
  return (
    <div className="myAlert">
      <div className="alert alert-danger" role="alert">
        <h4>{props.message}</h4>
        <button
          className="btn btn-dark"
          onClick={() => {
            props.setAlert(false)
          }}
        >
          I want to select all answers
        </button>
        <button
          className="btn btn-outline-light text-dark"
          onClick={props.handleHardSubmit}
        >
          I understand, submit
        </button>
      </div>
    </div>
  )
}

export default Alert
