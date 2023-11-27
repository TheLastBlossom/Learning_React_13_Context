import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Articles } from '../components/Articles'
import { About } from '../components/About'
import { SignIn } from '../components/SignIn'
import { NotFound } from '../components/NotFound'

export const AppMainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/home' element={<Home></Home>} />
                <Route path='/articles' element={<Articles></Articles>} />
                <Route path='/about' element={<About></About>} />
                <Route path='/signin' element={<SignIn></SignIn>} />
                <Route path='*' element={<NotFound></NotFound>} />
            </Routes>
        </BrowserRouter>
    )
}
