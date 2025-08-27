import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../features/counter/counterSlice";
import { useTheme } from "../context/themeContext";
import { Link } from "react-router-dom";

export function CardProduct({ name, price, imagePath, id, item }) {
  const { theme } = useTheme();
  const listadoProductos = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const tokenAdmin = localStorage.getItem("tokenUser");

  return (
    <>
      <div
        className={`relative flex flex-col justify-between p-4 border-1 border-gray-300 rounded-lg w-[230px] shadow-lg ${
          !tokenAdmin && "h-[300px]"
        }`}
      >
        <div className="text-center">
          <img className="w-full imgProduct" src={imagePath} />
          <div className="flex flex-col pb-4">
            <span className="font-bold mt-2 text-gray-600">{name}</span>
            <span
              className={`font-bold text-xl ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              ${price}
            </span>
          </div>
        </div>
        {!tokenAdmin && (
          <div className="flex gap-2 justify-center">
            {listadoProductos.filter((i) => i.id === id)[0]?.quantity ? (
              <>
                <div className="flex items-center gap-4">
                  <button
                    className="cursor-pointer"
                    onClick={() => dispatch(removeProduct(item))}
                  >
                    <img src="./icons/minus.svg" alt="" />
                  </button>
                  <span className="text-xl font-bold">
                    {listadoProductos.filter((i) => i.id === id)[0]?.quantity}
                  </span>
                  <button
                    className="cursor-pointer"
                    onClick={() => dispatch(addProduct(item))}
                  >
                    <img src="./icons/plus.svg" alt="" />
                  </button>
                </div>
              </>
            ) : (
              <button
                className="border-1 px-2 cursor-pointer font-bold text-white bg-green-600 text-xs rounded-md py-2 uppercase "
                aria-label="Add Product"
                onClick={() => dispatch(addProduct(item))}
              >
                Agregar al carrito
              </button>
            )}
          </div>
        )}

        {/* <div className="absolute bottom-[-15px] left-0 py-1 flex justify-around rounded-b-lg bg-gray-700 w-full">
          <Link className="w-7" to={`/intranet/panel-admin/editar-producto/${id}`}>
            <img src="../../public/edit-white.svg"/>
          </Link>
          <Link className="w-7" to={`/intranet/panel-admin/editar-producto/${id}`}>
            <img src="../../public/delete-white.svg"/>
          </Link>
        </div> */}
      </div>
    </>
  );
}
