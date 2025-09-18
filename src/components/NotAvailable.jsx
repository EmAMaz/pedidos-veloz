import { IoIosClose } from "react-icons/io";
import { useTheme } from "../context/themeContext";

export default function NotAvailable() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col w-full place-items-center rounded-lg p-6">
      <IoIosClose size="2em" color={`${theme === "dark" ? "white" : "black" }`} />
      <p
        className={`flex flex-col w-full place-items-center rounded-lg ${
          theme === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        No se encontraron resultados...
      </p>
    </div>
  );
}
