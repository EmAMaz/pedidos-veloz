import { useState } from "react";
import { listProductBBDD } from "../../data/dataProduct";
import { CardProduct } from "./CardProduct";

export function DropdownCustom() {
  const [productoClase, setProductoClase] = useState(1);

  const changeListadoProduct = (categoria) => {
    setProductoClase(categoria);
  };
  
  const clases = listProductBBDD.map((item) => item.clase);

  const claseUnicas = clases.reduce((acc, producto) => {
    const exists = acc.some(p => p.id === producto.id);
    if (!exists) {
        acc.push(producto);
    }
    return acc;
}, []);
  
  return (
    <>
      <section className="flex">
        <section className="flex flex-col gap-2">
          <span className="text-lg font-bold uppercase">Categorias</span>
          {claseUnicas.map((item, index) => (
            <h1
              className="cursor-pointer bg-black text-white px-4 py-2 rounded-md hover:bg-black/85 min-w-max"
              key={index}
              onClick={() => changeListadoProduct(item.id)}
            >
              {item.nameClase}
            </h1>
          ))}
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-12 px-4">
          <CardProduct productoAmostrar={productoClase} />
        </div>
      </section>
    </>
  );
}
