import React, { useState } from "react";
import useGetCategory from "../hooks/api/useGetCategory";
import { useCreateProduct } from "../hooks/api/useCreateProduct";
import { toast } from "react-toastify";

export const ProductForm = () => {
  const { listCategorys } = useGetCategory();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });
  const { dataProduct, isSuccess, isPending, isError } = useCreateProduct();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedValue = name === "category" ? parseInt(value) : value;
      return {
        ...prevState,
        [name]: updatedValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    console.log(isError);
    dataProduct(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Agregar producto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Ingresa el nombre del producto"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Precio:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.precio}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Categoría:
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            >
              <option value="">Seleccione una categoría</option>
              {listCategorys.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 transform hover:-translate-y-0.5 shadow-md"
          >
            {isPending ? "Creando..." : "Crear"}
          </button>
        </form>

        {isError && (
          <div style={{ color: "red" }}>Error: {isError.error.message}</div>
        )}

        {isError && (
          <div style={{ color: "green" }}>Todo created successfully!</div>
        )}
      </div>
    </div>
  );
};
