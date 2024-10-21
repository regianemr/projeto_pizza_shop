import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './src/pages/auth/app/dashboard'
import { SignIn } from './src/pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sign-in', element: <SignIn /> },
])
