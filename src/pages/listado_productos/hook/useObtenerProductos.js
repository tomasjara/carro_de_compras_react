import { useState } from "react";
import { STUB_PRODUCTOS } from "../../../shared/stubs/productos/STUB_PRODUCTOS";

export const useObtenerProductos = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const cargarProductos = () => {
    setLoading(true);
    try {
      setResponse(STUB_PRODUCTOS);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    response,
    error,
    loading,
    cargarProductos,
  };
};
