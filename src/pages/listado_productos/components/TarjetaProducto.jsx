import React from 'react'
import { formatearMonedaChilena } from '../utils/formatearMonedaChilena'
import { useCarroCompraContext } from '../../../context/useCarroCompraContext'

export const TarjetaProducto = ({ producto }) => {
  const { id, name, description, category, imageurl, price } = producto
  const { agregarAlCarro } = useCarroCompraContext()

  const priceFormatted = formatearMonedaChilena(price)

  const handleAgregarAlCarro = () => {
    agregarAlCarro(producto)
  }

  return (
    <div className='col '>
      <div className='card'>
        <img className='card-img-top' src={imageurl} alt="" width={'200px'} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className='fs-2'>{priceFormatted}</p>
          <button onClick={handleAgregarAlCarro} className="btn btn-primary">Añadir al carro</button>
        </div>
      </div>
    </div>
  )
}
