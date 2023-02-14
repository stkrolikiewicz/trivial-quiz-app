import React from 'react'
import { Header, Footer } from '~/components'

interface RootPageProps {
  header: string
  children: React.ReactNode
}

const RootPage: React.FC<RootPageProps> = (props) => {
  const header = document.querySelector('header')
  window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) header?.classList.add('not-top')
    else header?.classList.remove('not-top')
  })
  return (
    <div className="body">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default React.memo(RootPage)
