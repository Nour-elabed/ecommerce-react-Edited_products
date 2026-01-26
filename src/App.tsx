import { Routes, Route } from 'react-router-dom'
import Home from './_root/pages/Home'
import Shop from './_root/pages/Shop'
import Product from './_root/pages/Product'
import './index.css'
import RootLayout from './_root/pages/RootLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App
