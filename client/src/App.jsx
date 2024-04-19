import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' // Import Routes from react-router-dom
import Layout from './Pages/Layout/Layout.jsx'
import Placefind from './Pages/Placefind/Placefind.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/findplace' element={<Placefind />} />
      </Routes>
    </Router>
  )
}

export default App
