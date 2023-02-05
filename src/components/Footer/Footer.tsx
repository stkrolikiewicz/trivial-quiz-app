import React from 'react'
import styles from './Footer.module.sass'
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p>
              <span className="trivial">Trivial</span> Quiz © 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
