import React from 'react'
import { TarjetaProducto } from './TarjetaProducto';

export const Productos = ({ productosData }) => {
    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
            {productosData.map(producto => (
                <TarjetaProducto key={producto.id} producto={producto} />
            ))}
        </div>
    )
}
