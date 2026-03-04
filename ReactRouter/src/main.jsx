import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/Home.jsx"
import AboutUs from "./components/AboutUs.jsx"
import ContactUs from "./components/ContactUs.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Github, { githubInfo } from './components/Github.jsx'
import Params from './components/Params.jsx'

const route= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<AboutUs />}/>
      <Route path="contact" element={<ContactUs />}/>
      <Route loader={githubInfo} path="github" element={<Github />}/>
      <Route loader={githubInfo} path='params/:Id' element={<Params />}/>
      
      
      

    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
)
