import React from 'react'
import { Routes, Route } from "react-router-dom";
import { User } from './User';
import { Inicio } from "./Inicio";

export const Paginas = () => {
  return (
    <section>
        <Routes>
            <Route path='/' element={<Inicio></Inicio>} ></Route>
            <Route path='/User' element={<User></User>}></Route>
        </Routes>
    </section>
  )
}
