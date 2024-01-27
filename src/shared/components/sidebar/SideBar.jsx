import { useState } from 'react'

export const SideBar = ({ id = 'sidebar-exmaple', titulo = 'Sidebar de ejemplo', direccion = 'end', children }) => {
    const [mostarMenu, setMostrarMenu] = useState(false)

    const cerrarAbrilMenuLateral = () => {
        setMostrarMenu(prevState => !prevState)
        document.body.style.overflow = mostarMenu ? 'auto' : 'hidden'
    }

    const cerrarAlHacerCLickAfuera = (e) => {
        if (e.target.getAttribute('name') === id) return cerrarAbrilMenuLateral()
    }

    return (
        <>
            <div className='d-flex justify-content-end'>
                <button className="btn" onClick={cerrarAbrilMenuLateral}>
                    <label htmlFor="btn-menu">Icono de sidebar</label>
                </button>
            </div>

            <div
                name={id}
                className={`position-fixed vw-100 vh-100 top-0 start-0 ${mostarMenu ? 'visible ' : 'visually-hidden-focusable'}`}
                style={{ background: 'rgba(0, 0, 0, 0.5)', zIndex: '99',overflowX: 'hidden' }}
                onClick={cerrarAlHacerCLickAfuera}
            >
                <div
                    className={`position-absolute top-0 ${direccion}-0 bg-white w-100 min-vh-100`}
                    style={{ maxWidth: '399px', zIndex: '999'}}
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
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}