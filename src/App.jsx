
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './component/shared/Layout'
import Dashborad from './component/Dashboard'
import Products from './component/Products'

function App() {

  return (
    <div className='bg-sky-200 '>
     
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Dashborad/>}/>
        <Route path='products' element={<Products/>}/>
      </Route>
      <Route path='login' element={<div>login</div>}/>
     </Routes>
     
    </div>
  )
}

export default App
