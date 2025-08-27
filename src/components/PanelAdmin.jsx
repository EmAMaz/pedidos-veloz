import { useTheme } from "../context/themeContext";
import { DropdownCustom } from "./DropdownCustom";
import { NavBar } from "./NavBar";

export function PanelAdmin() {
  const theme = useTheme();
  return (
    <section>
      <h1 className="text-center bg-black/80 text-white font-bold uppercase text-sm py-2">Bienvenido al Panel Administrador</h1>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-dark" : "bg-gray-100"
        }`}
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
        <div className="w-5/6 mx-auto pb-8">
          <DropdownCustom />
        </div>
      </div>
    </section>
  );
}
