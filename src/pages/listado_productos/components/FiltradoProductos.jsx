import React, { useEffect, useState } from 'react'
import { filtrarProductos } from '../utils/filtrarProductos'

export const FiltradoProductos = ({ setProductosFiltrados, productos }) => {

    const [filtros, setFiltros] = useState({
        category: 'all',
        minPrice: 0,
        maxPrice: 9999999
    })

    useEffect(() => {
        if (productos && productos.length > 0) {
            setProductosFiltrados(filtrarProductos(productos, filtros))
        }
    }, [filtros, productos])



    return (
        // <div className='w-75 mx-auto d-flex flex-column  gap-2 my-3'>
        //     <input type="text" className='form-control' placeholder='Busca un producto' />
        //     <div className='d-flex align-items-center'>
        //         <label className='form-label me-3 mb-0' htmlFor="minPrice">Precio minimo: </label>
        //         <input className='' id='minPrice' type="range" min={0} max={100000} />
        //     </div>
        //     <div className='row'>
        //         <label className='col-12 col-sm-auto form-label me-3 mb-0' htmlFor="minMax">Precio maximo: </label>
        //         <input className='col-12 col-sm' id='minMax' type="range" min={0} max={100000} />
        //     </div>
        //     <div>
        //         <label className='form-label' htmlFor="category">Categoria</label>
        //         <select className='form-control' name="category" id="category">
        //             <option value="">Todas</option>
        //         </select>
        //     </div>
        //     <button className='btn btn-primary'>Buscar</button>
        // </div>
        <></>
    )
}
