import { useCarroCompraContext } from '../../../context/useCarroCompraContext'
import carroCompra from '../../imgs/iconos/carro_compra.svg'
import { useState } from 'react'
import { TarjetaProductoCarroCompra } from './components/TarjetaProductoCarroCompra'
import { formatearMonedaChilena } from '../../../pages/listado_productos/utils/formatearMonedaChilena'

export const CarroDeCompra = ({ titulo = 'Titulo de ejemplo' }) => {
    const [mostarMenu, setMostrarMenu] = useState(false)

    const { carro, limpiarCarro, cantidadProductosCarro, precioTotal } = useCarroCompraContext()

    const precioTotalFormateado = formatearMonedaChilena(precioTotal)
    const handleLimpiarCarro = () => {
        limpiarCarro()
    }

    const cerrarAbrilMenuLateral = () => {
        setMostrarMenu(prevState => !prevState)
        document.body.style.overflow = mostarMenu ? 'auto' : 'hidden'

    }

    const cerrarAlHacerCLickAfuera = (e) => {
        if (e.target.getAttribute('name') === 'carrito-container') return cerrarAbrilMenuLateral()
    }

    return (
        <>
            <div className='d-flex justify-content-end'>
                <button className="btn" onClick={cerrarAbrilMenuLateral}>
                    <label htmlFor="btn-menu"><img src={carroCompra} alt="" width={'35px'} /></label>
                </button>
            </div>

            <div
                name={'carrito-container'}
                className={`position-fixed vw-100 vh-100 top-0 start-0 ${mostarMenu ? 'visible ' : 'visually-hidden-focusable'}`}
                style={{ background: 'rgba(0, 0, 0, 0.5)', zIndex: '99', overflowX: 'hidden' }}
                onClick={cerrarAlHacerCLickAfuera}
            >
                <div
                    className="top-0 end-0 position-absolute bg-white w-100 min-vh-100 "
                    style={{ maxWidth: '399px', zIndex: '999' }}
                >
                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <h4 className='mb-0'>{titulo}</h4>
                        <label
                            className=''
                            style={{ cursor: 'pointer' }}
                            onClick={cerrarAbrilMenuLateral}
                        >✖️</label>
                    </div>
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