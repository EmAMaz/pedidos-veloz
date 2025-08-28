import { useTheme } from "../context/themeContext";
import { CardProduct } from "./CardProduct";
import { Loader } from "./Loader";
import NotAvailable from "./NotAvailable";

export function TableProduct({ products, loading }) {
  const { theme } = useTheme();
  return (
    <>
      {!loading && products.length === 0 && <NotAvailable />}
      {loading && <Loader />}
      {products.message && <p className={`flex flex-col w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible ${theme === "dark" ? "text-white" : "text-gray-600"}`}>{products.message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-12 px-4">
        {!loading &&
          products &&
          products.length > 0 &&
          products.map((item) => (
            <CardProduct
              id={item.id}
              key={item.id}
              item={item}
              name={item.name}
              price={item.price}
              imagePath={item.imagePath}
            />
          ))}
         
      </div>
    </>
  );
}
