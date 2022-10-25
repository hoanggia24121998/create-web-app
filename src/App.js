import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"  // v6.3.0
import Layout from './components/Layout';
import {
  About, Contact, Home, ListPosts, PostDetail, PostForm
} from './pages';
import { datadogRum } from '@datadog/browser-rum';
function App() {
  useEffect(() => {
    datadogRum.startView({
      name: 'Home',
      service: 'Posts',
      version: '1.2.3'
    })
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="posts" element={<Outlet />}>
            <Route index element={<ListPosts />} />
            <Route path="add" element={<PostForm />} />

            <Route path=":postId" element={<Outlet />}>
              <Route index element={<PostDetail />} />
              <Route path="edit" element={<PostForm />} />
            </Route>
          </Route>

          <Route
            path="*"
            element={
              <div>404 - Page not found</div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App