import { Routes, Route } from 'react-router-dom'
import Home from './_root/pages/Home'
import Shop from './_root/pages/Shop'
import Product from './_root/pages/Product'
import './index.css'
import RootLayout from './_root/pages/RootLayout'
import Login from './_root/pages/Login'
import { useEffect, useState } from 'react'
import Register from './_root/pages/Register'

const App = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchUser = async () => {
      const token= localStorage.getItem("token")
  }, [])
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login setUser={setUser}/>}  />
                <Route path='/register' element={<Register setUser={setUser}/>}  />

      </Route>
    </Routes>
  )
}

export default App
