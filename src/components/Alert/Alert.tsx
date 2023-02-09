import React from 'react'

interface AlertProps {
  theme: 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
  message: string
  cancelMessage?: string
  submitMessage?: string
  setAlert: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit: (e: React.FormEvent) => void
}

const Alert: React.FC<AlertProps> = (props) => {
  return (
    <div className="myAlert">
      <div className={`alert alert-${props.theme}`} role="alert">
        <h4>{props.message}</h4>
        <div>
          <button
            className={`btn btn-first btn-${props.theme}`}
            onClick={() => {
              props.setAlert(false)
            }}
          >
            {props.cancelMessage ?? 'Cancel'}
          </button>
          <button
            className={`btn btn-outline-${props.theme}`}
            onClick={props.handleSubmit}
          >
            {props.submitMessage ?? 'Submit'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Alert)
