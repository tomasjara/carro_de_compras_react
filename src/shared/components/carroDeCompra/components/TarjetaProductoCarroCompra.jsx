import React from 'react'
import { formatearMonedaChilena } from '../../../../pages/listado_productos/utils/formatearMonedaChilena'
import { useCarroCompraContext } from '../../../../context/useCarroCompraContext'
import trianguloArriba from '../../../imgs/iconos/triangulo_arriba.svg'
import trianguloAbajo from '../../../imgs/iconos/triangulo_abajo.svg'

export const TarjetaProductoCarroCompra = ({ producto }) => {
    const { id, name, description, category, imageurl, price, quantity } = producto
    const priceFormatted = formatearMonedaChilena(price)
    const { agregarAlCarro, removerDelCarro, quitarUnaCantidad } = useCarroCompraContext()

    return (
        <div className='d-flex align-items-center position-relative border shadow-sm p-2 my-2'>
            <div className='position-absolute' style={{ top: '5px', right: '5px' }}>
                <button className='btn btn-sm px-1 py-0' onClick={() => removerDelCarro(id)} style={{ height: '30px' }}>✖️</button>
            </div>

            <div className='d-flex flex-column pe-3'>
                <img onClick={() => agregarAlCarro(producto)} style={{ cursor: 'pointer' }} src={trianguloArriba} alt="" width={'25px'} />
                <p className='fw-bold m-0 text-center'>{quantity}</p>
                <img onClick={() => quitarUnaCantidad(producto)} style={{ cursor: 'pointer' }} src={trianguloAbajo} alt="" width={'25px'} />
            </div>
            <img src={imageurl} alt="" width={'100px'} className='me-2 rounded-3 ' />
            <div>
                <p className='fs-6 m-0 text-truncate' >{name}</p>
                <p className='fs-6 fw-bold m-0'>{priceFormatted}</p>
            </div>
        </div>
    )
}
