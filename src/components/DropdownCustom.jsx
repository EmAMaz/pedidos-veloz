import { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import useGetCategory from "../hooks/api/useGetCategory";
import { TableProduct } from "./TableProduct";
import useFilterProducts from "../hooks/useFilterProducts";
import { Link, Navigate, useLocation } from "react-router-dom";

export function DropdownCustom() {
  const [categoriaSlted, setCategoriaSlted] = useState(0);
  const { theme } = useTheme();
  const { listCategorys, isLoadingCategory, isErrorCategory } =
    useGetCategory();
  const { listProductos, cleanFilter, loading, error } = useFilterProducts();
  const location = useLocation();

  return (
    <>
      <section className="flex">
        <div className="flex flex-col gap-4 w-40 items-center">
          <section className="flex flex-col gap-2">
            <span className="text-lg font-bold uppercase text-nowrap">
              Categorias
            </span>
            {listCategorys ? (
              listCategorys.map((item) => (
                <button
                  className={`text-nowrap ${
                    theme === "dark" ? "buttonLight" : "buttonDark"
                  }`}
                  key={item.id}
                  onClick={() => {
                    cleanFilter(item.id);
                  }}
                >
                  {item.name}
                </button>
              ))
            ) : (
              <p className="text-nowrap">No hay categorias...</p>
            )}
            <button
              className={
                theme === "dark" ? "buttonLightTodos" : "buttonDarkTodos"
              }
              onClick={() => {
                cleanFilter(0);
              }}
            >
              TODOS
            </button>
          </section>
          {location.pathname == "/intranet/panel-admin" && (
            <section className="flex flex-col gap-2">
              <Link
                to={location.pathname + "/add-product"}
                className="text-sm text-center font-bold text-white bg-green-600/80 rounded-lg py-1 uppercase cursor-pointer"
              >
                Agregar productos
              </Link>
            </section>
          )}
        </div>

        <TableProduct products={listProductos} loading={loading} />
      </section>
    </>
  );
}
