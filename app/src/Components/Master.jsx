import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Error from './Error'
import Laptops from './Laptops'
import Mobiles from './Mobiles'
import Watches from './Watches'
const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route path='/dashboard/laptops'element={<Laptops></Laptops>}></Route>
            <Route path='/dashboard/mobiles'element={<Mobiles></Mobiles>}></Route>
            <Route path='/dashboard/watches'element={<Watches></Watches>}></Route>
            </Route>
            <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </div>
   
  )
}

export default Master
