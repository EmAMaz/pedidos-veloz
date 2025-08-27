import { useEffect, useState, useCallback } from "react";
import apiService from "../service/apiService";

export default function useFilterProducts() {
  const [listProductos, setListProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFilterByCategory = useCallback(async (categoryId) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiService.getProductsByCategory(categoryId);

      if (result.length === 0) {
        console.log("No hay productos para esta categoría");
      }

      setListProductos(result);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error al filtrar productos");
    } finally {
      setLoading(false);
    }
  }, []);

  const cleanFilter = useCallback((id) => {
      handleFilterByCategory(id);
    },
    [handleFilterByCategory]
  );

  useEffect(() => {
    handleFilterByCategory(0);
  }, []);

  return {
    listProductos,
    cleanFilter,
    loading,
    error,
    filterByCategory: handleFilterByCategory, // Opcional: exponer la función para usarla directamente
  };
}
