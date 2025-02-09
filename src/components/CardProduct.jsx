import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../features/counter/counterSlice";
import { listProductBBDD } from "../../data/dataProduct";

export function CardProduct(productoAmostrar) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <>
      {listProductBBDD.length !== 0 ? (
        listProductBBDD
          .filter((item) => item.clase.id === productoAmostrar.productoAmostrar)
          .map((item) => (
            <div key={item.id} className="p-4 border-1 w-full">
              <div className="text-center">
                <img className="w-full imgProduct" src={item.imagePath} />
                <div className="flex flex-col pb-4">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <button
                  className="border-1 px-2 cursor-pointer"
                  aria-label="Add Product"
                  onClick={() => dispatch(addProduct(item))}
                >
                  Agregar
                </button>
                <span>{count}</span>
                <button
                  className="border-1 px-2 cursor-pointer"
                  aria-label="Decrement value"
                  onClick={() => dispatch(removeProduct(item))}
                >
                  Quitar
                </button>
              </div>
            </div>
          ))
      ) : (
        <div>
          <span>No hay productos</span>
        </div>
      )}
    </>
  );
}
