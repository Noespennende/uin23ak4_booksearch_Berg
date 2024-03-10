import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'


function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
