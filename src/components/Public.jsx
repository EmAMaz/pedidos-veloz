import { useTheme } from "../context/themeContext";
import apiService from "../service/apiService";
import AnimateIn from "./AnimateIn";
import { CardProduct } from "./CardProduct";
import { DropdownCustom } from "./DropdownCustom";
import { NavBar } from "./NavBar";
import Rotate from "./Rotate";

export function Public() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div
      className={`min-h-screen pb-8 ${theme === "dark" ? "bg-dark" : "bg-gray-100"}`}
    >
      <div
        className={`flex border-b-2 mb-4 px-4 ${
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="w-5/6 mx-auto">
          <NavBar />
        </div>
      </div>
      <div className="w-5/6 mx-auto">
        <DropdownCustom />
      </div>
    </div>
  );
}
