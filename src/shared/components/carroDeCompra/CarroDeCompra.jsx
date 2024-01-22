import React from 'react'
import carroCompra from '../../imgs/iconos/carro_compra.svg'
import { useCarroCompraContext } from '../../../context/useCarroCompraContext'
import { TarjetaProductoCarroCompra } from './components/TarjetaProductoCarroCompra'
import { formatearMonedaChilena } from '../../../pages/listado_productos/utils/formatearMonedaChilena'

export const CarroDeCompra = () => {

    const { carro, limpiarCarro, cantidadProductosCarro, precioTotal } = useCarroCompraContext()

    const precioTotalFormateado = formatearMonedaChilena(precioTotal)
    const handleLimpiarCarro = () => {
        limpiarCarro()
    }

    return (
        <>
            <button className="btn d-lg-none position-relative " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <img src={carroCompra} width={'30px'} />
                <div className='position-absolute border border-black rounded-circle px-2 bg-dark' style={{ bottom: '-5px', right: '0px' }}>
                    <span className='fw-bold fs' style={{ color: 'white' }}>{cantidadProductosCarro}</span>
                </div>
            </button>

            <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Carrito de compras 🛒</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0">
                    <hr className='m-0' />
                    <div className='p-3'>
                        {carro.length > 0
                            ? <>
                                {carro.map(producto => (
                                    <TarjetaProductoCarroCompra key={producto.id} producto={producto} />
                                ))}
                                <p className='text-center fs-2 fw-bold'>Total: {precioTotalFormateado}</p>
                                <div className='d-flex  justify-content-center gap-3'>
                                    <button className='btn btn-outline-danger' onClick={handleLimpiarCarro}>Vaciar carrito</button>
                                    <button className='btn btn-primary'>Realizar compra</button>
                                </div>
                            </>
                            : <div className=''>
                                <p>Carro vacío, vuelve a la tienda para agregar productos. 💸</p>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
