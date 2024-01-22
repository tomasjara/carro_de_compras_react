import React from 'react'

export const LoadingSpinner = ({ className = '', style }) => {
    return (
        <div className={`d-flex justify-content-center ${className} my-3`} style={style} >
            <div className="spinner-border" style={{ width: "4rem", height: "4rem" }} role="status">
                <span className="visually-hidden"> Loading...</span>
            </div>
        </div>
    )
}