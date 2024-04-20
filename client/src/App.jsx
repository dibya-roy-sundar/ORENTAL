import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' // Import Routes from react-router-dom
import Layout from './Pages/Layout/Layout.jsx'
import Placefind from './Pages/Placefind/Placefind.jsx'
import Placefinddetail from './Pages/PlacefindDetail/Placefinddetail.jsx'
import Addoffice from './Components/Addoffice/Addoffice.jsx'
import RegisterLogin from './Pages/Register-Login/RegisterLogin.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/findoffice' element={<Placefind />} />
        <Route path='/findplacedetail' element={<Placefinddetail />} />
        <Route path='/officeadd' element={<Addoffice />} />
        <Route path='/registerlogin' element={<RegisterLogin />} />
      </Routes>
    </Router>
  )
}

export default App
