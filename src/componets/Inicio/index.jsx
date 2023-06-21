import React, { useState } from 'react'
import { Hero } from "../Hero";
import { Body } from "../Productos/index.js";
import {Footer} from "../Footer"
import { Cart } from "../Cart";
import  Data  from "../../Data";




  

 
export const Inicio = () => {
  return (
    <div>
        <Cart/>
        <Hero/>
       <Body/>
       <Footer/>
  </div>
  )
}
