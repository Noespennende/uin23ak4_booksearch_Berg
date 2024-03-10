import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import { useEffect, useState } from 'react'


function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("James+Bond")

  const getData = async() =>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}&limit=20`)
      const data = await response.json()
      setContent(data.docs)
    } catch{
      console.error("Error i getData funksjon")
    }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home content={content}/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
