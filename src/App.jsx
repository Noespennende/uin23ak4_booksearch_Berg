import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Searchresults from './components/Searchresults'
import { useEffect, useState } from 'react'
import BookPage from './components/BookPage'



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
  }, [query])

  return (
    <Layout setQuery={setQuery}>
        <Routes>
          <Route index element={<Searchresults content={content}/>}/>
        </Routes>
        <Routes>
          <Route path='/book/:id' element={<BookPage content={content}/>}/>
        </Routes>
    </Layout>
  )
}

export default App
