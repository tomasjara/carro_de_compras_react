import React from 'react'
import { CarroDeCompra } from '../carroDeCompra/CarroDeCompra'
import { SideBar } from '../sidebar/SideBar'
export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning shadow-sm ">
                <div className="container ">
                    <div className='d-flex align-items-center'>
                        <SideBar
                            titulo='Menu'
                            direccion='start'
                        >
                            <p className='fw-bold'>[componente de contenido]</p>
                        </SideBar>
                        <a className="navbar-brand m-0" href="/">Tienda</a>
                    </div>
                    <CarroDeCompra />
                </div>
            </nav>
        </>
    )
}
