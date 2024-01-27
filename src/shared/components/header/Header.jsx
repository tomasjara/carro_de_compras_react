import React from 'react'
import { CarroDeCompra } from '../carroDeCompra/CarroDeCompra'
export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning shadow-sm ">
                <div className="container">
                    <a className="navbar-brand" href="/">Tienda</a>
                    <CarroDeCompra />
                </div>
            </nav>
        </>
    )
}
