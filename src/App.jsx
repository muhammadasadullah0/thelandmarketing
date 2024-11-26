import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { ToastContainer} from 'react-toastify';
import Post from './pages/Post'

const App = () => {
  return (
    <>
    <Navbar />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </>
   
  )
}

export default App
