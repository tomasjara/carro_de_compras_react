export const filtrarProductos = (productos, filtros) => {
  return productos.filter((producto) => {
    return (
      producto.price >= filtros.minPrice &&
      producto.price <= filtros.maxPrice &&
      (filtros.category === "all" || producto.category === filtros.category)
    );
  });
};
