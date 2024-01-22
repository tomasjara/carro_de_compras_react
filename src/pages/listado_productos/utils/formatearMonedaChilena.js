export const formatearMonedaChilena = (numero) => {
  let numeroString = String(numero).replace(/[^\d]/g, "");
  let partes = [];
  while (numeroString.length > 3) {
    partes.unshift(numeroString.slice(-3));
    numeroString = numeroString.slice(0, -3);
  }
  partes.unshift(numeroString);
  return "$" + partes.join(".");
};
