import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './Component/Login'
import Dashboard from './Component/Dashboard'
import Post from './Component/Post'
import CreateArticle from './Component/createarticle'
import { StyleCreator } from './Component/Style'
import {CreateLyrics} from './Component/CreateLyrics'
import CreateWriter from './Component/Createwriter'
import Createtopic from './Component/Createtopic'
import CreateTextBook from './Component/CreateTextbook'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post" element={<Post />} />
        <Route path="/article" element={<CreateArticle />} />
        <Route path="/style" element={<StyleCreator />} />
        <Route path="/id" element={<CreateLyrics />} />
        <Route path="/writer" element={<CreateWriter />} />
        <Route path="/topic" element={<Createtopic />} />
        <Route path="/books" element={<CreateTextBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
