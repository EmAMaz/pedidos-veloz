import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { totalPriceCart } from "../utils/accionCart";

export function Cart() {
  const listadoProductos = useSelector((state) => state.counter);
  const [carrito, setCarrito] = useState(false);
  const [msj, setMsj] = useState("");
  const [priceTotalMsj, setPriceTotalMsj] = useState("");

  useEffect(() => {
    const filterToText = listadoProductos.map(
      (item) => `${item.name} x${item.quantity} $${item.price}`
    );
    
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

  return (
    <>
      <div className="cursor-pointer relative hover:translate-y-[-2px]">
        {listadoProductos.length > 0 && <span className="absolute text-sm bottom-2 text-center left-7 h-5 w-5 bg-black text-white rounded-full">{listadoProductos.length}</span>}
        
        <img onClick={() => verCarrito()} src="./cart-shopping.svg" />
      </div>
      {carrito && (
        <>
          <div className="absolute text-center top-11 right-0 bg-zinc-300 border-x-2 border-b-2">
            <h2 className="text-xl font-bold border-y-2 p-2">Tu carrito</h2>
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
          </div>
        </>
      )}
    </>
  );
}
