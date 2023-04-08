import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePage from './pages/homepage'
import Detailpage from './pages/detailpage'
import DetailLayout from './components/layout/detailLayout'
import AdminLayout from './components/layout/adminLayout'
import Adminpage from './pages/adminpage'
import ProductUpdate from './pages/product-update'
import Signin from './pages/signin'
import Signup from './pages/signup'

// 1. Khai báo router react-router-dom

function App() {

  return <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      {/* <Route path='/signup' element={<Signup/>}/> */}
      <Route path='/' element={<UserLayout />}> {/* user layout */}
        <Route index element={<HomePage />} />
        <Route path='product/:id' element={<Detailpage />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}> {/* user layout */}
        <Route index element={<Adminpage />} />
        <Route path='product/:id' element={<ProductUpdate/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
