import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../../constants/routes'
import LoginPage from '../Auth/LoginPage'

const Auth = () => {
  return (
    <>
      <Routes>
        <Route path={AuthRoutes.login} element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default Auth
