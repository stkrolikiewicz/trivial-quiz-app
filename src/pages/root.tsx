import React from 'react'
import { Header, Footer } from '~/components'

interface RootPageProps {
  header: string
  children: React.ReactNode
}

const RootPage: React.FC<RootPageProps> = (props) => {
  return (
    <div className="body">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default RootPage
