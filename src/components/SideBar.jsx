import React, { Component } from 'react';
import useGetCategory from '../hooks/api/useGetCategory';
import { useTheme } from '../context/themeContext';
import useFilterProducts from '../hooks/useFilterProducts';

export function SideBar(listProductos, loading, error) {
    const { theme } = useTheme();
    const { listCategorys, isLoadingCategory, isErrorCategory } = useGetCategory();
    const { listProductos, cleanFilter, loading, error } = useFilterProducts();

    return (
      <section className="flex flex-col gap-2">
          <span className={`text-lg font-bold uppercase text-nowrap ${theme === "dark" ? "text-white" : "text-black" }`}>
            Categorias
          </span>

          {listCategorys ? (
            listCategorys.map((item) => (
              <button
                className={`text-nowrap ${theme === "dark" ? "buttonLight" : "buttonDark"}`}
                key={item.id}
                onClick={() => {
                  cleanFilter(item.id);
                }}
              >
                {item.name}
              </button>
            ))
          ) : (
            <p className={`text-nowrap ${theme === "dark" ? "text-white" : "text-black" }`}>No hay categorias...</p>
          )}

          <button
            className={theme === "dark" ? "buttonLightTodos" : "buttonDarkTodos"}
            onClick={() => {
              cleanFilter(0);
            }}
          >
            TODOS
          </button>
        </section>
    );
  }
