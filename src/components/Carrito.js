import React from 'react'
import './carrito.css';
import Producto from './Producto';

//Sfc abreviado
const Carrito = ({carrito, agregarProducto}) => (
    <div className='carrito'>
        <h2>Tu carrito de compras</h2>
        
        {carrito.length ===0 //validar elementos en el carrito
        ? //operador ternario
            <p>No hay elementos en el carrito</p>

        : carrito.map(producto => (

            <Producto 
                key = {producto.id}
                producto = {producto}
                carrito = {carrito}
                agregarProducto = {agregarProducto}
            />
        ))
        
        }
    </div>
);
 
export default Carrito;