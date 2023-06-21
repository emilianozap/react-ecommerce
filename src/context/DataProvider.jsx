import React, { useState, useEffect, createContext } from "react";
import Data from "../Data";

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState ([])
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState (0)

    useEffect (()=>{
        const producto = Data.items
        if (producto) {
            setProductos(producto)
        }
        else{
            setProductos([])

        }
        
    },[])

const addCart = (id) =>{
    const check = cart.every(item =>{
        return item.id !== id;
    })

    if (check) {
        const data = productos.filter(producto =>{
            return producto.id === id
        })
        setCart([...cart, ...data])
    }else{
        alert("su producto ya esta añadido a tu compra")
        
    }
}

useEffect(()=>{
    const dataCart = JSON.parse(localStorage.getItem("dataCart"))
    if (dataCart) {
        setCart(dataCart)
    }
}, [])

useEffect(()=>{
localStorage.setItem("dataCarrito", JSON.stringify(cart))
},[cart])


useEffect (()=>{
    const getTotal = () =>{
        const res = cart.reduce((acc, item) =>{
            return acc + (item.price * item.cantidad);
        }, 0)
        setTotal(res)
    }
    getTotal()
},[cart])

    const value ={
        productos : [productos],
        menu: [menu, setMenu],
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal]
    }


    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}