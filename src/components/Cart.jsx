import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { totalPriceCart } from "../utils/accionCart";
import { useTheme } from "../context/themeContext";
import AnimateIn from "./AnimateIn";
import { LuShoppingCart } from "react-icons/lu";

export function Cart() {
  const listadoProductos = useSelector((state) => state.counter);
  const [carrito, setCarrito] = useState(false);
  const [msj, setMsj] = useState("");
  const [priceTotalMsj, setPriceTotalMsj] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const filterToText = listadoProductos.map(
      (item) => `${item.name} $${item.price} x${item.quantity} `
    );
    console.log(listadoProductos);
    setMsj(filterToText.map((item) => item).join("%0A●"));
    setPriceTotalMsj(totalPriceCart(listadoProductos));
  }, [listadoProductos]);

  const verCarrito = () => {
    setCarrito(!carrito);
  };

  const enviarPedido = () => {
    window.open(
      `https://wa.me/5491150148147?text=Hola%20mi%20pedido%20es%20el%20siguiente:%0A%0A●${msj}%0A%0ATotal%20a%20pagar:%20$${priceTotalMsj}`,
      "_blank"
    );
  };

  useEffect(() => {
    if (listadoProductos.length === 0) {
      setCarrito(false);
    }
  }, [listadoProductos]);

  return (
    <>
      <div className={`cursor-pointer relative hover:backdrop-brightness-95 rounded-full p-2 ${theme === "dark" ? "hover:backdrop-brightness-200" : "hover:backdrop-brightness-95"}`}>
        {listadoProductos.length > 0 && (
          <span className={`absolute text-sm font-bold top-0 left-0 text-center translate-x-[100%] h-5 w-6 rounded-full ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
            {listadoProductos.length}
          </span>
        )}

        <LuShoppingCart onClick={verCarrito} size="1.5em" color={`${theme === "dark" ? "white" : "black" }`}/>
      </div>
      {carrito && (
        <AnimateIn
          from="opacity-0 translate-x-4"
          to="opacity-100 translate-x-0"
          className="absolute z-20 top-16 bg-zinc-300 text-center border-x-2 border-2 rounded-lg"
          delay={200}
        >
            <h2 className="text-xl font-bold border-b-2 p-2">Tu carrito</h2>
            {listadoProductos.length !== 0 ? (
              <>
                <ul className="p-4 gap-3 flex flex-col">
                  {listadoProductos.map((item) => (
                    <li key={item.id} className="flex gap-2">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                      <span>{item.quantity}x</span>
                    </li>
                  ))}
                </ul>
                <span className="font-semibold">TOTAL: {priceTotalMsj}</span>
                <div className="p-2 m-2">
                  <button
                    className="cursor-pointer border-2 w-full"
                    onClick={() => enviarPedido()}
                  >
                    Confirmar
                  </button>
                </div>
              </>
            ) : (
              <div className="p-4">
                <span>No hay productos en el carrito</span>
              </div>
            )}
        </AnimateIn>
      )}
    </>
  );
}
