import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetUserDataQuery, useGetUsersStreamQuery } from './services/query/AuthQuery'
import ProtectedRoutes from './routes/ProtectedRoutes'

function App() {

  const { data, error, isLoading } = useGetUsersStreamQuery('')

  console.log(data)

  return (
    <section className=' flex flex-col w-screen  h-screen  bg-white  ' >
      <ProtectedRoutes />
     
      <footer>

      </footer>
    </section>
  )
}

export default App
