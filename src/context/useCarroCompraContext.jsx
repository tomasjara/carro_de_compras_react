import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../shared/hook/useLocalStorage';

const CarroCompraContext = createContext();

export const useCarroCompraContext = () => useContext(CarroCompraContext);

export const CarroCompraProvider = ({ children }) => {
    const { storedValue, setValue } = useLocalStorage('carroCompra', [])
    const [carro, setCarro] = useState(storedValue);
    const [cantidadProductosCarro, setCantidadProductosCarro] = useState(storedValue.length);
    const [precioTotal, setPrecioTotal] = useState(storedValue.length);

    useEffect(() => {
        if (carro.length === 0) return setPrecioTotal(0)
        setPrecioTotal(carro.reduce((total, producto) => {
            return total + producto.price * producto.quantity;
        }, 0))
    }, [carro])

    const agregarAlCarro = (producto) => {
        if (carro.find(item => item.id === producto.id)) {
            const nuevosProductos = carro.map(item => item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item)
            setCantidadProductosCarro(cantidadProductosCarro + producto.quantity)
            return setCarro([...nuevosProductos])
        }
        setCantidadProductosCarro(cantidadProductosCarro + producto.quantity)
        setCarro([...carro, producto])
        setValue([...carro, producto])
    }

    const quitarUnaCantidad = (producto) => {
        if (producto.quantity <= 1) {
            setCantidadProductosCarro(prevState => prevState - 1)
            return removerDelCarro(producto.id)
        }

        if (carro.find(item => item.id === producto.id)) {
            const nuevosProductos = carro.map(item => item.id === producto.id ? { ...item, quantity: item.quantity - 1 } : item)
            setCantidadProductosCarro(prevState => prevState - 1)
            return setCarro([...nuevosProductos])
        }
    }

    const removerDelCarro = (id) => {
        const nuevoEstado = carro.filter(item => item.id !== id)
        setCantidadProductosCarro(nuevoEstado.length)
        setCarro(nuevoEstado)
        setValue(nuevoEstado)
    }

    const limpiarCarro = () => {
        setCantidadProductosCarro(0)
        setCarro([])
        setValue([])
    }

    return (
        <CarroCompraContext.Provider value={{ carro, agregarAlCarro, limpiarCarro, removerDelCarro, quitarUnaCantidad, cantidadProductosCarro, precioTotal }}>
            {children}
        </CarroCompraContext.Provider>
    );
};
