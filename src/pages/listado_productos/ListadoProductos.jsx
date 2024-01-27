import React, { useEffect, useState } from 'react'
import { useObtenerProductos } from './hook/useObtenerProductos'
import { RenderizadoCondicional } from '../../shared/components/renderizadoCondicional/RenderizadoCondicional'
import { LoadingSpinner } from '../../shared/components/loadingSpinner/LoadingSpinner'
import { Productos } from './components/Productos'
import { FiltradoProductos } from './components/FiltradoProductos'

export const ListadoProductos = () => {

    const { response, loading, error, cargarProductos } = useObtenerProductos()
    const [productosFiltrados, setProductosFiltrados] = useState([])

    useEffect(() => {
        cargarProductos()
    }, [])

    return (
        <>
            <h1 className='text-center my-3'>Listado productos</h1>
            <FiltradoProductos
                setProductosFiltrados={setProductosFiltrados}
                productos={response} />

            <div className='container my-2'>
                <RenderizadoCondicional
                    LoadingState={loading}
                    responseState={response}
                    errorState={error}
                    LoadingComponent={<LoadingSpinner />}
                    errorComponent={<>error</>}
                    responseComponent={<Productos productosData={productosFiltrados} />}
                />
            </div>
        </>
    )
}
