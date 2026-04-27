import React from 'react'
import Header from '../Common/header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
   <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
   </>
  )
}

export default UserLayout
