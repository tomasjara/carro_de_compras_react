import React from 'react'
import { CarroDeCompra } from '../carroDeCompra/CarroDeCompra'
import { SideBar } from '../sidebar/SideBar'
export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <SideBar
                        titulo='Menu'
                        direccion='start'
                    >
                        <p className='fw-bold'>[componente de contenido]</p>
                    </SideBar>
                    <a className="navbar-brand" href="/">Tienda</a>
                    <CarroDeCompra />
                </div>
            </nav>
        </>
    )
}
